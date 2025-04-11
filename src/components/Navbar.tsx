import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">PEAK GYM</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-gray-300 px-3 py-2">Home</Link>
              <Link to="/products" className="hover:text-gray-300 px-3 py-2">Products</Link>
              <Link to="/mens" className="hover:text-gray-300 px-3 py-2">Men</Link>
              <Link to="/classes" className="hover:text-gray-300 px-3 py-2">Classes</Link>
              <Link to="/about" className="hover:text-gray-300 px-3 py-2">About</Link>
              <Link to="/contact" className="hover:text-gray-300 px-3 py-2">Contact</Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <div className="md:hidden ml-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:text-gray-300 px-3 py-2">Home</Link>
              <Link to="/products" className="block hover:text-gray-300 px-3 py-2">Products</Link>
              <Link to="/mens" className="block hover:text-gray-300 px-3 py-2">Men</Link>
              <Link to="/classes" className="block hover:text-gray-300 px-3 py-2">Classes</Link>
              <Link to="/about" className="block hover:text-gray-300 px-3 py-2">About</Link>
              <Link to="/contact" className="block hover:text-gray-300 px-3 py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;