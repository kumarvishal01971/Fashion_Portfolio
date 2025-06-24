import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-gold fill-current" />
              ))}
            </div>
            <span className="ml-3 text-sm font-inter font-medium text-white/80">
              Award-Winning Designer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            Crafting
            <span className="block text-gold">Elegance</span>
            Through Design
          </h1>

          <p className="text-xl md:text-2xl font-inter font-light mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Creating timeless fashion pieces that blend contemporary sophistication 
            with classic elegance for the modern woman.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToPortfolio}
              className="bg-gold text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-white hover:text-dark transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToPortfolio}
            className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            <ArrowDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-gold rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-white rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-gold/50 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;