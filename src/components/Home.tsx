import React from 'react';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  const scrollToCollections = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/5932168.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            Sunil
            <span className="block text-accent">Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-inter font-light mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Fashion Designer & Creative Director
          </p>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-playfair font-semibold mb-4">About Me</h2>
              <p className="text-lg font-inter leading-relaxed text-white/90">
                I'm a passionate fashion designer with over 8 years of experience creating 
                contemporary and sustainable fashion. My work focuses on blending traditional 
                craftsmanship with modern aesthetics, creating pieces that tell stories and 
                celebrate individuality. Each collection represents a journey of exploration 
                in fabric, form, and function.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToCollections}
            className="p-3 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-accent transition-all duration-200"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;