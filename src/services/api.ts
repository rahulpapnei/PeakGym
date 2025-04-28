import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-m.sandbox.paypal.com',
});

export const createPayPalOrder = async (orderData: any) => {
  try {
    const response = await api.post('/v2/checkout/orders', orderData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_PAYPAL_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    throw error;
  }
};

export const capturePayPalOrder = async (orderId: string) => {
  try {
    const response = await api.post(`/v2/checkout/orders/${orderId}/capture`, {}, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_PAYPAL_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    throw error;
  }
};

export default api;