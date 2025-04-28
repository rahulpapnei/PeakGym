import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity, } from '../store/cartSlice';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  //const cartTotal = useSelector((state: RootState) => state.cart.total);
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ₹{(item.originalPrice - (item.originalPrice * item.discount / 100)).toFixed(2)}
                    {item.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through ml-2">₹{item.originalPrice}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">
                    Size: {item.size}, Color: {item.color}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-2 text-red-500 hover:bg-red-50 rounded"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
               <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-gray-600">
               <span>{item.name} (x{item.quantity})</span>
               <span>₹{((item.originalPrice - (item.originalPrice * item.discount / 100)) * item.quantity).toFixed(2)}</span>
             </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>
  ₹{items.reduce((total, item) => total + ((item.originalPrice - (item.originalPrice * item.discount / 100)) * item.quantity), 0).toFixed(2)}
</span>

              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;