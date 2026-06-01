const mongoose = require('mongoose');
const slugify = require('slugify');

const CATEGORIES = ['toiture', 'facade', 'isolation', 'renovation', 'entretien', 'conseils'];

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, lowercase: true },
  content: { type: String, required: true },
  excerpt: { type: String, maxlength: 300 },
  metaTitle: { type: String, maxlength: 70 },
  metaDescription: { type: String, maxlength: 160 },
  keywords: [{ type: String, trim: true }],
  image: { type: String },
  imageAlt: { type: String },
  category: { type: String, enum: CATEGORIES, default: 'renovation' },
  cityTags: [{ type: String }],
  published: { type: Boolean, default: false },
}, { timestamps: true });

async function generateUniqueSlug(title, excludeId = null) {
  const base = slugify(title, { lower: true, strict: true, locale: 'fr', replacement: '-' });
  let slug = base;
  let count = 0;
  const query = { slug };
  if (excludeId) query._id = { $ne: excludeId };
  while (await mongoose.model('Article').findOne(count === 0 ? query : { slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })) {
    count++;
    slug = `${base}-${count}`;
  }
  return slug;
}

articleSchema.pre('save', async function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = await generateUniqueSlug(this.title, this._id);
  }
  if (!this.metaTitle) this.metaTitle = `${this.title} | Global Réno`;
  if (!this.metaDescription && this.excerpt) this.metaDescription = this.excerpt;
  if (!this.imageAlt) this.imageAlt = `${this.title} - Global Réno Cholet`;
  next();
});

module.exports = mongoose.model('Article', articleSchema);
