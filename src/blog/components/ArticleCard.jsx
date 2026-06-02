import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

const CATEGORY_LABELS = {
  toiture: 'Toiture', facade: 'Façade', isolation: 'Isolation',
  renovation: 'Rénovation', entretien: 'Entretien', conseils: 'Conseils',
};

const CATEGORY_COLORS = {
  toiture: 'bg-blue-100 text-blue-700',
  facade: 'bg-purple-100 text-purple-700',
  isolation: 'bg-orange-100 text-orange-700',
  renovation: 'bg-green-100 text-green-700',
  entretien: 'bg-yellow-100 text-yellow-700',
  conseils: 'bg-pink-100 text-pink-700',
};

export default function ArticleCard({ article }) {
  const API_URL = import.meta.env.VITE_API_URL?.replace('/api', '') ?? '';

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden flex-shrink-0">
        {article.image ? (
          <img
            src={article.image.startsWith('http') ? article.image : `${API_URL}${article.image}`}
            alt={article.imageAlt || article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#4F7A28]/20 to-[#4F7A28]/10 flex items-center justify-center">
            <span className="text-[#4F7A28]/40 text-4xl font-bold">{article.title[0]}</span>
          </div>
        )}
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-600'}`}>
          {CATEGORY_LABELS[article.category] || article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h2 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-[#4F7A28] transition-colors line-clamp-2">
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
        )}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar size={13} />
            {new Date(article.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="text-sm font-semibold text-[#4F7A28] group-hover:gap-2 transition-all">
            Lire →
          </span>
        </div>
      </div>
    </Link>
  );
}
