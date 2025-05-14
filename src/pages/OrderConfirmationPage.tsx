import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderConfirmationPage: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  
  // If user navigates directly to this page without placing an order, redirect to home
  useEffect(() => {
    if (items.length > 0) {
      navigate('/cart');
    }
  }, [items, navigate]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
          You will receive an email confirmation shortly.
        </p>
        <p className="text-gray-600 mb-8">
          Order number: <span className="font-semibold">#{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
