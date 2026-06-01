const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../database.db'));

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    email   TEXT UNIQUE NOT NULL COLLATE NOCASE,
    password TEXT NOT NULL,
    name    TEXT DEFAULT 'Admin',
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS articles (
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
  );
`);

console.log('✅ SQLite prêt —', path.join(__dirname, '../database.db'));

module.exports = db;
