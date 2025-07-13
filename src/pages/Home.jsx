import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

export default function Home({ loadingBar }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (loadingBar?.current) loadingBar.current.staticStart();

        const API_KEY = process.env.REACT_APP_NEWS_API;
        const res = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=6&apikey=${API_KEY}`);
        setArticles(res.data.articles);
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        if (loadingBar?.current) loadingBar.current.complete();
      }
    };

    fetchNews();
  }, [loadingBar]);

  return (
    <div className="max-w-7xl mx-auto px-4 dark:bg-gray-900 dark:text-white">
      {/* Hero */}
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-600">Swift News</span> 🗞️
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Stay informed with the latest headlines from around the world.
        </p>
      </section>

      {/* News Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10">
        {articles.map((article, idx) => (
          <NewsCard
            key={idx}
            title={article.title}
            description={article.description}
            image={article.image}
            url={article.url}
          />
        ))}
      </section>
    </div>
  );
}
