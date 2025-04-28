import React, { useState } from 'react';
import { Package, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const OrderTracking = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState<null | {
    status: 'ordered' | 'processing';
    date: string;
    location: string;
    trackingCode?: string;
  }>(location.state || null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated tracking info
    setTrackingStatus({
      status: 'processing',
      date: new Date().toISOString().split('T')[0],
      location: 'New York Distribution Center',
      trackingCode: orderId
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 mt-5">Track Your Order</h1>

      {!trackingStatus && (
        <form onSubmit={handleTrackOrder} className="mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your tracking code"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Track Order
            </button>
          </div>
        </form>
      )}

      {trackingStatus && (
        <div className="space-y-8">
          <div className="relative">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-center text-green-600">
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-green-600 text-white">
                  <Package className="h-5 w-5" />
                </div>
                <span className="mt-2">Ordered</span>
              </div>
              <div className={`flex flex-col items-center ${
                trackingStatus.status === 'processing' ? 'text-green-600' : 'text-gray-400'
              }`}>
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  trackingStatus.status === 'processing' ? 'bg-green-600 text-white' : 'bg-gray-200'
                }`}>
                  <Clock className="h-5 w-5" />
                </div>
                <span className="mt-2">Processing</span>
              </div>
            </div>
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
              <div 
                className="h-full bg-green-600"
                style={{
                  width: trackingStatus.status === 'ordered' ? '0%' : '100%'
                }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Tracking Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking Code</span>
                <span className="font-semibold">{trackingStatus.trackingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-semibold capitalize">{trackingStatus.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated</span>
                <span className="font-semibold">{trackingStatus.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location</span>
                <span className="font-semibold">{trackingStatus.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;