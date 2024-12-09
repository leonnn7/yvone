import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`
        w-full mt-6
        ${showSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'}
        text-white px-6 py-3 rounded-md
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        flex items-center justify-center
      `}
      disabled={showSuccess}
    >
      {showSuccess ? (
        <span className="flex items-center space-x-2">
          <Check className="w-5 h-5" />
          <span>Zum Warenkorb hinzugefügt</span>
        </span>
      ) : (
        'In den Warenkorb'
      )}
    </button>
  );
};