import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import { Product } from '../types';
import { RootState } from '../store/store';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addItem({ 
      id: product.id,
      name: product.name,
      originalPrice: product.price,
      discount: 0,
      quantity: 1 
    }));
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2">
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`p-2 rounded-full ${
                isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-800'
              } hover:bg-opacity-90 transition-colors`}
            >
              <Heart className="h-5 w-5" fill={isInWishlist ? 'currentColor' : 'none'} />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text mb-1">{product.name}</h3>
        <p className="text-accent font-bold">${product.price}</p>
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mt-2">
            {product.colors.map((color) => (
              <div
                key={color.name}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard; 