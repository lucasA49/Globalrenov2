import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthAdminContext';
import AdminLayout from '../components/AdminLayout';
import { FileText, Eye, Edit2, PlusCircle, Clock } from 'lucide-react';

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          <Icon size={22} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { authAxios } = useAuth();
  const [data, setData] = useState({ articles: [], stats: { total: 0, published: 0, drafts: 0 } });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authAxios.get('/admin/articles')
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
            <p className="text-gray-500 text-sm mt-1">Gérez le contenu de votre blog</p>
          </div>
          <Link
            to="/admin/articles/new"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#4F7A28] text-white rounded-lg text-sm font-medium hover:bg-[#3d6020] transition-colors cursor-pointer"
          >
            <PlusCircle size={18} />
            Nouvel article
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Total articles" value={loading ? '—' : data.stats.total} icon={FileText} color="bg-[#4F7A28]" />
          <StatCard label="Publiés" value={loading ? '—' : data.stats.published} icon={Eye} color="bg-blue-500" />
          <StatCard label="Brouillons" value={loading ? '—' : data.stats.drafts} icon={Clock} color="bg-orange-400" />
        </div>

        {/* Recent articles */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Derniers articles</h2>
            <Link to="/admin/articles" className="text-sm text-[#4F7A28] hover:underline cursor-pointer">
              Voir tout
            </Link>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-400">Chargement...</div>
          ) : data.articles.length === 0 ? (
            <div className="p-12 text-center">
              <FileText size={40} className="text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500">Aucun article. Créez votre premier article !</p>
              <Link to="/admin/articles/new" className="mt-4 inline-block text-[#4F7A28] text-sm font-medium hover:underline cursor-pointer">
                Créer un article →
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {data.articles.slice(0, 8).map((article) => (
                <div key={article._id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                      article.published ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {article.published ? 'Publié' : 'Brouillon'}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{article.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{article.category} · {new Date(article.createdAt).toLocaleDateString('fr-FR')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    {article.published && (
                      <a
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                        title="Voir l'article"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                    <Link
                      to={`/admin/articles/edit/${article._id}`}
                      className="p-2 text-gray-400 hover:text-[#4F7A28] cursor-pointer"
                      title="Modifier"
                    >
                      <Edit2 size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
