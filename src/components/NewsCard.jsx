export default function NewsCard({ title, description, image, url }) {
  return (
    <div className="flex flex-col h-full bg-white rounded shadow overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/fallback.jpg";
        }}
      />

      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description.slice(0,150)}...</p>

        {/* Stick button at bottom */}
        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
