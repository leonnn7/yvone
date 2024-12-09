import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Customization = () => {
  const customizableProducts = products.filter(product => product.category === 'custom');

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4 dark:text-gray-100">Personalisierung</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Entdecken Sie unsere personalisierbaren Häkeldeckchen. Jedes Stück wird nach Ihren 
          Wünschen handgefertigt und ist ein einzigartiges Kunstwerk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {customizableProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-serif mb-4 dark:text-gray-100">
          Wie funktioniert die Personalisierung?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">1.</div>
            <h3 className="font-semibold mb-2 dark:text-gray-100">Auswählen</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Wählen Sie ein personalisierbares Design aus unserer Kollektion
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">2.</div>
            <h3 className="font-semibold mb-2 dark:text-gray-100">Anpassen</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Teilen Sie uns Ihre Wünsche zu Größe, Farbe und Muster mit
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">3.</div>
            <h3 className="font-semibold mb-2 dark:text-gray-100">Bestellen</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Wir fertigen Ihr persönliches Häkeldeckchen nach Ihren Vorgaben
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};