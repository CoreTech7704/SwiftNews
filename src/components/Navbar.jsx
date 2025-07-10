import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isMobileCountryOpen, setIsMobileCountryOpen] = useState(false);


  return (
    <nav className="bg-white shadow fixed w-full top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-gray-800">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-lg mr-1">Swift</span>
          <span className="text-gray-800">News</span>
        </Link>

        {/* Hamburger Button (mobile) */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 items-center relative">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>

          {/* Category Dropdown - Click Toggle */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsCountryOpen(false); // close other
              }}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              Category<span className="ml-1 text-xs">▼</span>
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 mt-2 flex flex-col bg-white shadow rounded w-44 z-30">
                <Link to="/category/General" className="px-4 py-2 hover:bg-gray-100">General</Link>
                <Link to="/category/business" className="px-4 py-2 hover:bg-gray-100">Business</Link>
                <Link to="/category/technology" className="px-4 py-2 hover:bg-gray-100">Technology</Link>
                <Link to="/category/health" className="px-4 py-2 hover:bg-gray-100">Health</Link>
                <Link to="/category/entertainment" className="px-4 py-2 hover:bg-gray-100">Entertainment</Link>
                <Link to="/category/science" className="px-4 py-2 hover:bg-gray-100">Science</Link>
                <Link to="/category/sports" className="px-4 py-2 hover:bg-gray-100">Sports</Link>
              </div>
            )}
          </div>

          {/* Country Dropdown - Click Toggle */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCountryOpen(!isCountryOpen);
                setIsCategoryOpen(false); // close other
              }}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              Country<span className="ml-1 text-xs">▼</span>
            </button>
            {isCountryOpen && (
              <div className="absolute left-0 mt-2 flex flex-col bg-white shadow rounded w-44 z-30">
                <Link to="/country/in" className="px-4 py-2 hover:bg-gray-100">India</Link>
                <Link to="/country/us" className="px-4 py-2 hover:bg-gray-100">USA</Link>
                <Link to="/country/uk" className="px-4 py-2 hover:bg-gray-100">UK</Link>
                <Link to="/country/ca" className="px-4 py-2 hover:bg-gray-100">Canada</Link>
                <Link to="/country/au" className="px-4 py-2 hover:bg-gray-100">Australia</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4 bg-white shadow">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>

            {/* Mobile Category Toggle */}
            <div className="py-2">
            <button
                onClick={() => {
                setIsMobileCategoryOpen(!isMobileCategoryOpen);
                setIsMobileCountryOpen(false);
                }}
                className="w-full text-left text-gray-700 font-medium hover:text-blue-600"
            >
                Category<span className="ml-1 text-xs">▼</span>
            </button>
            {isMobileCategoryOpen && (
                <div className="ml-4 mt-1">
                <Link to="/category/General" className="block py-1 text-sm hover:text-blue-600">General</Link>
                <Link to="/category/business" className="block py-1 text-sm hover:text-blue-600">Business</Link>
                <Link to="/category/technology" className="block py-1 text-sm hover:text-blue-600">Technology</Link>
                <Link to="/category/health" className="block py-1 text-sm hover:text-blue-600">Health</Link>
                <Link to="/category/entertainment" className="block py-1 text-sm hover:text-blue-600">Entertainment</Link>
                <Link to="/category/science" className="block py-1 text-sm hover:text-blue-600">Science</Link>
                <Link to="/category/sports" className="block py-1 text-sm hover:text-blue-600">Sports</Link>
                </div>
            )}
            </div>

            {/* Mobile Country Toggle */}
            <div className="py-2">
            <button
                onClick={() => {
                setIsMobileCountryOpen(!isMobileCountryOpen);
                setIsMobileCategoryOpen(false);
                }}
                className="w-full text-left text-gray-700 font-medium hover:text-blue-600"
            >
                Country<span className="ml-1 text-xs">▼</span>
            </button>
            {isMobileCountryOpen && (
                <div className="ml-4 mt-1">
                <Link to="/country/in" className="block py-1 text-sm hover:text-blue-600">India</Link>
                <Link to="/country/us" className="block py-1 text-sm hover:text-blue-600">USA</Link>
                <Link to="/country/uk" className="block py-1 text-sm hover:text-blue-600">UK</Link>
                <Link to="/country/ca" className="block py-1 text-sm hover:text-blue-600">Canada</Link>
                <Link to="/country/au" className="block py-1 text-sm hover:text-blue-600">Australia</Link>
                </div>
            )}
            </div>

          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About Us</Link>
        </div>
      )}
    </nav>
  );
}
