import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { RelatedProducts } from '../components/RelatedProducts';
import { AddToCartButton } from '../components/AddToCartButton';
import { ImageSlider } from '../components/ImageSlider';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <p className="text-xl text-gray-600 dark:text-gray-300">Produkt nicht gefunden</p>
      </div>
    );
  }

  const allImages = [product.imageUrl, ...product.additionalImages];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
          <ImageSlider images={allImages} productName={product.name} />
          {product.isCustomizable && (
            <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-md">
              Personalisierbar
            </span>
          )}
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-serif dark:text-gray-100">{product.name}</h1>
          <p className="text-xl font-bold dark:text-gray-200">
            CHF {product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          
          {product.isCustomizable && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Personalisierung</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Dieses Produkt kann nach Ihren Wünschen angepasst werden. 
                <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 ml-1">
                  Kontaktieren Sie uns
                </Link> für individuelle Anpassungen.
              </p>
            </div>
          )}
          
          <AddToCartButton product={product} />
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} products={products} />
    </div>
  );
};