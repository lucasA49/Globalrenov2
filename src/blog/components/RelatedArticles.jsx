import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function RelatedArticles({ articles }) {
  if (!articles?.length) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles liés</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article._id}
            to={`/blog/${article.slug}`}
            className="group p-5 bg-white rounded-xl border border-gray-100 hover:border-[#4F7A28]/30 hover:shadow-md transition-all cursor-pointer"
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                loading="lazy"
                className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform"
              />
            )}
            <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#4F7A28] transition-colors line-clamp-2 mb-2">
              {article.title}
            </h3>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar size={12} />
              {new Date(article.createdAt).toLocaleDateString('fr-FR')}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
