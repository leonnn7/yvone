import React from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface RelatedProductsProps {
  currentProductId: string;
  products: Product[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, products }) => {
  const relatedProducts = products
    .filter(product => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-serif mb-8 dark:text-gray-100">Ähnliche Produkte</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};