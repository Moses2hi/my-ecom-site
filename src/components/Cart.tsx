import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart ({totalItems} items)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {items.map(item => (
                  <li key={item.product.id} className="py-6">
                    <CartItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
            
            <div className="flex justify-between py-2 text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between py-2 text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="flex justify-between py-2 text-gray-600">
              <span>Tax</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={() => clearCart()}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
