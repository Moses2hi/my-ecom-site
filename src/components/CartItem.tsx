import React from 'react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
          <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center">
            <label htmlFor={`quantity-${product.id}`} className="mr-2 text-gray-600">
              Qty
            </label>
            <select
              id={`quantity-${product.id}`}
              value={quantity}
              onChange={handleQuantityChange}
              className="rounded border border-gray-300 py-1 text-base"
            >
              {[...Array(10).keys()].map(num => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="button"
            onClick={() => removeFromCart(product.id)}
            className="font-medium text-red-600 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
