import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function About({ loadingBar }) {

  useEffect(() => {
    if (loadingBar?.current) {
      loadingBar.current.staticStart();
      setTimeout(() => {
        loadingBar.current.complete();
      }, 500);
    }
  }, [loadingBar]);

  return (
    <>
      <Helmet>
        <title>About Us | Swift News</title>
        <meta name="description" content="Learn more about Swift News — a clean, fast, and modern news platform powered by React and GNews API." />
        <meta name="keywords" content="about Swift News, news app, React news website, modern news reader, gnews api" />
        <meta property="og:title" content="About Swift News" />
        <meta property="og:description" content="Discover what powers Swift News and our mission to deliver fast, clean, and clutter-free news." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-800 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-blue-600 dark:text-blue-400">Swift News</span> 🗞️
        </h1>

        <p className="text-lg mb-4 leading-relaxed">
          <strong>Swift News</strong> is a simple and easy-to-use news feed reader, fast, clean, and clutter-free.
          Whether you're interested in business, politics, technology, entertainment, sports, science, travel, or global updates,
          we bring all of it together into one seamless experience.
        </p>

        <p className="text-md mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          This website is built with modern technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>,
          and the <strong>GNews API</strong> to ensure fast performance and reliability.
          Features like infinite scroll, dynamic filtering, and a responsive design provide a smooth experience across devices.
        </p>

        <p className="text-md mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          Our mission is simple: <em>make news simple, fast, and accessible</em>. We prioritise content quality
          and user experience by avoiding intrusive ads or distractions.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
          Your feedback is always welcome!
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Swift News. All rights reserved.
        </p>
      </div>
    </>
  );
}
