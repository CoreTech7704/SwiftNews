import React from 'react';

export default function NewsCard({ title, description, image, url }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t"
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://media.gettyimages.com/id/1751434031/vector/breaking-news.jpg?s=612x612&w=gi&k=20&c=YNt6gK_JkuFe2_8dSeRT04vlfk-u71BAFSWVvyF0S4A=';
        }}
        />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-600">
          {description?.slice(0, 100)}...
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-blue-600 hover:underline text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
