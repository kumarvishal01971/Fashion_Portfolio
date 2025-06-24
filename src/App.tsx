import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Collections from './components/Collections';
import Contact from './components/Contact';
import PreviousCollections from './components/PreviousCollections'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Collections />
              <Contact />
            </>
          } />
          <Route path="/previous-collections" element={<PreviousCollections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
