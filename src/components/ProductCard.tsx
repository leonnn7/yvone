import React from 'react';
import { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.isCustomizable && (
          <span className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-md text-sm">
            Personalisierbar
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{product.description}</p>
        <div className="mt-4">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            CHF {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};