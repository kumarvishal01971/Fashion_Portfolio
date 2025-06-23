import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <Scissors className="h-5 w-5 text-white" />
            </div>
            <span className={`text-xl font-playfair font-semibold transition-colors duration-200 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              Sunil <span className="text-accent">Kumar</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-inter font-medium transition-colors duration-200 hover:text-accent ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('collections')}
              className={`font-inter font-medium transition-colors duration-200 hover:text-accent ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-accent/90 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left font-inter font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('collections')}
                className="block w-full text-left font-inter font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                Collections
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-accent/90 transition-all duration-200 w-full"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;