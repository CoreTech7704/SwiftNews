import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const countryMap = {
  in: 'India',
  us: 'United States',
  uk: 'United Kingdom',
  au: 'Australia',
  ca: 'Canada',
};

export default function News() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'general';
  const country = searchParams.get('country') || 'in';

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observer = useRef();

  const API_KEY = process.env.REACT_APP_NEWS_API;

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&lang=en&max=12&page=${page}&apikey=${API_KEY}`
      );
      if (res.data && res.data.articles) {
        setArticles(prev => [...prev, ...res.data.articles]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }, [category, country, page, API_KEY]);

  useEffect(() => {
    // Reset when country/category changes
    setArticles([]);
    setPage(1);
  }, [category, country]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const lastArticleElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {category.charAt(0).toUpperCase() + category.slice(1)} News from{' '}
          <span className="text-blue-600 font-semibold">
            {countryMap[country] || 'Unknown'}
          </span>
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Stay updated with the latest {category} news.
        </p>
      </div>

      {/* News Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => {
          if (idx === articles.length - 1) {
            return (
              <div ref={lastArticleElementRef} key={idx}>
                <NewsCard
                  title={article.title}
                  description={article.description}
                  image={article.image || '/placeholder.jpg'}
                  url={article.url}
                />
              </div>
            );
          } else {
            return (
              <NewsCard
                key={idx}
                title={article.title}
                description={article.description}
                image={article.image || '/placeholder.jpg'}
                url={article.url}
              />
            );
          }
        })}
      </div>

      {/* No articles message */}
      {!loading && articles.length === 0 && (
        <p className="text-center text-red-500 mt-6">No articles found. Please try another category or country.</p>
      )}

      {/* Loader */}
      {loading && (
        <p className="text-center text-gray-500 mt-4">Loading more news...</p>
      )}

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all"
          title="Go to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
