
import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Users, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Body,<br />Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Join Peak Gym and experience premium fitness equipment, expert trainers, and a supportive community dedicated to your success.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Shop Equipment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Peak Gym?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our premium facilities and services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Dumbbell className="h-16 w-16 mx-auto mb-6 text-black" />
              <h3 className="text-2xl font-semibold mb-4">Premium Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art fitness equipment for every workout style
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-6 text-black" />
              <h3 className="text-2xl font-semibold mb-4">Expert Trainers</h3>
              <p className="text-gray-600">
                Certified professionals to guide and motivate you
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 mx-auto mb-6 text-black" />
              <h3 className="text-2xl font-semibold mb-4">24/7 Access</h3>
              <p className="text-gray-600">
                Work out on your schedule with round-the-clock facility access
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Shop our most popular fitness equipment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Product Cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&q=80&w=800"
                alt="Dumbbells"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Premium Dumbbells Set</h3>
                <p className="text-gray-600 mb-4">Professional-grade rubber-coated dumbbells</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-black font-semibold hover:underline"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Add more featured products */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Peak Gym today and take the first step towards achieving your fitness goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;