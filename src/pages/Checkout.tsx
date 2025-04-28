import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { clearCart, CartItem } from '../store/cartSlice'; // Import CartItem from your store
import { Truck, Shield, Package } from 'lucide-react';

// PayPal related types
interface PayPalButtonsComponentOptions {
  createOrder: (data: Record<string, unknown>, actions: PayPalActions) => Promise<string>;
  onApprove: (data: PayPalOrderData, actions: PayPalActions) => Promise<void>;
  onError: (err: Error) => void;
}

interface PayPalActions {
  order: {
    create: (orderData: PayPalOrderCreateData) => Promise<string>;
    capture: () => Promise<PayPalOrderDetails>;
  };
}

interface PayPalOrderCreateData {
  purchase_units: Array<{
    amount: {
      value: string;
    };
  }>;
}

interface PayPalOrderData {
  orderID: string;
}

interface PayPalOrderDetails {
  id: string;
  status: string;
  [key: string]: unknown;
}

// Declare PayPal global type
interface PayPalNamespace {
  Buttons: (options: PayPalButtonsComponentOptions) => {
    render: (element: HTMLElement) => void;
  };
}

interface WindowWithPayPal extends Window {
  paypal?: PayPalNamespace;
}

const generateTrackingCode = () =>
  'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase();

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const total = items.reduce((to, item) => 
    to + ((item.originalPrice - (item.originalPrice * item.discount / 100)) * item.quantity)
  , 0); // 👉 Do NOT use .toFixed(2) here yet
  
  const shipping = 0.0;
  const tax = total * 0.00;
  
  const finalTotal = total + shipping + tax;

  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (items.length === 0) return;

    // 1) load PayPal's JS SDK
    const script = document.createElement('script');
    // replace YOUR_CLIENT_ID with your real PayPal client ID (or pull from env)
    script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD`;
    script.async = true;
    script.onload = () => {
      // 2) render the buttons into our container
      const paypal = (window as WindowWithPayPal).paypal;
      
      if (paypal && paypalRef.current) {
        paypal.Buttons({
          createOrder: (_data: Record<string, unknown>, actions: PayPalActions) => {
            setError(null);
            return actions.order.create({
              purchase_units: [{ amount: { value: finalTotal.toFixed(2) } }]
            });
          },
          onApprove: async (_data: PayPalOrderData, actions: PayPalActions) => {
            try {
              const details = await actions.order.capture();
              dispatch(clearCart());
              navigate('/', {
                state: { paymentSuccess: true, orderId: details.id }
              });
            } catch {
              setError('Payment failed, please try again.');
            }
          },
          onError: (err: Error) => {
            console.error('PayPal error', err);
            setError('Could not load PayPal buttons.');
          }
        }).render(paypalRef.current);
      }
    };
    document.body.appendChild(script);

    // cleanup if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [finalTotal, items, dispatch, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCashOnDelivery = () => {
    const trackingCode = generateTrackingCode();
    dispatch(clearCart());
    navigate('/order-tracking', {
      state: {
        trackingCode,
        orderStatus: 'processing',
        orderDate: new Date().toISOString()
      }
    });
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 mt-5">Checkout</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            {/* first/last */}
            <div className="grid grid-cols-2 gap-4">
              {['firstName','lastName'].map(name => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {name === 'firstName' ? 'First Name' : 'Last Name'}
                  </label>
                  <input
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:ring-black focus:border-black"
                    required
                  />
                </div>
              ))}
            </div>
            {/* email/address */}
            {['email','address'].map(name => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
                <input
                  type={name === 'email' ? 'email' : 'text'}
                  name={name}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:ring-black focus:border-black"
                  required
                />
              </div>
            ))}
            {/* city/state/zip */}
            <div className="grid grid-cols-3 gap-4">
              {['city','state','zipCode'].map(name => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {name === 'zipCode' ? 'ZIP Code' : name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>
                  <input
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:ring-black focus:border-black"
                    required
                  />
                </div>
              ))}
            </div>
          </form>
        </div>

        {/* Summary & Payments */}
        <div>
          <div className="bg-white p-6 rounded shadow mb-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              {items.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{((item.originalPrice - (item.originalPrice * item.discount / 100)) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-2"/>
              {[
                ['Subtotal', total],
                ['Shipping', shipping],
                ['Tax', tax]
              ].map(([label, amt]: [string, number]) => (
                <div key={label} className="flex justify-between text-gray-600">
                  <span>{label}</span>
                  <span>₹{amt.toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-2"/>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow mb-6 space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="h-5 w-5" /><span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Truck className="h-5 w-5" /><span>Free shipping over ₹100</span>
            </div>
          </div>

          {/* PayPal Buttons will render here */}
          <div ref={paypalRef} />

          <button
            onClick={handleCashOnDelivery}
            className="mt-4 w-full bg-black text-white py-3 rounded hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <Package className="h-5 w-5" /> Pay with Cash on Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;