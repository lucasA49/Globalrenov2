import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthAdminContext';
import AdminLayout from '../components/AdminLayout';
import TipTapEditor from '../components/TipTapEditor';
import { generateSlug, CATEGORIES, CITY_OPTIONS } from '../../lib/api';
import { Save, Eye, Upload, X, Tag, MapPin, ArrowLeft } from 'lucide-react';

const INITIAL = {
  title: '', slug: '', excerpt: '', content: '',
  metaTitle: '', metaDescription: '', keywords: [],
  image: '', imageAlt: '', category: 'renovation',
  cityTags: [], published: false,
};

function Field({ label, hint, required, children }) {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-1.5">
        <label className="text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
        {hint && <span className="text-xs text-gray-400">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

export default function AdminArticleForm({ articleId }) {
  const { authAxios } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL);
  const [keywordInput, setKeywordInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [slugLocked, setSlugLocked] = useState(!!articleId);
  const fileRef = useRef();

  const isEdit = !!articleId;

  useEffect(() => {
    if (!isEdit) return;
    authAxios.get(`/admin/articles/${articleId}`)
      .then((res) => { setForm(res.data); setSlugLocked(true); })
      .catch(() => setError('Impossible de charger l\'article'));
  }, [articleId]);

  const set = (field, value) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && !slugLocked) {
        next.slug = generateSlug(value);
        if (!prev.metaTitle || prev.metaTitle === `${prev.title} | Global Réno`) {
          next.metaTitle = value ? `${value} | Global Réno` : '';
        }
      }
      if (field === 'excerpt' && !prev.metaDescription) {
        next.metaDescription = value.slice(0, 160);
      }
      return next;
    });
  };

  const addKeyword = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && keywordInput.trim()) {
      e.preventDefault();
      const kw = keywordInput.trim().replace(/,$/, '');
      if (!form.keywords.includes(kw)) {
        setForm((p) => ({ ...p, keywords: [...p.keywords, kw] }));
      }
      setKeywordInput('');
    }
  };

  const removeKeyword = (kw) => setForm((p) => ({ ...p, keywords: p.keywords.filter((k) => k !== kw) }));

  const toggleCity = (city) => {
    setForm((p) => ({
      ...p,
      cityTags: p.cityTags.includes(city)
        ? p.cityTags.filter((c) => c !== city)
        : [...p.cityTags, city],
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('image', file);
    try {
      const res = await authAxios.post('/admin/upload', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setForm((p) => ({
        ...p,
        image: res.data.url,
        imageAlt: p.imageAlt || `${p.title} - Global Réno`,
      }));
    } catch {
      setError('Erreur lors de l\'upload de l\'image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (published) => {
    setError('');
    setSuccess('');
    if (!form.title || !form.content) {
      setError('Le titre et le contenu sont obligatoires');
      return;
    }
    setSaving(true);
    try {
      const payload = { ...form, published };
      if (isEdit) {
        await authAxios.put(`/admin/articles/${articleId}`, payload);
        setSuccess('Article mis à jour avec succès !');
        setForm((p) => ({ ...p, published }));
      } else {
        const res = await authAxios.post('/admin/articles', payload);
        setSuccess('Article créé avec succès !');
        setTimeout(() => navigate(`/admin/articles/edit/${res.data._id}`), 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate('/admin/articles')} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-500">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{isEdit ? 'Modifier l\'article' : 'Nouvel article'}</h1>
            <p className="text-gray-500 text-sm mt-1">{isEdit ? form.title : 'Créez un nouvel article SEO optimisé'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSubmit(false)}
              disabled={saving}
              className="px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 cursor-pointer disabled:opacity-60 flex items-center gap-2"
            >
              <Save size={16} />
              Brouillon
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={saving}
              className="px-4 py-2.5 bg-[#4F7A28] text-white rounded-lg text-sm font-medium hover:bg-[#3d6020] cursor-pointer disabled:opacity-60 flex items-center gap-2"
            >
              <Eye size={16} />
              {isEdit ? (form.published ? 'Mettre à jour' : 'Publier') : 'Publier'}
            </button>
          </div>
        </div>

        {/* Alerts */}
        {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">{error}</div>}
        {success && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">{success}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
              <h2 className="font-semibold text-gray-900 border-b pb-3">Contenu de l'article</h2>

              <Field label="Titre" required>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => set('title', e.target.value)}
                  placeholder="Ex: Comment rénover sa façade à Cholet ?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28]"
                />
              </Field>

              <Field label="Slug URL" hint={<span className="text-xs">{slugLocked ? '(verrouillé)' : '(auto)'}</span>}>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 py-3 bg-gray-50 border border-gray-200 border-r-0 rounded-l-lg text-sm text-gray-500 flex-shrink-0">
                    /blog/
                  </div>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => set('slug', e.target.value)}
                    disabled={slugLocked && isEdit}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#4F7A28] disabled:bg-gray-50 disabled:text-gray-500"
                  />
                  {isEdit && (
                    <button
                      type="button"
                      onClick={() => setSlugLocked(!slugLocked)}
                      className="px-3 py-2 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      {slugLocked ? 'Modifier' : 'Verrouiller'}
                    </button>
                  )}
                </div>
              </Field>

              <Field label="Extrait" hint="(max 300 chars, utilisé comme meta description par défaut)">
                <textarea
                  value={form.excerpt}
                  onChange={(e) => set('excerpt', e.target.value)}
                  placeholder="Court résumé de l'article (160-300 caractères)..."
                  maxLength={300}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28] resize-none"
                />
                <p className="text-xs text-gray-400 text-right mt-1">{form.excerpt.length}/300</p>
              </Field>

              <Field label="Contenu" required>
                <TipTapEditor value={form.content} onChange={(html) => set('content', html)} />
              </Field>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Image principale</h2>

              {form.image ? (
                <div className="relative">
                  <img src={form.image} alt={form.imageAlt} className="w-full h-40 object-cover rounded-lg" />
                  <button
                    onClick={() => setForm((p) => ({ ...p, image: '' }))}
                    className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="w-full h-32 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-[#4F7A28] hover:bg-green-50/50 transition-colors cursor-pointer disabled:opacity-60"
                >
                  <Upload size={20} className="text-gray-400" />
                  <span className="text-sm text-gray-500">{uploading ? 'Upload...' : 'Cliquer pour uploader'}</span>
                  <span className="text-xs text-gray-400">JPG, PNG, WebP — max 5MB</span>
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />

              {form.image && (
                <input
                  type="text"
                  value={form.imageAlt}
                  onChange={(e) => set('imageAlt', e.target.value)}
                  placeholder="Texte ALT de l'image"
                  className="mt-3 w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28]"
                />
              )}
            </div>

            {/* SEO */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h2 className="font-semibold text-gray-900">SEO</h2>

              <Field label="Meta Title" hint="(max 70 chars)">
                <input
                  type="text"
                  value={form.metaTitle}
                  onChange={(e) => set('metaTitle', e.target.value)}
                  maxLength={70}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28]"
                />
                <div className={`text-xs text-right mt-1 ${form.metaTitle.length > 60 ? 'text-orange-500' : 'text-gray-400'}`}>
                  {form.metaTitle.length}/70
                </div>
              </Field>

              <Field label="Meta Description" hint="(max 160 chars)">
                <textarea
                  value={form.metaDescription}
                  onChange={(e) => set('metaDescription', e.target.value)}
                  maxLength={160}
                  rows={3}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28] resize-none"
                />
                <div className={`text-xs text-right mt-1 ${form.metaDescription.length > 140 ? 'text-orange-500' : 'text-gray-400'}`}>
                  {form.metaDescription.length}/160
                </div>
              </Field>

              {/* Keywords */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                  <Tag size={14} /> Mots-clés
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {form.keywords.map((kw) => (
                    <span key={kw} className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                      {kw}
                      <button onClick={() => removeKeyword(kw)} className="cursor-pointer"><X size={10} /></button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={addKeyword}
                  placeholder="Tapez un mot-clé + Entrée"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28]"
                />
              </div>
            </div>

            {/* Catégorie */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h2 className="font-semibold text-gray-900">Classification</h2>

              <Field label="Catégorie" required>
                <select
                  value={form.category}
                  onChange={(e) => set('category', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28] cursor-pointer"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </Field>

              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                  <MapPin size={14} /> Villes ciblées
                </label>
                <div className="flex flex-wrap gap-2">
                  {CITY_OPTIONS.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => toggleCity(city)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        form.cityTags.includes(city)
                          ? 'bg-[#4F7A28] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Statut</h2>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => set('published', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${form.published ? 'bg-[#4F7A28]' : 'bg-gray-200'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform absolute top-0.5 ${form.published ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
                  </div>
                </div>
                <span className="text-sm text-gray-700">{form.published ? 'Publié' : 'Brouillon'}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
