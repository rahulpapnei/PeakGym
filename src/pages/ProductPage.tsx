import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Truck, RotateCcw, Heart, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    details: false,
    sizing: false,
    reviews: false
  });

  // Mock product data
  const mockProducts = [
    {
      id: "1",
      name: "Performance Training Tee",
      price: 35,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      ],
      category: "men",
      subcategory: "t-shirts",
      collection: "training",
      colors: ["Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      description: "Elevate your training with our Performance Training Tee. Designed with moisture-wicking fabric and strategic ventilation, this tee keeps you cool and dry during your most intense workouts. The lightweight, breathable material moves with you, providing unrestricted range of motion for any exercise.",
      features: [
        "Moisture-wicking technology draws sweat away from your skin",
        "Four-way stretch fabric for maximum mobility",
        "Mesh ventilation panels for enhanced breathability",
        "Flatlock seams to prevent chafing",
        "Reflective logo for visibility in low-light conditions"
      ],
      care: "Machine wash cold with similar colors. Do not bleach. Tumble dry low. Do not iron. Do not dry clean.",
      material: "88% Polyester, 12% Elastane",
      fit: "Regular fit",
      reviews: [
        {
          author: "Michael T.",
          rating: 5,
          date: "2 months ago",
          title: "Perfect training tee",
          comment: "This is hands down the best training shirt I've ever owned. Stays dry even during the most intense workouts and feels great on the skin. Highly recommend!"
        },
        {
          author: "Sarah J.",
          rating: 4,
          date: "3 months ago",
          title: "Great quality, runs small",
          comment: "The material and quality are excellent, but I found it runs a bit small. I'd recommend sizing up if you're between sizes."
        },
        {
          author: "David L.",
          rating: 5,
          date: "1 month ago",
          title: "Worth every penny",
          comment: "After trying many different brands, this is the one I keep coming back to. Perfect fit, great moisture control, and holds up well after multiple washes."
        }
      ],
      relatedProducts: [2, 4, 5, 8]
    },
    {
      id: "2",
      name: "Seamless Sports Bra",
      price: 40,
      images: [
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80"
      ],
      category: "women",
      subcategory: "sports-bras",
      collection: "seamless",
      colors: ["Black", "Pink", "Blue"],
      sizes: ["XS", "S", "M", "L"],
      isNew: true,
      description: "Experience ultimate comfort with our Seamless Sports Bra. Engineered with our innovative knit technology, this bra provides medium support without any digging or chafing. Perfect for yoga, pilates, weight training, and everyday wear.",
      features: [
        "Seamless construction for maximum comfort",
        "Removable padding for customizable support",
        "Ribbed underband for secure fit",
        "Moisture-wicking fabric keeps you dry",
        "Four-way stretch material moves with your body"
      ],
      care: "Machine wash cold with similar colors. Do not bleach. Tumble dry low. Do not iron. Do not dry clean.",
      material: "76% Nylon, 24% Elastane",
      fit: "True to size",
      reviews: [
        {
          author: "Emma L.",
          rating: 5,
          date: "1 month ago",
          title: "Best sports bra ever",
          comment: "I've tried countless sports bras and this is by far the most comfortable. No digging, no chafing, just perfect support."
        },
        {
          author: "Jessica M.",
          rating: 5,
          date: "2 months ago",
          title: "Perfect for yoga",
          comment: "This is my go-to bra for yoga and pilates. Comfortable enough to wear all day and provides just the right amount of support."
        }
      ],
      relatedProducts: [3, 6, 7]
    }
  ];

  const relatedProducts = [
    {
      id: 4,
      name: "Performance Shorts",
      price: 45,
      image: "https://images.unsplash.com/photo-1562886877-aaaa5c0b3986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "men",
      isNew: false,
      colors: ["Black", "Navy", "Gray"]
    },
    {
      id: 5,
      name: "Lightweight Joggers",
      price: 55,
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
      category: "men",
      isNew: true,
      colors: ["Black", "Gray", "Olive"]
    },
    {
      id: 8,
      name: "Performance Tank",
      price: 30,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "men",
      isNew: false,
      colors: ["Black", "White", "Blue"]
    },
    {
      id: 3,
      name: "Vital Leggings",
      price: 60,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "women",
      isNew: false,
      colors: ["Black", "Gray", "Burgundy"]
    }
  ];

  useEffect(() => {
    // Find product by ID
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [id]);

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <p>Loading product...</p>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="pt-20">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/shop" className="text-gray-600 hover:text-black">Shop</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to={`/shop?category=${product.category}`} className="text-gray-600 hover:text-black">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`overflow-hidden rounded-lg border-2 ${mainImage === image ? 'border-blue-600' : 'border-transparent'}`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.isNew && (
              <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-4">
                NEW
              </div>
            )}
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < 4.5 ? "text-yellow-400 fill-current" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.reviews.length} reviews
              </span>
            </div>
            <p className="text-2xl font-bold mb-6">${product.price}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button 
                    key={color}
                    className={`w-10 h-10 rounded-full border ${selectedColor === color ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'navy' ? '#001f3f' : color.toLowerCase(),
                      border: color.toLowerCase() === 'white' ? '1px solid #e5e5e5' : 'none'
                    }}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Size: <span className="font-normal">{selectedSize}</span></h3>
                <button className="text-sm text-blue-600 hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    className={`w-14 h-12 flex items-center justify-center border rounded-md ${
                      selectedSize === size 
                        ? 'bg-black text-white' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border rounded-md w-32">
                <button 
                  className="w-10 h-10 flex items-center justify-center border-r"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="flex-grow text-center">{quantity}</span>
                <button 
                  className="w-10 h-10 flex items-center justify-center border-l"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-grow bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center">
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="flex-grow sm:flex-grow-0 border border-gray-300 hover:border-gray-400 py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center">
                <Heart size={18} className="mr-2" />
                Wishlist
              </button>
            </div>

            {/* Shipping & Returns */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <div className="flex items-start mb-4">
                <Truck size={20} className="mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-600">On all orders over $75</p>
                </div>
              </div>
              <div className="flex items-start">
                <RotateCcw size={20} className="mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Free Returns</h4>
                  <p className="text-sm text-gray-600">Within 30 days of purchase</p>
                </div>
              </div>
            </div>

            {/* Product Description (Mobile Accordion) */}
            <div className="lg:hidden">
              <div className="border-t border-gray-200">
                <button 
                  className="flex justify-between items-center w-full py-4 font-medium"
                  onClick={() => toggleSection('description')}
                >
                  Description
                  {expandedSections.description ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.description && (
                  <div className="pb-4">
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc pl-5 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-700 mb-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200">
                <button 
                  className="flex justify-between items-center w-full py-4 font-medium"
                  onClick={() => toggleSection('details')}
                >
                  Details & Care
                  {expandedSections.details ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.details && (
                  <div className="pb-4">
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">Material:</h4>
                      <p className="text-gray-700">{product.material}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">Fit:</h4>
                      <p className="text-gray-700">{product.fit}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Care Instructions:</h4>
                      <p className="text-gray-700">{product.care}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200">
                <button 
                  className="flex justify-between items-center w-full py-4 font-medium"
                  onClick={() => toggleSection('reviews')}
                >
                  Reviews ({product.reviews.length})
                  {expandedSections.reviews ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.reviews && (
                  <div className="pb-4">
                    {product.reviews.map((review, index) => (
                      <div key={index} className={index > 0 ? "mt-6" : ""}>
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          <p className="font-medium">{review.title}</p>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{review.author} • {review.date}</p>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button 
                className={`py-4 font-medium border-b-2 ${activeTab === 'description' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`py-4 font-medium border-b-2 ${activeTab === 'details' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('details')}
              >
                Details & Care
              </button>
              <button 
                className={`py-4 font-medium border-b-2 ${activeTab === 'sizing' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('sizing')}
              >
                Size Guide
              </button>
              <button 
                className={`py-4 font-medium border-b-2 ${activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <h3 className="text-lg font-medium mb-4">Features:</h3>
                <ul className="list-disc pl-6 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 mb-2">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'details' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Material:</h4>
                        <p className="text-gray-700">{product.material}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Fit:</h4>
                        <p className="text-gray-700">{product.fit}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Collection:</h4>
                        <p className="text-gray-700">{product.collection.charAt(0).toUpperCase() + product.collection.slice(1).replace('-', ' ')}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Care Instructions</h3>
                    <p className="text-gray-700">{product.care}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sizing' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Size Guide</h3>
                <p className="text-gray-700 mb-6">Find your perfect fit with our detailed size guide. Measurements are in inches.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Size</th>
                        <th className="border px-4 py-2 text-left">Chest</th>
                        <th className="border px-4 py-2 text-left">Waist</th>
                        <th className="border px-4 py-2 text-left">Hip</th>
                        <th className="border px-4 py-2 text-left">Inseam</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">XS</td>
                        <td className="border px-4 py-2">32-34</td>
                        <td className="border px-4 py-2">26-28</td>
                        <td className="border px-4 py-2">34-36</td>
                        <td className="border px-4 py-2">30</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">S</td>
                        <td className="border px-4 py-2">35-37</td>
                        <td className="border px-4 py-2">29-31</td>
                        <td className="border px-4 py-2">37-39</td>
                        <td className="border px-4 py-2">31</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">M</td>
                        <td className="border px-4 py-2">38-40</td>
                        <td className="border px-4 py-2">32-34</td>
                        <td className="border px-4 py-2">40-42</td>
                        <td className="border px-4 py-2">32</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border px-4 py-2">L</td>
                        <td className="border px-4 py-2">41-43</td>
                        <td className="border px-4 py-2">35-37</td>
                        <td className="border px-4 py-2">43-45</td>
                        <td className="border px-4 py-2">33</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">XL</td>
                        <td className="border px-4 py-2">44-46</td>
                        <td className="border px-4 py-2">38-40</td>
                        <td className="border px-4 py-2">46-48</td>
                        <td className="border px-4 py-2">34</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-2">How to Measure:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li className="mb-2"><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</li>
                    <li className="mb-2"><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
                    <li className="mb-2"><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
                    <li className="mb-2"><strong>Inseam:</strong> Measure from the crotch to the bottom of the leg.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center mb-8">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        className={i < 4.5 ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-lg font-medium">4.5 out of 5</p>
                  <span className="mx-2 text-gray-500">•</span>
                  <p className="text-gray-600">{product.reviews.length} reviews</p>
                </div>

                <div className="mb-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-8">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-8">
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        <p className="font-medium text-lg">{review.title}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{review.author} • {review.date}</p>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
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
                    className="w-full h-64 object-cover transition-transform duration-500 group -hover:scale-105"
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
      </div>
    </div>
  );
};

export default ProductPage;