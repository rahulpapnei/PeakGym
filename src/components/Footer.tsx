import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Aristo</h3>
            <p className="text-gray-400">
              Elevate your Fashion journey with premium fabric and expert designers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info with Icons */}
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" />
                Mandawali west vinod nagar<br />
                Near talab chowk
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                7428630762
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                official@Aristo.com
              </li>
            </ul>
          </div>
          <div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aristo. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
