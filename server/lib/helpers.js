const { randomUUID } = require('crypto');
const slugifyLib = require('slugify');
const db = require('../config/db');

function generateId() {
  return randomUUID();
}

function generateSlug(title, excludeId = null) {
  const base = slugifyLib(title, { lower: true, strict: true, locale: 'fr' });
  let slug = base;
  let count = 0;
  while (true) {
    const row = excludeId
      ? db.prepare('SELECT id FROM articles WHERE slug = ? AND id != ?').get(slug, excludeId)
      : db.prepare('SELECT id FROM articles WHERE slug = ?').get(slug);
    if (!row) break;
    slug = `${base}-${++count}`;
  }
  return slug;
}

function rowToArticle(row) {
  if (!row) return null;
  return {
    _id: row.id,
    id: row.id,
    title: row.title,
    slug: row.slug,
    content: row.content,
    excerpt: row.excerpt,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    keywords: JSON.parse(row.keywords || '[]'),
    image: row.image,
    imageAlt: row.image_alt,
    category: row.category,
    cityTags: JSON.parse(row.city_tags || '[]'),
    published: Boolean(row.published),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

module.exports = { generateId, generateSlug, rowToArticle };
