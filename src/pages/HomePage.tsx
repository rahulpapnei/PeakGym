import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Instagram  } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "SUMMER ESSENTIALS",
      subtitle: "Lightweight performance wear for your hottest workouts",
      buttonText: "Shop Men",
      buttonLink: "/shop?category=men&collection=summer-essentials",
      secondaryButtonText: "Shop Women",
      secondaryButtonLink: "/shop?category=women&collection=summer-essentials"
    },
    {
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "NEW SEAMLESS COLLECTION",
      subtitle: "Engineered for ultimate comfort and performance",
      buttonText: "Shop Collection",
      buttonLink: "/shop?collection=seamless",
      secondaryButtonText: null,
      secondaryButtonLink: null
    },
    {
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "TRAIN HARDER",
      subtitle: "Performance apparel that works as hard as you do",
      buttonText: "Shop Training",
      buttonLink: "/shop?collection=training",
      secondaryButtonText: null,
      secondaryButtonLink: null
    }
  ];

  const featuredCategories = [
    {
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      title: "Men's Bestsellers",
      link: "/shop?category=men&sort=bestselling"
    },
    {
      image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Women's Bestsellers",
      link: "/shop?category=women&sort=bestselling"
    },
    {
      image: "https://th.bing.com/th/id/R.5f4ba2072d2f61f9140f0a9de3b3288b?rik=nWJObkEeb0Mvvw&riu=http%3a%2f%2fwww.fashiondivadesign.com%2fwp-content%2fuploads%2f2016%2f01%2fdiy-jewelry-organizer17-640x640.jpg&ehk=7wKjLHv7nXocqc%2fITjtxh8C6bkeMFtmzXi9EeZxJhqA%3d&risl=&pid=ImgRaw&r=0",
      title: "Accessories",
      link: "/shop?category=accessories"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Performance Training Tee",
      price: 35,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "men",
      isNew: true,
      colors: ["Black", "Navy", "Gray"]
    },
    {
      id: 2,
      name: "Seamless Sports Bra",
      price: 40,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      category: "women",
      isNew: true,
      colors: ["Black", "Pink", "Blue"]
    },
    {
      id: 3,
      name: "Vital Leggings",
      price: 60,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "women",
      isNew: false,
      colors: ["Black", "Gray", "Burgundy"]
    },
    {
      id: 4,
      name: "Performance Shorts",
      price: 45,
      image: "https://images.unsplash.com/photo-1617952385804-1da4f8d71ba9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "men",
      isNew: false,
      colors: ["Black", "Navy", "Gray"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="pt-16">
      {/* Hero Slider */}
      <div className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to={slide.buttonLink}
                    className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
                  >
                    {slide.buttonText}
                  </Link>
                  {slide.secondaryButtonText && (
                    <Link 
                      to={slide.secondaryButtonLink || '#'}
                      className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors"
                    >
                      {slide.secondaryButtonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Ready For Your Fitness Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Link to={category.link} key={index} className="group">
                <div className="relative overflow-hidden rounded-lg h-96">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <span className="inline-flex items-center text-white group-hover:underline">
                      Shop Now <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/shop?sort=newest" className="text-blue-600 hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      NEW
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                <div className="mt-2 flex space-x-1">
                  {product.colors.map((color, i) => (
                    <span key={i} className="text-sm text-gray-500">
                      {i > 0 ? ` • ${color}` : color}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">TRAINING COLLECTION</h2>
              <p className="text-gray-300 text-lg mb-8">
                Engineered for peak performance. Our Training Collection combines cutting-edge fabric technology with ergonomic design to help you push your limits.
              </p>
              <Link 
                to="/shop?collection=training"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Shop The Collection
              </Link>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Training Collection" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The quality of PEAKGYM apparel is unmatched. I've never felt more comfortable during my workouts.",
                author: "Sarah J.",
                role: "Fitness Instructor"
              },
              {
                quote: "These are the only leggings I'll wear for my heavy lifting sessions. Squat-proof and incredibly durable.",
                author: "Michael T.",
                role: "Powerlifter"
              },
              {
                quote: "From running to yoga, PEAKGYM has become my go-to brand for all my fitness needs. Worth every penny!",
                author: "Emma L.",
                role: "Marathon Runner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Follow Us On Instagram</h2>
          <p className="text-center text-gray-600 mb-12">@peakgym</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
            ].map((image, index) => (
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                className="group relative overflow-hidden"
              >
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram size={24} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join The PEAKGYM Community</h2>
            <p className="mb-8">Sign up for our newsletter to receive exclusive offers, early access to new releases, and fitness tips from our athletes.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-l-md text-black focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-black text-white px-6 py-3 rounded-r-md font-medium hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;