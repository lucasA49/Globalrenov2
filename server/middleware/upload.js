const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.memoryStorage();

const fileFilter = (_req, file, cb) => {
  const allowedMimes = /^image\/(jpeg|jpg|png|gif|webp)$/;
  if (allowedMimes.test(file.mimetype)) cb(null, true);
  else cb(new Error('Seules les images sont autorisées (jpeg, jpg, png, gif, webp)'));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

async function processImage(req, _res, next) {
  if (!req.file) return next();

  if (process.env.CLOUDINARY_CLOUD_NAME) {
    const { v2: cloudinary } = require('cloudinary');
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    return new Promise((resolve) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'globalreno', format: 'webp', quality: 82, transformation: [{ width: 1200, crop: 'limit' }] },
        (error, result) => {
          if (error) return next(error);
          req.file.cloudinaryUrl = result.secure_url;
          next();
          resolve();
        }
      );
      stream.end(req.file.buffer);
    });
  }

  // Fallback local (dev)
  try {
    const sharp = require('sharp');
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
    const outputPath = path.join(uploadsDir, filename);
    await sharp(req.file.buffer)
      .webp({ quality: 82 })
      .resize({ width: 1200, withoutEnlargement: true })
      .toFile(outputPath);
    req.file.filename = filename;
    req.file.path = outputPath;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { upload, processImage };
