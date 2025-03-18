import React from 'react';

export default function Accessories() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] mb-12">
        <img
          src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=2000"
          alt="Accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Accessories</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="text-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Popular Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quick Add
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    name: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800",
  },
  {
    name: "Equipment",
    image: "https://images.unsplash.com/photo-1517344368193-41552b6ad3f5?auto=format&fit=crop&w=800",
  },
  {
    name: "Bottles",
    image: "https://images.unsplash.com/photo-1550505095-81378a674395?auto=format&fit=crop&w=800",
  },
];

const products = [
  {
    name: "Training Bag",
    price: 45,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800",
  },
  {
    name: "Resistance Bands",
    price: 25,
    image: "https://images.unsplash.com/photo-1517344368193-41552b6ad3f5?auto=format&fit=crop&w=800",
  },
  {
    name: "Water Bottle",
    price: 20,
    image: "https://images.unsplash.com/photo-1550505095-81378a674395?auto=format&fit=crop&w=800",
  },
  {
    name: "Gym Towel",
    price: 15,
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=800",
  },
];