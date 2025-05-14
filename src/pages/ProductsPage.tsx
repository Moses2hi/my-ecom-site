import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
