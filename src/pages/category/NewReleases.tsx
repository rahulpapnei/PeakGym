import React from 'react';

export default function NewReleases() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">New Releases</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newReleases.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const newReleases = [
  {
    name: "Men's Vital Seamless 2.0",
    price: 54,
    image: "https://images.unsplash.com/photo-1616593871468-2a9452218369?auto=format&fit=crop&w=800",
  },
  {
    name: "Women's Adapt Marl",
    price: 60,
    image: "https://images.unsplash.com/photo-1618355776464-8666794d2520?auto=format&fit=crop&w=800",
  },
  {
    name: "Training Essentials",
    price: 45,
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=800",
  },
];