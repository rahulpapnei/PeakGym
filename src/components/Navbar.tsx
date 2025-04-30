import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ShoppingCart, Package, Search } from 'lucide-react';
import { CartItem } from '../store/cartSlice';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center">

            <span className="text-2xl font-bold text-black hover:text-gray-700">
              Aristo
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/mens" className="text-gray-700 hover:text-black font-bold">
              Men
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black font-bold">
              About us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black font-bold">
              Contact
            </Link>
          </div>

          {/* Right-side actions */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            {/* Order Tracking */}
            <Link to="/order-tracking" className="flex items-center text-gray-700 hover:text-black">
              <Package className="h-5 w-5 mr-1" />
              Track Order
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-black">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;