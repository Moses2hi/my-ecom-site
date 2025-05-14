import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  // Display only featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to ShopEasy</h1>
          <p className="text-xl mb-6">
            Discover amazing products at unbeatable prices. Shop with confidence and ease.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link to="/products" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">On all orders over $50</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure payment</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-4xl mb-4">↩️</div>
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600">30 day return policy</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
