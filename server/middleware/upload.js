const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Stockage temporaire en mémoire — sharp convertit avant d'écrire sur disque
const storage = multer.memoryStorage();

const fileFilter = (_req, file, cb) => {
  const allowedMimes = /^image\/(jpeg|jpg|png|gif|webp)$/;
  if (allowedMimes.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Seules les images sont autorisées (jpeg, jpg, png, gif, webp)'));
  }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

// Middleware post-upload : convertit en WebP et écrit sur disque
async function convertToWebp(req, _res, next) {
  if (!req.file) return next();

  try {
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
    const outputPath = path.join(uploadsDir, filename);

    await sharp(req.file.buffer)
      .webp({ quality: 82 })
      .resize({ width: 1200, withoutEnlargement: true })
      .toFile(outputPath);

    // Remplace req.file.filename pour que la route admin puisse construire l'URL
    req.file.filename = filename;
    req.file.path = outputPath;

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { upload, convertToWebp };
