const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const db = require('./config/db'); // initialise SQLite

// Créer l'admin au premier démarrage si la table est vide
(function seedAdmin() {
  const bcrypt = require('bcryptjs');
  const email = (process.env.ADMIN_EMAIL || 'admin@globalreno.fr').toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'GlobalReno2024!';
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (!existing) {
    const hash = bcrypt.hashSync(password, 12);
    db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)').run(email, hash, 'Admin Global Réno');
    console.log('✅ Admin créé :', email);
  }
})();

const authRoutes = require('./routes/auth');
const articlesRoutes = require('./routes/articles');
const adminRoutes = require('./routes/admin');

const app = express();
const fs = require('fs');
const distPath = path.join(__dirname, '../dist');
const hasDist = fs.existsSync(path.join(distPath, 'index.html'));

// Si dist/ existe on est en prod (même domaine) → pas de CORS
// Sinon on est en dev → on autorise Vite dev server
app.use(cors({
  origin: hasDist ? false : (process.env.CLIENT_URL || 'http://localhost:5173'),
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

app.get('/api/health', (_req, res) => res.json({ status: 'ok', db: 'SQLite', timestamp: new Date() }));

// Sitemap dynamique — pages statiques + tous les articles publiés
app.get('/sitemap.xml', (_req, res) => {
  const db = require('./config/db');
  const SITE = process.env.SITE_URL || 'https://globalreno-renovation.fr';

  const staticPages = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE}/services`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE}/realisations`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE}/contact`, priority: '0.7', changefreq: 'yearly' },
    { loc: `${SITE}/blog`, priority: '0.9', changefreq: 'daily' },
  ];

  const articles = db.prepare(
    'SELECT slug, updated_at FROM articles WHERE published = 1 ORDER BY updated_at DESC'
  ).all();

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
  app.use(express.static(distPath));
  app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Global Réno → http://localhost:${PORT}`));
