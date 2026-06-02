import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { api } from '../../lib/api';
import ArticleCard from '../components/ArticleCard';
import Header from '../../Composant/Header';
import Footer from '../../Composant/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { value: '', label: 'Tous les articles' },
  { value: 'toiture', label: 'Toiture' },
  { value: 'facade', label: 'Façade' },
  { value: 'isolation', label: 'Isolation' },
  { value: 'renovation', label: 'Rénovation' },
  { value: 'entretien', label: 'Entretien' },
  { value: 'conseils', label: 'Conseils' },
];

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({ articles: [], total: 0, pages: 1, currentPage: 1 });
  const [loading, setLoading] = useState(true);

  const page = Number(searchParams.get('page') || 1);
  const category = searchParams.get('category') || '';

  useEffect(() => {
    setLoading(true);
    const params = { page, limit: 9 };
    if (category) params.category = category;

    api.get('/articles', { params })
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, category]);

  const setCategory = (cat) => {
    setSearchParams(cat ? { category: cat } : {});
  };

  const setPage = (p) => {
    const params = {};
    if (category) params.category = category;
    if (p > 1) params.page = p;
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Blog Rénovation Cholet — Conseils & Guides | Global Réno</title>
        <meta name="description" content="Découvrez nos conseils et guides pour rénover votre toiture, ravalement de façade, isolation thermique à Cholet et dans le Maine-et-Loire." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://globalreno-renovation.fr/blog" />
        <meta property="og:title" content="Blog Rénovation Cholet | Global Réno" />
        <meta property="og:description" content="Conseils rénovation, toiture, façade et isolation pour particuliers et professionnels à Cholet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalreno-renovation.fr/blog" />
        <meta property="og:image" content="https://globalreno-renovation.fr/globalreno.png" />
        <meta property="og:site_name" content="Global Réno" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-[#4F7A28] pt-32 pb-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Blog Rénovation
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Conseils d'experts, guides pratiques et actualités sur la rénovation, toiture, façade et isolation à Cholet et dans le Maine-et-Loire.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  category === cat.value
                    ? 'bg-[#4F7A28] text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#4F7A28] hover:text-[#4F7A28]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles count */}
          <p className="text-sm text-gray-500 mb-6">
            {loading ? 'Chargement...' : `${data.total} article${data.total !== 1 ? 's' : ''}`}
          </p>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl h-80 animate-pulse" />
              ))}
            </div>
          ) : data.articles.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 text-lg">Aucun article dans cette catégorie pour l'instant.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {data.pages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: data.pages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium cursor-pointer transition-all ${
                    p === page
                      ? 'bg-[#4F7A28] text-white'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === data.pages}
                className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* SEO Local CTA */}
        <div className="bg-[#4F7A28] mt-16 py-14 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-3">Intervention à Cholet et dans tout le Maine-et-Loire</h2>
            <p className="text-white/80 mb-6">
              Devis gratuit et sans engagement pour vos projets de rénovation — toiture, façade, isolation, peinture.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3.5 bg-white text-[#4F7A28] font-bold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
