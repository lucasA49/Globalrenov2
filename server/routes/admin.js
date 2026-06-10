const express = require('express');
const db = require('../config/db');
const protect = require('../middleware/protect');
const { upload, processImage } = require('../middleware/upload');
const { generateId, generateSlug, rowToArticle } = require('../lib/helpers');

const router = express.Router();
router.use(protect);

// GET /api/admin/articles — liste complète
router.get('/articles', (_req, res) => {
  const rows = db.prepare('SELECT * FROM articles ORDER BY created_at DESC').all();
  const articles = rows.map(rowToArticle);
  const published = articles.filter((a) => a.published).length;
  res.json({ articles, stats: { total: articles.length, published, drafts: articles.length - published } });
});

// GET /api/admin/articles/:id — article par ID
router.get('/articles/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ message: 'Article introuvable' });
  res.json(rowToArticle(row));
});

// POST /api/admin/articles — créer
router.post('/articles', (req, res) => {
  const { title, content, excerpt = '', metaTitle = '', metaDescription = '', keywords = [], image = '', imageAlt = '', category = 'renovation', cityTags = [], published = false, slug: customSlug } = req.body;

  if (!title || !content) return res.status(400).json({ message: 'Titre et contenu obligatoires' });

  const id = generateId();
  const slug = customSlug || generateSlug(title);
  const finalMetaTitle = metaTitle || `${title} | Global Réno`;
  const finalMetaDescription = metaDescription || (excerpt ? excerpt.slice(0, 160) : '');
  const finalImageAlt = imageAlt || `${title} - Global Réno Cholet`;

  try {
    db.prepare(`
      INSERT INTO articles (id, title, slug, content, excerpt, meta_title, meta_description, keywords, image, image_alt, category, city_tags, published)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, title, slug, content, excerpt, finalMetaTitle, finalMetaDescription, JSON.stringify(keywords), image, finalImageAlt, category, JSON.stringify(cityTags), published ? 1 : 0);

    const row = db.prepare('SELECT * FROM articles WHERE id = ?').get(id);
    res.status(201).json(rowToArticle(row));
  } catch (err) {
    if (err.message?.includes('UNIQUE')) return res.status(400).json({ message: 'Ce slug existe déjà' });
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/admin/articles/:id — modifier
router.put('/articles/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ message: 'Article introuvable' });

  const { title, content, excerpt, metaTitle, metaDescription, keywords, image, imageAlt, category, cityTags, published, slug: customSlug } = req.body;

  const slug = customSlug || (title !== existing.title ? generateSlug(title, req.params.id) : existing.slug);
  const finalMetaTitle = metaTitle || (title ? `${title} | Global Réno` : existing.meta_title);
  const finalMetaDescription = metaDescription ?? (excerpt ? excerpt.slice(0, 160) : existing.meta_description);

  try {
    db.prepare(`
      UPDATE articles SET
        title = ?, slug = ?, content = ?, excerpt = ?,
        meta_title = ?, meta_description = ?, keywords = ?,
        image = ?, image_alt = ?, category = ?, city_tags = ?,
        published = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(
      title ?? existing.title,
      slug,
      content ?? existing.content,
      excerpt ?? existing.excerpt,
      finalMetaTitle,
      finalMetaDescription,
      JSON.stringify(keywords ?? JSON.parse(existing.keywords)),
      image ?? existing.image,
      imageAlt ?? existing.image_alt,
      category ?? existing.category,
      JSON.stringify(cityTags ?? JSON.parse(existing.city_tags)),
      published !== undefined ? (published ? 1 : 0) : existing.published,
      req.params.id
    );

    const row = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
    res.json(rowToArticle(row));
  } catch (err) {
    if (err.message?.includes('UNIQUE')) return res.status(400).json({ message: 'Ce slug existe déjà' });
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/admin/articles/:id — supprimer
router.delete('/articles/:id', (req, res) => {
  const result = db.prepare('DELETE FROM articles WHERE id = ?').run(req.params.id);
  if (result.changes === 0) return res.status(404).json({ message: 'Article introuvable' });
  res.json({ message: 'Article supprimé avec succès' });
});

// POST /api/admin/upload — upload image
router.post('/upload', upload.single('image'), processImage, (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Aucun fichier reçu' });
  const url = req.file.cloudinaryUrl
    || `${process.env.BACKEND_URL || process.env.API_URL || 'http://localhost:5001'}/uploads/${req.file.filename}`;
  res.json({ url, filename: req.file.filename });
});

module.exports = router;
