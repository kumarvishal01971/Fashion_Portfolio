import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Collections from './components/Collections';
import Contact from './components/Contact';
import PreviousCollections from './components/PreviousCollections';

// Handles scrolling to sections via hash (e.g., /#contact)
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0); // delay ensures DOM is fully ready
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><Home /></section>
                <section id="collections"><Collections /></section>
                <section id="contact"><Contact /></section>
              </>
            }
          />
          <Route path="/previous-collections" element={<PreviousCollections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
