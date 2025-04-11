import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Dumbbells Set",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=800",
    description: "Professional-grade rubber-coated dumbbells set (5-50 lbs)"
  },
  {
    id: 2,
    name: "Adjustable Bench",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1620188467120-5bd46d7278b1?auto=format&fit=crop&q=80&w=800",
    description: "Multi-position adjustable workout bench"
  },
  {
    id: 3,
    name: "Resistance Bands Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800",
    description: "Complete set of resistance bands (5-40 lbs)"
  },
  {
    id: 4,
    name: "Olympic Barbell",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    description: "20kg Olympic barbell with knurled grip"
  }
];

const Products = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;