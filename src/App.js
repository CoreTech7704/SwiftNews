import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import News from './pages/News';
import LoadingBar from 'react-top-loading-bar';
import { useRef } from 'react';

export default function App() {
  const loadingBarRef = useRef(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        {/* Top Loading Bar */}
        <LoadingBar color="#2563eb" height={3} ref={loadingBarRef} />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow mt-20 px-4">
          <Routes>
            <Route path="/" element={<Home loadingBar={loadingBarRef} />} />
            <Route path="/about" element={<About loadingBar={loadingBarRef} />} />
            <Route path="/news" element={<News loadingBar={loadingBarRef} />} />
            <Route path="/contact" element={<Contact loadingBar={loadingBarRef} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
