import React from 'react';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const PortfolioGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Botanical Dreams",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop",
      category: "Illustration"
    },
    {
      id: 2,
      title: "Urban Sketches",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
      category: "Digital Art"
    },
    {
      id: 3,
      title: "Character Design",
      image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=600&h=600&fit=crop",
      category: "Character"
    },
    {
      id: 4,
      title: "Nature Collection",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=600&fit=crop",
      category: "Illustration"
    },
    {
      id: 5,
      title: "Abstract Forms",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
      category: "Abstract"
    },
    {
      id: 6,
      title: "Editorial Work",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
      category: "Editorial"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-light mb-1">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;