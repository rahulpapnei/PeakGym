import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
            <span class="text-black">PEAK</span>
            <span class="text-blue-600">GYM</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/men-wear" className="hover:text-gray-300">
                Men
              </Link>
              <Link to="/women-wear" className="hover:text-gray-300">
                Women
              </Link>
              <Link to="/gym-accessories" className="hover:text-gray-300">
                Accessories
              </Link>
              <Link to="/new-releases" className="hover:text-gray-300">
                New Releases
              </Link>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Search className="w-5 h-5 cursor-pointer" />
              <Heart className="w-5 h-5 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/new-releases" className="hover:text-gray-300">
              New Releases
            </Link>
            <Link to="/men" className="hover:text-gray-300">
              Men
            </Link>
            <Link to="/women" className="hover:text-gray-300">
              Women
            </Link>
            <Link to="/accessories" className="hover:text-gray-300">
              Accessories
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


export default Navbar;