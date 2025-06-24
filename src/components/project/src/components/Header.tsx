import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gold rounded-lg group-hover:bg-opacity-80 transition-all duration-200">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-playfair font-bold transition-colors duration-200 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}>
                Elena Vasquez
              </h1>
              <p className={`text-sm font-inter transition-colors duration-200 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Fashion Designer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-inter font-medium transition-colors duration-200 hover:text-gold ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`font-inter font-medium transition-colors duration-200 hover:text-gold ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-inter font-medium transition-colors duration-200 hover:text-gold ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-inter font-medium transition-colors duration-200 hover:text-gold ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gold text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-dark' : 'text-white'
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
                className="block w-full text-left font-inter font-medium text-dark hover:text-gold transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left font-inter font-medium text-dark hover:text-gold transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-inter font-medium text-dark hover:text-gold transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-inter font-medium text-dark hover:text-gold transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-200 w-full"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;