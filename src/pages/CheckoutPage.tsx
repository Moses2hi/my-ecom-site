import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage: React.FC = () => {
  const { items } = useCart();
  
  // Redirect to cart if there are no items
  if (items.length === 0) {
    return <Navigate to="/cart" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
