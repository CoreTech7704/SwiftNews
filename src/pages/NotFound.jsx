import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
