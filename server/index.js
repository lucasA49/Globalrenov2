require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');

require('./config/db'); // initialise SQLite

const authRoutes = require('./routes/auth');
const articlesRoutes = require('./routes/articles');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Global Réno API → http://localhost:${PORT}`));
