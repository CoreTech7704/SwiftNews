import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Swift News</title>
        <meta
          name="description"
          content="Oops! The page you are looking for does not exist. Visit Swift News to get the latest news updates."
        />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="404 - Page Not Found | Swift News" />
        <meta property="og:description" content="The page you're looking for might have been removed or is temporarily unavailable." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/404" />
        <meta property="og:image" content="/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
          The page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
