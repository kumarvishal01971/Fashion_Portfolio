import React, { useState } from 'react';
import { X, Palette, Scissors, ToyBrick as Fabric } from 'lucide-react';

interface Collection {
  id: number;
  title: string;
  image: string;
  sketch?: string;
  moodboard: string;
  colorScheme: string[];
  materials: string[];
  process: string;
  story: string;
  year: string;
}

const PreviousCollections = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  const collections: Collection[] = [
    // You can copy the old collections here or reuse the array from Collections if you want
    {
      id: 1,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      sketch: "https://www.pexels.com/photo/fresh-herbs-and-vegetables-at-local-market-32589762/",
      moodboard: "A recollection of wintery styles...",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Knitting techniques mimic ice crystals...",
      story: "The elegance of winter...",
      year: "2023"
    },
    {
      id: 2,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      sketch: "https://www.pexels.com/photo/fresh-herbs-and-vegetables-at-local-market-32589762/",
      moodboard: "A recollection of wintery styles...",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Knitting techniques mimic ice crystals...",
      story: "The elegance of winter...",
      year: "2023"
    },

    {
      id: 3,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      sketch: "https://www.pexels.com/photo/fresh-herbs-and-vegetables-at-local-market-32589762/",
      moodboard: "A recollection of wintery styles...",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Knitting techniques mimic ice crystals...",
      story: "The elegance of winter...",
      year: "2023"
    }

    // Add more old collections here
  ];

  return (
    <section className="py-20 bg-light">
       {/* Background */}
       <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/5932168.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 animate-slide-up text-white text-center">
            Previous <span className="text-accent">Collections</span>
          </h2>
          <p className="text-xl font-inter text-secondary max-w-2xl mx-auto animate-slide-up">
            Explore past collections and timeless inspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group cursor-pointer animate-zoom-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCollection(collection)}
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <span className="text-primary font-inter font-semibold">View Details</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-secondary font-inter text-sm">
                    {collection.year} Collection
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCollection && (
        <div className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto relative animate-zoom-in">
            <button
              onClick={() => setSelectedCollection(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <X className="h-5 w-5 text-primary" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div>
                <img
                  src={selectedCollection.image}
                  alt="Final Garment"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="overflow-y-auto max-h-[80vh]">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-1">
                  {selectedCollection.title}
                </h3>
                <p className="text-secondary font-inter mb-4">
                  {selectedCollection.year} Collection
                </p>

                <div className="mb-4">
                  <Palette className="h-5 w-5 text-accent inline-block mr-2" />
                  <strong className="text-primary">Inspiration:</strong>
                  <p className="text-secondary font-inter leading-relaxed mt-2">
                    {selectedCollection.moodboard}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-primary font-semibold font-playfair mb-2">Color Palette</h4>
                  <div className="flex space-x-2">
                    {selectedCollection.colorScheme.map((color, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <Fabric className="h-5 w-5 text-teal inline-block mr-2" />
                  <strong className="text-primary">Materials:</strong>
                  <p className="text-secondary font-inter mt-2">
                    {selectedCollection.materials.join(', ')}
                  </p>
                </div>

                <div className="mb-4">
                  <Scissors className="h-5 w-5 text-accent inline-block mr-2" />
                  <strong className="text-primary">Process:</strong>
                  <p className="text-secondary font-inter mt-2">
                    {selectedCollection.process}
                  </p>
                </div>

                <div>
                  <strong className="text-primary font-playfair">Design Story:</strong>
                  <p className="text-secondary font-inter mt-2">
                    {selectedCollection.story}
                  </p>
                </div>
              </div>

              <div>
                <img
                  src={selectedCollection.sketch || selectedCollection.image}
                  alt="Sketch"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PreviousCollections;
