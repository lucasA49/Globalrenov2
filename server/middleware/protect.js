const jwt = require('jsonwebtoken');
const db = require('../config/db');

const protect = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Accès non autorisé, token manquant' });
  }
  try {
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await db.get('SELECT id, email, name FROM users WHERE id = ?', decoded.id);
    if (!user) return res.status(401).json({ message: 'Utilisateur introuvable' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Token invalide ou expiré' });
  }
};

module.exports = protect;
