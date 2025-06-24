import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Evening Elegance Collection',
      category: 'evening',
      image: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      description: 'Sophisticated evening wear featuring flowing silhouettes and luxurious fabrics.'
    },
    {
      id: 2,
      title: 'Modern Minimalist Series',
      category: 'casual',
      image: 'https://images.pexels.com/photos/1493655/pexels-photo-1493655.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      description: 'Clean lines and contemporary cuts for the modern professional woman.'
    },
    {
      id: 3,
      title: 'Bridal Dreams',
      category: 'bridal',
      image: 'https://images.pexels.com/photos/1030957/pexels-photo-1030957.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      description: 'Romantic and timeless bridal gowns crafted with exquisite attention to detail.'
    },
    {
      id: 4,
      title: 'Urban Chic',
      category: 'casual',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      description: 'Street-smart fashion that combines comfort with contemporary style.'
    },
    {
      id: 5,
      title: 'Red Carpet Ready',
      category: 'evening',
      image: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      description: 'Show-stopping gowns designed for life\'s most important moments.'
    },
    {
      id: 6,
      title: 'Business Luxe',
      category: 'professional',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      description: 'Professional attire that commands respect while maintaining feminine elegance.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'evening', label: 'Evening Wear' },
    { id: 'casual', label: 'Casual' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'professional', label: 'Professional' }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
            Portfolio
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            A curated selection of my finest work, showcasing the artistry 
            and craftsmanship that defines my design philosophy.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-gold text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-scale-in"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-dark/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gold transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;