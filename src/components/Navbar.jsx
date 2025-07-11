import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isMobileCountryOpen, setIsMobileCountryOpen] = useState(false);

  const [searchParams] = useSearchParams();

  const currentCountry = searchParams.get('country') || 'in';
  const currentCategory = searchParams.get('category') || 'general';

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm fixed w-full top-0 left-0 z-20">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-lg mr-1">Swift</span>
          <span className="text-gray-800 dark:text-white">News</span>
        </Link>

        <button
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex space-x-4 items-center relative">
          <Link to="/" className="text-gray-700 dark:text-white hover:text-blue-600">Home</Link>

          <div className="relative">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsCountryOpen(false);
              }}
              className="text-gray-700 dark:text-white hover:text-blue-600 focus:outline-none"
            >
              Category<span className="ml-1 text-xs">▼</span>
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 mt-2 flex flex-col bg-white dark:bg-gray-800 shadow rounded w-44 z-30">
                {['general', 'business', 'technology', 'health', 'entertainment', 'science', 'sports'].map((cat) => (
                  <Link 
                    key={cat}
                    to={`/news?category=${cat}&country=${currentCountry}`} 
                    onClick={() => setIsCategoryOpen(false)} 
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 capitalize"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setIsCountryOpen(!isCountryOpen);
                setIsCategoryOpen(false);
              }}
              className="text-gray-700 dark:text-white hover:text-blue-600 focus:outline-none"
            >
              Country<span className="ml-1 text-xs">▼</span>
            </button>
            {isCountryOpen && (
              <div className="absolute left-0 mt-2 flex flex-col bg-white dark:bg-gray-800 shadow rounded w-44 z-30">
                {['in', 'us', 'uk', 'ca', 'au'].map((ct) => (
                  <Link 
                    key={ct}
                    to={`/news?country=${ct}&category=${currentCategory}`} 
                    onClick={() => setIsCountryOpen(false)} 
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 uppercase"
                  >
                    {ct.toUpperCase() === 'IN' ? 'India' : ct.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 dark:text-white hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-gray-700 dark:text-white hover:text-blue-600">Contact Us</Link>

          <DarkModeToggle />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 shadow">
          <Link to="/" className="block py-1 text-gray-700 dark:text-white hover:text-blue-600">Home</Link>

          <div className="py-2">
            <button
              onClick={() => {
                setIsMobileCategoryOpen(!isMobileCategoryOpen);
                setIsMobileCountryOpen(false);
              }}
              className="w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-600"
            >
              Category<span className="ml-1 text-xs">▼</span>
            </button>
            {isMobileCategoryOpen && (
              <div className="ml-4 mt-1">
                {['general', 'business', 'technology', 'health', 'entertainment', 'science', 'sports'].map((cat) => (
                  <Link 
                    key={cat}
                    to={`/news?category=${cat}&country=${currentCountry}`} 
                    onClick={() => setIsMobileCategoryOpen(false)} 
                    className="block py-1 text-sm hover:text-blue-600 capitalize"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="py-2">
            <button
              onClick={() => {
                setIsMobileCountryOpen(!isMobileCountryOpen);
                setIsMobileCategoryOpen(false);
              }}
              className="w-full text-left text-gray-700 dark:text-white font-medium hover:text-blue-600"
            >
              Country<span className="ml-1 text-xs">▼</span>
            </button>
            {isMobileCountryOpen && (
              <div className="ml-4 mt-1">
                {['in', 'us', 'uk', 'ca', 'au'].map((ct) => (
                  <Link 
                    key={ct}
                    to={`/news?country=${ct}&category=${currentCategory}`} 
                    onClick={() => setIsMobileCountryOpen(false)} 
                    className="block py-1 text-sm hover:text-blue-600 uppercase"
                  >
                    {ct.toUpperCase() === 'IN' ? 'India' : ct.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="block py-2 text-gray-700 dark:text-white hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-gray-700 dark:text-white hover:text-blue-600">Contact Us</Link>
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
}