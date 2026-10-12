const { createClient } = require('@libsql/client');
const path = require('path');

// Par défaut : fichier SQLite. DATABASE_PATH permet de le placer HORS du
// dossier de l'app (ex. sur Hostinger, pour qu'un redéploiement ne l'écrase pas).
// TURSO_DATABASE_URL (optionnel) : base distante Turso, pour un hébergeur sans disque persistant.
const localFile = process.env.DATABASE_PATH || path.join(__dirname, '../database.db');
const client = createClient(
  process.env.TURSO_DATABASE_URL
    ? { url: process.env.TURSO_DATABASE_URL, authToken: process.env.TURSO_AUTH_TOKEN }
    : { url: `file:${localFile}` }
);

// Petite surcouche pour garder des appels proches de l'ancien better-sqlite3 :
// db.get / db.all / db.run, mais asynchrones (à utiliser avec await).
const db = {
  async get(sql, ...args) {
    const { rows } = await client.execute({ sql, args });
    return rows[0];
  },
  async all(sql, ...args) {
    const { rows } = await client.execute({ sql, args });
    return rows;
  },
  async run(sql, ...args) {
    const { rowsAffected } = await client.execute({ sql, args });
    return { changes: rowsAffected };
  },
};

db.ready = client.batch([
  `CREATE TABLE IF NOT EXISTS users (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    email   TEXT UNIQUE NOT NULL COLLATE NOCASE,
    password TEXT NOT NULL,
    name    TEXT DEFAULT 'Admin',
    created_at TEXT DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS articles (
    id               TEXT PRIMARY KEY,
    title            TEXT NOT NULL,
    slug             TEXT UNIQUE NOT NULL,
    content          TEXT NOT NULL DEFAULT '',
    excerpt          TEXT DEFAULT '',
    meta_title       TEXT DEFAULT '',
    meta_description TEXT DEFAULT '',
    keywords         TEXT DEFAULT '[]',
    image            TEXT DEFAULT '',
    image_alt        TEXT DEFAULT '',
    category         TEXT DEFAULT 'renovation',
    city_tags        TEXT DEFAULT '[]',
    published        INTEGER DEFAULT 0,
    created_at       TEXT DEFAULT (datetime('now')),
    updated_at       TEXT DEFAULT (datetime('now'))
  )`,
], 'write').then(() => {
  console.log('✅ Base prête —', process.env.TURSO_DATABASE_URL ? 'Turso' : localFile);
});

module.exports = db;
