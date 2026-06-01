require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const bcrypt = require('bcryptjs');
const db = require('../config/db');

const email = (process.env.ADMIN_EMAIL || 'admin@globalreno.fr').toLowerCase();
const password = process.env.ADMIN_PASSWORD || 'GlobalReno2024!';
const name = 'Admin Global Réno';

const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);

if (existing) {
  console.log(`✅ Admin existe déjà : ${email}`);
} else {
  const hash = bcrypt.hashSync(password, 12);
  db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)').run(email, hash, name);
  console.log(`✅ Admin créé avec succès !`);
  console.log(`   Email    : ${email}`);
  console.log(`   Password : ${password}`);
}

process.exit(0);
