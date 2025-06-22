import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Biography from './pages/Biography';
import Contact from './pages/Contact';

function App() {
  const { t } = useTranslation();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <MusicPlayer />
        {/* Main content with top padding to account for fixed navigation */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 