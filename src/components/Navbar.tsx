import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Men',
      subcategories: ['New Releases', 'Bestsellers', 'T-Shirts', 'Shorts', 'Hoodies', 'Joggers', 'Accessories']
    },
    {
      name: 'Women',
      subcategories: ['New Releases', 'Bestsellers', 'Sports Bras', 'Leggings', 'Shorts', 'Tops', 'Accessories']
    },
    {
      name: 'Accessories',
      subcategories: ['Bags', 'Hats', 'Bottles', 'Equipment', 'Socks']
    },
    {
      name: 'Collections',
      subcategories: ['Summer Essentials', 'Training', 'Seamless', 'Vital', 'Legacy']
    }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
          

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {categories.map((category) => (
                <div 
                  key={category.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className="font-medium hover:text-blue-600 transition-colors">
                    {category.name}
                  </button>
                  {activeCategory === category.name && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-md overflow-hidden z-50">
                      <div className="py-2">
                        {category.subcategories.map((subcat) => (
                          <Link 
                            key={subcat} 
                            to={`/shop?category=${category.name.toLowerCase()}&subcategory=${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          >
                            {subcat}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-1 hover:text-blue-600 transition-colors">
                <Search size={20} />
              </button>
              <Link to="/account" className="p-1 hover:text-blue-600 transition-colors">
                <User size={20} />
              </Link>
              <Link to="/cart" className="p-1 hover:text-blue-600 transition-colors relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
              <button 
                className="md:hidden p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {categories.map((category) => (
              <div key={category.name} className="mb-6">
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <div className="ml-4 space-y-2">
                  {category.subcategories.map((subcat) => (
                    <Link 
                      key={subcat} 
                      to={`/shop?category=${category.name.toLowerCase()}&subcategory=${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;