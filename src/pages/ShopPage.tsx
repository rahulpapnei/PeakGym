import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: searchParams.get('category') || '',
    subcategory: searchParams.get('subcategory') || '',
    collection: searchParams.get('collection') || '',
    sort: searchParams.get('sort') || 'newest',
    price: '',
    color: '',
    size: ''
  });
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    color: true,
    size: true
  });

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Performance Training Tee",
      price: 35,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "men",
      subcategory: "t-shirts",
      collection: "training",
      colors: ["Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true
    },
    {
      id: 2,
      name: "Seamless Sports Bra",
      price: 40,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      category: "women",
      subcategory: "sports-bras",
      collection: "seamless",
      colors: ["Black", "Pink", "Blue"],
      sizes: ["XS", "S", "M", "L"],
      isNew: true
    },
    {
      id: 3,
      name: "Vital Leggings",
      price: 60,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "women",
      subcategory: "leggings",
      collection: "vital",
      colors: ["Black", "Gray", "Burgundy"],
      sizes: ["XS", "S", "M", "L"],
      isNew: false
    },
    {
      id: 4,
      name: "Performance Shorts",
      price: 45,
      image: "https://images.unsplash.com/photo-1562886877-aaaa5c0b3986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "men",
      subcategory: "shorts",
      collection: "training",
      colors: ["Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      isNew: false
    },
    {
      id: 5,
      name: "Lightweight Joggers",
      price: 55,
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
      category: "men",
      subcategory: "joggers",
      collection: "summer-essentials",
      colors: ["Black", "Gray", "Olive"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true
    },
    {
      id: 6,
      name: "Training Crop Top",
      price: 35,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80",
      category: "women",
      subcategory: "tops",
      collection: "training",
      colors: ["White", "Black", "Pink"],
      sizes: ["XS", "S", "M", "L"],
      isNew: false
    },
    {
      id: 7,
      name: "Seamless Long Sleeve Top",
      price: 45,
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      category: "women",
      subcategory: "tops",
      collection: "seamless",
      colors: ["Black", "Gray", "Blue"],
      sizes: ["XS", "S", "M", "L"],
      isNew: true
    },
    {
      id: 8,
      name: "Performance Tank",
      price: 30,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "men",
      subcategory: "tops",
      collection: "summer-essentials",
      colors: ["Black", "White", "Blue"],
      sizes: ["S", "M", "L", "XL"],
      isNew: false
    }
  ];

  useEffect(() => {
    // Filter products based on URL parameters
    let filteredProducts = [...mockProducts];
    
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const collection = searchParams.get('collection');
    const sort = searchParams.get('sort');
    
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (subcategory) {
      filteredProducts = filteredProducts.filter(product => product.subcategory === subcategory);
    }
    
    if (collection) {
      filteredProducts = filteredProducts.filter(product => product.collection === collection);
    }
    
    // Sort products
    if (sort === 'price-low-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'bestselling') {
      // In a real app, this would use actual bestselling data
      // For now, just shuffle the array
      filteredProducts.sort(() => Math.random() - 0.5);
    } else {
      // Default: newest first (for this mock, we'll just use the isNew flag)
      filteredProducts.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }
    
    setProducts(filteredProducts);
    
    // Update active filters based on URL
    setActiveFilters({
      category: category || '',
      subcategory: subcategory || '',
      collection: collection || '',
      sort: sort || 'newest',
      price: '',
      color: '',
      size: ''
    });
  }, [searchParams]);

  const toggleFilterSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const clearFilters = () => {
    // In a real app, this would navigate to the base shop URL
    setActiveFilters({
      category: '',
      subcategory: '',
      collection: '',
      sort: 'newest',
      price: '',
      color: '',
      size: ''
    });
  };

  const getPageTitle = () => {
    if (activeFilters.subcategory) {
      return activeFilters.subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } else if (activeFilters.category) {
      return activeFilters.category.charAt(0).toUpperCase() + activeFilters.category.slice(1);
    } else if (activeFilters.collection) {
      return activeFilters.collection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Collection';
    } else {
      return 'All Products';
    }
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">{getPageTitle()}</h1>
          <div className="flex items-center text-sm mt-2">
            <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="text-gray-600 hover:text-black">Shop</Link>
            {activeFilters.category && (
              <>
                <span className="mx-2">/</span>
                <span className="font-medium">{activeFilters.category.charAt(0).toUpperCase() + activeFilters.category.slice(1)}</span>
              </>
            )}
            {activeFilters.subcategory && (
              <>
                <span className="mx-2">/</span>
                <span className="font-medium">
                  {activeFilters.subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button 
              className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-md"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="flex items-center">
                <Filter size={18} className="mr-2" />
                Filter & Sort
              </span>
              {isFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                <button 
                  className="text-sm text-gray-500 hover:text-black"
                  onClick={clearFilters}
                >
                  Clear All
                </button>
              </div>

              {/* Active Filters */}
              {(activeFilters.category || activeFilters.subcategory || activeFilters.collection) && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Active Filters:</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.category && (
                      <div className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center">
                        {activeFilters.category.charAt(0).toUpperCase() + activeFilters.category.slice(1)}
                        <button className="ml-1">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                    {activeFilters.subcategory && (
                      <div className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center">
                        {activeFilters.subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        <button className="ml-1">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                    {activeFilters.collection && (
                      <div className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center">
                        {activeFilters.collection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        <button className="ml-1">
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Category Filter */}
              <div className="mb-6 border-b pb-6">
                <button 
                  className="flex justify-between items-center w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('category')}
                >
                  Category
                  {expandedSections.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.category && (
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category" 
                        value="men" 
                        checked={activeFilters.category === 'men'} 
                        className="mr-2"
                      />
                      Men
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category" 
                        value="women" 
                        checked={activeFilters.category === 'women'} 
                        className="mr-2"
                      />
                      Women
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="category" 
                        value="accessories" 
                        checked={activeFilters.category === 'accessories'} 
                        className="mr-2"
                      />
                      Accessories
                    </label>
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-6 border-b pb-6">
                <button 
                  className="flex justify-between items-center w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('price')}
                >
                  Price
                  {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.price && (
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="under-25" 
                        checked={activeFilters.price === 'under-25'} 
                        className="mr-2"
                      />
                      Under $25
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="25-50" 
                        checked={activeFilters.price === '25-50'} 
                        className="mr-2"
                      />
                      $25 - $50
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="50-100" 
                        checked={activeFilters.price === '50-100'} 
                        className="mr-2"
                      />
                      $50 - $100
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="price" 
                        value="over-100" 
                        checked={activeFilters.price === 'over-100'} 
                        className="mr-2"
                      />
                      Over $100
                    </label>
                  </div>
                )}
              </div>

              {/* Color Filter */}
              <div className="mb-6 border-b pb-6">
                <button 
                  className="flex justify-between items-center w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('color')}
                >
                  Color
                  {expandedSections.color ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.color && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Black', 'White', 'Gray', 'Blue', 'Navy', 'Pink', 'Red', 'Green'].map((color) => (
                      <button 
                        key={color}
                        className={`w-8 h-8 rounded-full border ${activeFilters.color === color.toLowerCase() ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                        style={{ 
                          backgroundColor: color.toLowerCase() === 'navy' ? '#001f3f' : color.toLowerCase(),
                          border: color.toLowerCase() === 'white' ? '1px solid #e5e5e5' : 'none'
                        }}
                        title={color}
                      ></button>
                    ))}
                  </div>
                )}
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <button 
                  className="flex justify-between items-center w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('size')}
                >
                  Size
                  {expandedSections.size ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedSections.size && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button 
                        key={size}
                        className={`w-10 h-10 flex items-center justify-center border rounded-md ${
                          activeFilters.size === size.toLowerCase() 
                            ? 'bg-black text-white' 
                            : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{products.length} products</p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm">Sort by:</label>
                <select 
                  id="sort"
                  value={activeFilters.sort}
                  className="border rounded-md px-2 py-1 text-sm"
                >
                  <option value="newest">Newest</option>
                  <option value="bestselling">Best Selling</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products.map((product) => (
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
        </div>
      </div>
    </div>
  );
};

export default ShopPage;