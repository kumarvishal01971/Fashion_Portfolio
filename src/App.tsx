import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Collections from './components/Collections';
import Contact from './components/Contact';
import PreviousCollections from './components/PreviousCollections';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else if (location.pathname === '/') {
      // Scroll to top if on homepage and no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

function MainPage() {
  return (
    <>
      <Home />
      <Collections />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/previous-collections" element={<PreviousCollections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
