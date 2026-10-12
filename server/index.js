const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
require('express-async-errors'); // erreurs des routes async → réponse 500 au lieu d'un crash
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const db = require('./config/db'); // initialise la base (fichier local ou Turso)

// Créer l'admin au premier démarrage si la table est vide
// Si JWT_SECRET n'est pas défini (variables d'environnement perdues lors d'un
// redéploiement Hostinger), on génère une clé aléatoire et on la garde en base :
// la connexion admin continue de marcher sans configuration.
async function ensureJwtSecret() {
  if (process.env.JWT_SECRET) return;
  await db.run('CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)');
  let row = await db.get("SELECT value FROM settings WHERE key = 'jwt_secret'");
  if (!row) {
    const secret = require('crypto').randomBytes(48).toString('hex');
    await db.run("INSERT INTO settings (key, value) VALUES ('jwt_secret', ?)", secret);
    row = { value: secret };
    console.log('🔑 JWT_SECRET absent : clé générée et enregistrée en base');
  }
  process.env.JWT_SECRET = row.value;
}

async function seedAdmin() {
  const bcrypt = require('bcryptjs');
  const email = (process.env.ADMIN_EMAIL || 'admin@globalreno.fr').toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'GlobalReno2024!';
  const existing = await db.get('SELECT id FROM users WHERE email = ?', email);
  if (!existing) {
    const hash = bcrypt.hashSync(password, 12);
    await db.run('INSERT INTO users (email, password, name) VALUES (?, ?, ?)', email, hash, 'Admin Global Réno');
    console.log('✅ Admin créé :', email);
  }
}

const authRoutes = require('./routes/auth');
const articlesRoutes = require('./routes/articles');
const adminRoutes = require('./routes/admin');

const app = express();
// Derrière le proxy Hostinger : vraie IP du visiteur pour le rate-limit
// (sinon tous les visiteurs partagent la même limite de 10 connexions/h).
app.set('trust proxy', 1);
const fs = require('fs');
const distPath = path.join(__dirname, '../dist');
const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

// Le site (Hostinger) et l'API (Railway) sont sur des domaines différents :
// on autorise explicitement les origines du site, avec et sans www.
// CLIENT_URL peut contenir plusieurs URLs séparées par des virgules.
const allowedOrigins = [
  'https://globalreno-renovation.fr',
  'https://www.globalreno-renovation.fr',
  'http://localhost:5173',
  ...(process.env.CLIENT_URL || '').split(',').map((s) => s.trim().replace(/\/$/, '')),
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const globalLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, max: 10,
  message: { message: 'Trop de tentatives, réessayez dans 1h' },
});

app.use('/api/', globalLimiter);
app.use('/api/auth/login', authLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', db: process.env.TURSO_DATABASE_URL ? 'Turso' : 'SQLite', timestamp: new Date() }));

// Sitemap dynamique — pages statiques + tous les articles publiés
app.get('/sitemap.xml', async (_req, res) => {
  const db = require('./config/db');
  const SITE = process.env.SITE_URL || 'https://globalreno-renovation.fr';

  const staticPages = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE}/services`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE}/realisations`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE}/contact`, priority: '0.7', changefreq: 'yearly' },
    { loc: `${SITE}/blog`, priority: '0.9', changefreq: 'daily' },
    { loc: `${SITE}/mentions-legales`, priority: '0.3', changefreq: 'yearly' },
  ];

  const articles = await db.all('SELECT slug, updated_at FROM articles WHERE published = 1 ORDER BY updated_at DESC');

  const urlTags = [
    ...staticPages.map(({ loc, priority, changefreq }) => `
  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`),
    ...articles.map(({ slug, updated_at }) => `
  <url>
    <loc>${SITE}/blog/${slug}</loc>
    <lastmod>${updated_at ? updated_at.slice(0, 10) : new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`),
  ].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlTags}
</urlset>`;

  res.set('Content-Type', 'application/xml');
  res.send(xml);
});

// Servir le frontend React si dist/ est buildé (prod)
if (hasDist) {
  // extensions: /services sert services.html (page prérendue pour le GEO)
  app.use(express.static(distPath, { extensions: ['html'] }));
  app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'spa.html')));
}

const PORT = process.env.PORT || 5001;
db.ready.then(ensureJwtSecret).then(seedAdmin).then(() => {
  app.listen(PORT, () => console.log(`🚀 Global Réno → http://localhost:${PORT}`));
});
