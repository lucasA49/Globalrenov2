const express = require('express');
const db = require('../config/db');
const { rowToArticle } = require('../lib/helpers');

const router = express.Router();

// GET /api/articles — liste publiés avec pagination et filtre catégorie
router.get('/', async (req, res) => {
  const { page = 1, limit = 9, category } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  const where = category ? 'WHERE published = 1 AND category = ?' : 'WHERE published = 1';
  const params = category ? [category] : [];

  const { count: total } = await db.get(`SELECT COUNT(*) as count FROM articles ${where}`, ...params);
  const rows = await db.all(`SELECT * FROM articles ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`, ...params, Number(limit), offset);

  res.json({
    articles: rows.map(rowToArticle),
    total,
    pages: Math.ceil(total / Number(limit)),
    currentPage: Number(page),
  });
});

// GET /api/articles/:slug — article SEO complet + articles liés
router.get('/:slug', async (req, res) => {
  const article = await db.get('SELECT * FROM articles WHERE slug = ? AND published = 1', req.params.slug);
  if (!article) return res.status(404).json({ message: 'Article introuvable' });

  const related = await db.all('SELECT * FROM articles WHERE published = 1 AND id != ? AND category = ? ORDER BY created_at DESC LIMIT 3', article.id, article.category);

  res.json({ article: rowToArticle(article), related: related.map(rowToArticle) });
});

module.exports = router;
