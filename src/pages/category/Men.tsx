import React from 'react';

const categories = [
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800",
  },
  {
    name: "Shorts",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800",
  },
  {
    name: "Hoodies",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=800",
  },
];

const products = [
  {
    name: "Training Shorts",
    price: 45,
    image: "https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&fit=crop&w=800",
  },
  {
    name: "Essential Tee",
    price: 35,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800",
  },
  {
    name: "Performance Tank",
    price: 30,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800",
  },
];

export default function Men() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-12 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000"
          alt="Men's Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Men's Collection</h1>
        </div>
      </div>

      {/* Category Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

        {/* Best Sellers Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
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