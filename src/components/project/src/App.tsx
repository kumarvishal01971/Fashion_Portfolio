import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Collections from './components/Collections';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Home />
        <Collections />
        <Contact />
      </main>
    </div>
  );
}

export default App;