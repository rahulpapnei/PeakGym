import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ChevronRight, CreditCard, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Performance Training Tee",
      price: 35,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      color: "Black",
      size: "M",
      quantity: 1
    },
    {
      id: 3,
      name: "Vital Leggings",
      price: 60,
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      color: "Gray",
      size: "S",
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + change)) } 
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
      setPromoApplied(true);
      setPromoDiscount(10);
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 5.99;
  const discount = promoApplied ? (subtotal * (promoDiscount / 100)) : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Cart Items ({cartItems.length})</h2>
                    <Link to="/shop" className="text-blue-600 hover:underline text-sm flex items-center">
                      <ChevronLeft size={16} className="mr-1" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 border-b flex flex-col sm:flex-row">
                    <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow sm:ml-6">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">Color: {item.color} | Size: {item.size}</p>
                          <p className="font-medium">${item.price}</p>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
                          <div className="flex items-center border rounded-md mr-4">
                            <button 
                              className="w-8 h-8 flex items-center justify-center"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button 
                              className="w-8 h-8 flex items-center justify-center"
                              onClick={() => updateQuantity(item.id, 1)}
                              disabled={item.quantity >= 10}
                            >
                              +
                            </button>
                          </div>
                          <button 
                            className="text-gray-500 hover:text-red-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({promoDiscount}%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label htmlFor="promo" className="block text-sm font-medium mb-2">Promo Code</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      id="promo"
                      className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <button 
                      className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-r-md transition-colors"
                      onClick={applyPromoCode}
                      disabled={promoApplied || !promoCode}
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-600 text-sm mt-1">Promo code applied successfully!</p>
                  )}
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center">
                  <CreditCard size={18} className="mr-2" />
                  Proceed to Checkout
                </button>

                {/* Shipping Note */}
                <p className="text-sm text-gray-600 mt-4 text-center">
                  {subtotal < 75 ? (
                    <>Add <span className="font-medium">${(75 - subtotal).toFixed(2)}</span> more to qualify for free shipping</>
                  ) : (
                    <>You've qualified for free shipping!</>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* You May Also Like */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                id: 2,
                name: "Seamless Sports Bra",
                price: 40,
                image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
                isNew: true,
                colors: ["Black", "Pink", "Blue"]
              },
              {
                id: 4,
                name: "Performance Shorts",
                price: 45,
                image: "https://images.unsplash.com/photo-1562886877-aaaa5c0b3986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                isNew: false,
                colors: ["Black", "Navy", "Gray"]
              },
              {
                id: 7,
                name: "Seamless Long Sleeve Top",
                price: 45,
                image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
                isNew: true,
                colors: ["Black", "Gray", "Blue"]
              },
              {
                id: 8,
                name: "Performance Tank",
                price: 30,
                image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                isNew: false,
                colors: ["Black", "White", "Blue"]
              }
            ].map((product) => (
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
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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

export default CartPage;