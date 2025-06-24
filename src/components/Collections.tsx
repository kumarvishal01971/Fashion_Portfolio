import React, { useState } from 'react';
import { X, Palette, Scissors, ToyBrick as Fabric } from 'lucide-react';
import { Link } from 'react-router-dom';
import Img1 from './Images/Img1.jpg';
import Img_1 from './Images/Img_1.jpg';


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

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  const collections: Collection[] = [
    {
      id: 1,
      title: "Arctic Minimalism",
      image: Img1,
      sketch: Img_1, // Example sketch URL
      moodboard: "Inspired by the pristine beauty of arctic landscapes and the serene simplicity of ice formations. This collection captures the essence of minimalism while maintaining functionality for the modern professional.",
      colorScheme: ["#1e293b", "#f8fafc", "#64748b", "#94a3b8"],
      materials: ["Organic Cotton", "Merino Wool", "Recycled Polyester", "Bamboo Fiber"],
      process: "Each piece begins with zero-waste pattern making, utilizing every inch of fabric. The construction focuses on clean seams and precise tailoring. Hand-finished details include French seams and bias-bound edges for durability and aesthetics.",
      story: "Born from morning walks through frost-covered landscapes, this collection reflects the modern professional's need for versatile, comfortable clothing that transitions seamlessly from boardroom to coffee shop. Each piece tells the story of efficiency without sacrificing style.",
      year: "2024"
    },
    {
      id: 2,
      title: "Ocean Depths",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Drawing inspiration from the mysterious depths of the ocean, deep blue tones, and the flowing nature of underwater currents. This collection embodies fluidity, movement, and connection with marine life.",
      colorScheme: ["#0f172a", "#0ea5e9", "#0891b2", "#06b6d4"],
      materials: ["Silk Crepe", "Organic Linen", "Recycled Ocean Plastic", "Natural Indigo Dyes"],
      process: "Innovative dyeing techniques mimic the natural color gradients found in ocean waters. Each garment is individually treated with eco-friendly dyes, creating unique color variations. Hand-embroidered details using metallic threads add subtle luxury.",
      story: "Inspired by a transformative diving experience in the Maldives, this collection captures the ethereal beauty of underwater worlds and celebrates the importance of ocean conservation. The flowing silhouettes echo the endless movement of water.",
      year: "2023"
    },
    {
      id: 3,
      title: "Steel & Grace",
      image: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "A fusion of industrial architecture with feminine grace. This collection reimagines structured silhouettes through a modern lens, celebrating both strength and elegance.",
      colorScheme: ["#475569", "#64748b", "#94a3b8", "#cbd5e1"],
      materials: ["Technical Wool", "Structured Cotton", "Metal Hardware", "Recycled Steel Details"],
      process: "Architectural pattern construction using modern tailoring techniques. Each piece incorporates sustainable elements from recycled materials. Traditional hand-sewing methods are combined with precision machine work for optimal fit and finish.",
      story: "This collection emerged from hours spent observing urban architecture and the interplay between hard materials and soft light. It's a love letter to modern design, reimagined for today's conscious consumer who values both innovation and sustainability.",
      year: "2023"
    },
    {
      id: 4,
      title: "Misty Mornings",
      image: "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Inspired by early morning fog, soft clouds, and the delicate beauty of dawn breaking. This collection focuses on lightness, movement, and ethereal grace.",
      colorScheme: ["#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8"],
      materials: ["Silk Chiffon", "Organic Organza", "Sustainable Lace", "Pearl Details"],
      process: "Delicate hand-pleating techniques create texture and movement. Multiple layers are carefully constructed to maintain the ethereal quality while ensuring comfort. Hand-applied beadwork and embroidery add sparkle and dimension.",
      story: "Created for moments that feel like poetry - first meetings, garden parties, and celebrations of life's beautiful milestones. Each piece in this collection is designed to make the wearer feel like they're floating on morning mist.",
      year: "2024"
    },
    {
      id: 5,
      title: "Urban Teal",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "The juxtaposition of vibrant teal accents with urban neutrals. This collection explores the beauty found in city life and the energy of metropolitan spaces.",
      colorScheme: ["#14b8a6", "#0d9488", "#134e4a", "#2dd4bf"],
      materials: ["Sustainable Denim", "Eco Leather", "Recycled Hardware", "Organic Canvas"],
      process: "Raw edge finishes and exposed seams celebrate the construction process. Sustainable hardware is incorporated as both functional and decorative elements. Natural distressing techniques are applied by hand to create authentic wear patterns.",
      story: "Born from late-night walks through vibrant city districts, this collection finds energy in the unexpected - in neon reflections on wet pavement and the beautiful contrast of nature reclaiming urban spaces. It's for those who find inspiration in city life.",
      year: "2023"
    },
    {
      id: 6,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"
    },
    {
      id: 7,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"
    },
    {
      id: 8,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"
    },
    {
      id: 9,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"

    },
    {
      id: 10,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"
    },
    {
      id: 11,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"
    },
    {
      id: 12,
      title: "Frozen Elegance",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      sketch: "https://via.placeholder.com/400x600?text=Sketch", // Example sketch URL
      moodboard: "Capturing the essence of winter elegance - the crystalline beauty of ice, the texture of frost, and the ever-changing patterns of frozen water throughout the seasons.",
      colorScheme: ["#0f172a", "#1e293b", "#334155", "#64748b"],
      materials: ["Merino Wool", "Cashmere Blend", "Crystal Buttons", "Metallic Thread"],
      process: "Innovative knitting techniques mimic the natural patterns found in ice crystals. Metallic elements are integrated into the construction. Specialized finishing processes create the lustrous feel of garments touched by winter light.",
      story: "This collection carries the crisp air and pristine beauty of winter landscapes. Each piece is designed to evoke the elegance and tranquility of frozen mornings, perfect for those who find beauty in winter's embrace.",
      year: "2024"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 animate-slide-up">
            My Collections
          </h2>
          <p className="text-xl font-inter text-secondary max-w-2xl mx-auto animate-slide-up">
            Each collection tells a unique story, blending artistry with wearability.
            <b>Click on any piece</b> to explore the inspiration, process, and story behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* ⬇️ New Button Added */}
        <div className="mt-16 text-center">
          <Link
            to="/previous-collections"
            className="px-6 py-3 bg-accent text-white rounded-full font-inter font-semibold hover:bg-accent/90 transition-all duration-200 hover:scale-105"
          >
            View Previous Collections
          </Link>
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

export default Collections;