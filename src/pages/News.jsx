import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const countryMap = {
  in: 'India',
  us: 'United States',
  gb: 'United Kingdom',
  au: 'Australia',
  cn: 'Canada',
};

export default function News() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'general';
  const country = searchParams.get('country') || 'in';

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_GNEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&lang=en&max=12&apikey=${API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
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
      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <NewsCard
              key={idx}
              title={article.title}
              description={article.description}
              image={article.image}
              url={article.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
