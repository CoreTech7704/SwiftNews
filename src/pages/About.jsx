import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About <span className="text-blue-600">Swift News</span> 🗞️</h1>
      
      <p className="text-lg mb-4 leading-relaxed">
        <strong>Swift News</strong> is a simple and easy to use news feed reader. fast, clean, and without clutter. Whether you’re looking for news on business, politics, technology, entertainment, sports, science, travel, or world news, we are the media that effectively combines all this – and more – in your newsfeed.
      </p>

      <p className="text-md mb-4 leading-relaxed text-gray-700">
        This website is made using the best pieces of technology out there: <strong>React</strong>, <strong>Tailwind CSS</strong>, and the <strong>GNews API</strong> to have a fast and reliable usage. Infinite scroll, dynamic filtering by category, and a responsive UI make for a pleasant reading experience on any device.
      </p>

      <p className="text-md mb-4 leading-relaxed text-gray-700">
        Our mission is simple: <em>make news simple, fast, and accessible</em>. We avoid overwhelming users with ads or distractions and focus on delivering quality content from trusted sources.
      </p>

      <p className="text-sm text-gray-600 italic mb-4">
        Your feedback is always welcome!
      </p>

      <p className="text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Swift News. All rights reserved.
      </p>
    </div>
  );
}
