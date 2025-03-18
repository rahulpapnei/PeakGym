
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">PEAKGYM</h3>
            <p className="text-gray-400 mb-4">
              Elevate your fitness journey with premium performance apparel designed for those who push boundaries.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/peak_ggym/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/rahulpapnai0000" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Rahulchandr1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rahul-chandra-343294268/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=men" className="text-gray-400 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/shop?category=women" className="text-gray-400 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/shop?category=accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=collections" className="text-gray-400 hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/shop?sale=true" className="text-gray-400 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/help/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/help/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/help/size-guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/help/track-order" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/about/sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/about/athletes" className="text-gray-400 hover:text-white transition-colors">Athletes</Link></li>
              <li><Link to="/about/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/about/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PEAKGYM. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;