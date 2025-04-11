
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart, Star } from 'lucide-react';

const mensProducts = [
  {
    id: 5,
    name: "Heavy Duty Power Rack",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1586205208101-79a9be82b529?auto=format&fit=crop&q=80&w=800",
    description: "Professional power rack with pull-up bar and safety spotters",
    rating: 4.9
  },
  {
    id: 6,
    name: "Olympic Weight Set",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=800",
    description: "Complete set of Olympic weights (2.5-45 lbs)",
    rating: 4.8
  },
  {
    id: 7,
    name: "Premium Boxing Set",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1509255929945-586a420363cf?auto=format&fit=crop&q=80&w=800",
    description: "Heavy-duty punching bag with gloves and wraps",
    rating: 4.7
  },
  {
    id: 8,
    name: "Advanced Push-up Bars",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80&w=800",
    description: "Ergonomic steel push-up handles for deep chest workouts",
    rating: 4.6
  },
  {
    id: 9,
    name: "Adjustable Kettlebell",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&q=80&w=800",
    description: "5-40 lbs adjustable kettlebell for versatile training",
    rating: 4.8
  },
  {
    id: 10,
    name: "Premium Lifting Belt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&q=80&w=800",
    description: "Genuine leather weightlifting belt for maximum support",
    rating: 4.9
  }
];

const MensProducts = () => {
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Best For Men</h1>
        <p className="text-xl text-gray-600">Premium equipment designed for maximum performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mensProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current" />
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
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

export default MensProducts;