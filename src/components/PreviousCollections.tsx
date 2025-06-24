import React from 'react';

const PreviousCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Vintage Charm",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      year: "2021",
    },
    {
      id: 2,
      title: "Monsoon Muse",
      image: "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      year: "2020",
    },
    // add more
  ];

  return (
    <section className="py-20 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            Previous Collections
          </h2>
          <p className="text-xl font-inter text-secondary max-w-2xl mx-auto">
            A journey into timeless design and creativity over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                  {collection.title}
                </h3>
                <p className="text-secondary font-inter text-sm">
                  {collection.year} Collection
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousCollections;
