import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Truck, Package, Heart, Share2, ArrowRight, X } from 'lucide-react';
import { getMensProducts } from './MensProducts';
import ProductReviews from '../components/ProductReviews';
import { productReviews } from '../data/reviews';

const MensProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const product = getMensProducts().find((p) => p.id === Number(id));

  // Available colors for the product
  const availableColors = ['black', 'blue', 'gray', 'green', 'red'];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      // Include all Product properties
      id: product.id,
      name: product.name,
      originalPrice: product.originalPrice,
      discount: product.discount,
      image: product.image,
      images: product.images,
      description: product.description,
      details: product.details,
      features: product.features,
      rating: product.rating,
      // Add the additional required properties
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    }));
    navigate('/cart');
  };

  // Calculate average rating
  const averageRating = productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length;
  const totalReviews = productReviews.length;
  console.log(productReviews);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-primary hover:text-accent transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Products
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Image Gallery */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-[600px] object-contain rounded-lg"
            />
            <button
              onClick={() => setCurrentImageIndex(prev => 
                prev === 0 ? product.images.length - 1 : prev - 1
              )}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentImageIndex(prev => 
                prev === product.images.length - 1 ? 0 : prev + 1
              )}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
          {product.images.map((image: string, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
              currentImageIndex === index ? 'border-black' : 'border-transparent'
            }`}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded">
                <span className="font-semibold mr-1">{product.rating}</span>
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="text-gray-600">|</span>
              <span className="text-gray-600">Verified Purchase</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">
                  ₹{(product.originalPrice - (product.originalPrice * product.discount / 100)).toFixed(2)}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>
            <p className="text-green-600 text-sm">Inclusive of all taxes</p>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Select Size</h3>
            <div className="flex gap-4">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border-2 ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection - Added to fix the unused setSelectedColor */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Select Color</h3>
            <div className="flex gap-4">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 ${
                    selectedColor === color
                      ? 'border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">Selected color: {selectedColor}</p>
          </div>

          {/* Quantity Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-10 h-10 border rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 ${
                selectedSize
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {selectedSize ? 'Add to Cart' : 'Select a Size'}
            </button>

            <div className="flex gap-4">
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`flex-1 py-4 rounded-lg border flex items-center justify-center gap-2 ${
                  isWishlist ? 'text-red-500 border-red-500' : 'text-gray-600'
                }`}
              >
                <Heart className="h-5 w-5" />
                {isWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
              </button>
              <button className="flex-1 py-4 rounded-lg border flex items-center justify-center gap-2 text-gray-600">
                <Share2 className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>

          <div className="space-y-4 border-t border-b py-4">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-gray-600" />
              <span>Free Delivery</span>
            </div>
         
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-gray-600" />
              <span>7 Days Replacement</span>
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 font-semibold ${
                  selectedTab === 'description'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500'
                }`}
                onClick={() => setSelectedTab('description')}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 font-semibold ${
                  selectedTab === 'specifications'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500'
                }`}
                onClick={() => setSelectedTab('specifications')}
              >
                Product Details
              </button>
            </div>

            <div className="space-y-4">
              {selectedTab === 'description' ? (
                <p className="text-gray-600">{product.details}</p>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                 {product.features.map((feature: string, index: number) => {
                const [label, value] = feature.split(':').map((part: string) => part.trim());
                return (
                  <div key={index} className="flex gap-2">
                    <span className="font-semibold min-w-[120px]">{label}:</span>
                    <span className="text-gray-600">{value}</span>
          </div>
        );
      })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Reviews */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(averageRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">{averageRating.toFixed(1)} out of 5</span>
              <span className="text-gray-600">({totalReviews} reviews)</span>
            </div>
          </div>
          <button
            onClick={() => setShowAllReviews(true)}
            className="text-blue-600 flex items-center gap-2 hover:text-blue-700"
          >
            See All Reviews
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <ProductReviews reviews={productReviews.slice(0, 3)} productId={String(product.id)} />

      </div>

      {/* All Reviews Modal */}
      {showAllReviews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Reviews</h2>
              <button
                onClick={() => setShowAllReviews(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-6">
              {productReviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{review.user}</span>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{review.comment}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{review.date}</span>
                    <button className="hover:text-gray-700">
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MensProductDetail;