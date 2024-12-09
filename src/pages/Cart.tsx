import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('your_publishable_key');

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      console.log('Proceeding to checkout with items:', items);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
          <div className="mb-6">
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500" />
          </div>
          <h1 className="text-2xl font-serif mb-4 dark:text-gray-100">Ihr Warenkorb ist leer</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Entdecken Sie unsere handgefertigten Häkeldeckchen im Shop.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Zum Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-serif mb-8 dark:text-gray-100">Warenkorb</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center py-4 border-b last:border-b-0">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold dark:text-gray-100">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                CHF {product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Subtotal: CHF {(product.price * quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center dark:text-gray-100">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="ml-4 p-2 text-red-500 hover:text-red-600 transition-colors"
              title="Entfernen"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold dark:text-gray-100">Total</span>
            <span className="text-xl font-bold dark:text-gray-100">
              CHF {total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Zur Kasse</span>
          </button>
        </div>
      </div>
    </div>
  );
};