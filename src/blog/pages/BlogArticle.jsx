import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { api } from '../../lib/api';
import Header from '../../Composant/Header';
import Footer from '../../Composant/Footer';
import RelatedArticles from '../components/RelatedArticles';
import { Calendar, Tag, MapPin, ChevronRight, Phone } from 'lucide-react';

const CATEGORY_LABELS = {
  toiture: 'Toiture', facade: 'Façade', isolation: 'Isolation',
  renovation: 'Rénovation', entretien: 'Entretien', conseils: 'Conseils',
};

const SITE_URL = 'https://globalreno-renovation.fr';

export default function BlogArticle() {
  const { slug } = useParams();
  const [data, setData] = useState({ article: null, related: [] });
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    api.get(`/articles/${slug}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err.response?.status === 404) setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#4F7A28] border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  if (notFound || !data.article) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article introuvable</h1>
          <p className="text-gray-500 mb-8">Cet article n'existe pas ou a été supprimé.</p>
          <Link to="/blog" className="px-6 py-3 bg-[#4F7A28] text-white rounded-xl font-medium hover:bg-[#3d6020] cursor-pointer">
            Retour au blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const { article, related } = data;
  const canonicalUrl = `${SITE_URL}/blog/${article.slug}`;
  const ogImage = article.image || `${SITE_URL}/globalreno.png`;

  return (
    <>
      <Helmet>
        <title>{article.metaTitle || `${article.title} | Global Réno`}</title>
        <meta name="description" content={article.metaDescription || article.excerpt} />
        {article.keywords?.length > 0 && (
          <meta name="keywords" content={article.keywords.join(', ')} />
        )}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={article.metaTitle || article.title} />
        <meta property="og:description" content={article.metaDescription || article.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Global Réno" />
        <meta property="article:published_time" content={article.createdAt} />
        <meta property="article:modified_time" content={article.updatedAt} />
        {article.category && <meta property="article:section" content={CATEGORY_LABELS[article.category]} />}

        {/* Schema.org Article */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt || article.metaDescription,
          image: ogImage,
          datePublished: article.createdAt,
          dateModified: article.updatedAt,
          author: { '@type': 'Organization', name: 'Global Réno' },
          publisher: {
            '@type': 'Organization',
            name: 'Global Réno',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/globalreno.png` },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        })}</script>
      </Helmet>

      <Header />

      <main className="bg-gray-50 min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#4F7A28] cursor-pointer">Accueil</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-[#4F7A28] cursor-pointer">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium truncate max-w-xs">{article.title}</span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Category + date */}
          <div className="flex items-center gap-4 mb-6">
            <Link
              to={`/blog?category=${article.category}`}
              className="px-3 py-1 bg-[#4F7A28]/10 text-[#4F7A28] rounded-full text-sm font-semibold capitalize hover:bg-[#4F7A28]/20 cursor-pointer"
            >
              {CATEGORY_LABELS[article.category] || article.category}
            </Link>
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <Calendar size={14} />
              {new Date(article.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          {/* Title H1 */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl text-gray-500 leading-relaxed mb-8 pb-8 border-b border-gray-100">
              {article.excerpt}
            </p>
          )}

          {/* Featured image */}
          {article.image && (
            <div className="mb-10 rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#4F7A28] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-600 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* City tags */}
          {article.cityTags?.length > 0 && (
            <div className="mt-10 p-5 bg-[#4F7A28]/5 rounded-xl border border-[#4F7A28]/10">
              <p className="flex items-center gap-2 text-[#4F7A28] font-semibold mb-2">
                <MapPin size={16} />
                Zone d'intervention
              </p>
              <p className="text-gray-600 text-sm">
                Global Réno intervient à {article.cityTags.join(', ')} et dans tout le Maine-et-Loire.
              </p>
            </div>
          )}

          {/* Keywords */}
          {article.keywords?.length > 0 && (
            <div className="flex items-center gap-2 mt-8 flex-wrap">
              <Tag size={14} className="text-gray-400" />
              {article.keywords.map((kw) => (
                <span key={kw} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {kw}
                </span>
              ))}
            </div>
          )}

          {/* CTA Devis */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#4F7A28] to-[#3d6020] rounded-2xl text-white text-center">
            <h2 className="text-xl font-bold mb-2">Besoin d'un devis gratuit ?</h2>
            <p className="text-white/80 mb-5 text-sm">
              Toiture, façade, isolation — nous intervenons à Cholet et dans tout le Maine-et-Loire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-[#4F7A28] font-bold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white rounded-xl hover:border-white transition-colors cursor-pointer"
              >
                <Phone size={16} />
                Nous appeler
              </a>
            </div>
          </div>

          {/* Related articles */}
          <RelatedArticles articles={related} />
        </article>
      </main>

      <Footer />
    </>
  );
}
