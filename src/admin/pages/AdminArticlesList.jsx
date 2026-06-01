import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthAdminContext';
import AdminLayout from '../components/AdminLayout';
import { PlusCircle, Edit2, Trash2, Eye, Search } from 'lucide-react';

const CATEGORY_LABELS = {
  toiture: 'Toiture', facade: 'Façade', isolation: 'Isolation',
  renovation: 'Rénovation', entretien: 'Entretien', conseils: 'Conseils',
};

export default function AdminArticlesList() {
  const { authAxios } = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleting, setDeleting] = useState(null);

  const fetchArticles = () => {
    authAxios.get('/admin/articles')
      .then((res) => setArticles(res.data.articles))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchArticles(); }, []);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Supprimer "${title}" ? Cette action est irréversible.`)) return;
    setDeleting(id);
    try {
      await authAxios.delete(`/admin/articles/${id}`);
      setArticles((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Erreur lors de la suppression');
    } finally {
      setDeleting(null);
    }
  };

  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
            <p className="text-gray-500 text-sm mt-1">{articles.length} article{articles.length !== 1 ? 's' : ''} au total</p>
          </div>
          <Link
            to="/admin/articles/new"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#4F7A28] text-white rounded-lg text-sm font-medium hover:bg-[#3d6020] transition-colors cursor-pointer"
          >
            <PlusCircle size={18} />
            Nouvel article
          </Link>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un article..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4F7A28]"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-gray-400">Chargement...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              {search ? 'Aucun résultat pour cette recherche' : 'Aucun article pour l\'instant'}
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Article</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Catégorie</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((article) => (
                  <tr key={article._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900 text-sm line-clamp-1">{article.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 font-mono">/blog/{article.slug}</p>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-xs text-gray-600 capitalize">{CATEGORY_LABELS[article.category] || article.category}</span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-xs text-gray-500">{new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        article.published ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {article.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {article.published && (
                          <a
                            href={`/blog/${article.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
                            title="Voir l'article"
                          >
                            <Eye size={16} />
                          </a>
                        )}
                        <Link
                          to={`/admin/articles/edit/${article._id}`}
                          className="p-2 text-gray-400 hover:text-[#4F7A28] rounded-lg hover:bg-gray-100 cursor-pointer"
                          title="Modifier"
                        >
                          <Edit2 size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(article._id, article.title)}
                          disabled={deleting === article._id}
                          className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 cursor-pointer disabled:opacity-40"
                          title="Supprimer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
