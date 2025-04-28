import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { Star } from 'lucide-react';

interface SuggestedProductsProps {
  products: Product[];
}

const SuggestedProducts: React.FC<SuggestedProductsProps> = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(`/mens/${product.id}`)}
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-contain"
              />
              <div className="absolute top-4 right-3 bg-[#ff3f6c] text-white px-3 py-1 rounded-full flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current" />
                <span>{product.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-2xl font-bold">
                        ₹{(product.originalPrice - (product.originalPrice * product.discount / 100)).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">₹{product.originalPrice}</span>
                  )}
                </div>
                {product.discount > 0 && (
                  <span className="text-sm bg-[#ff3f6c] text-white px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;