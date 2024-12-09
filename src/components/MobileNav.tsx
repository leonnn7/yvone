import React from 'react';
import { Link } from 'react-router-dom';
import { X, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { items } = useCart();
  const { theme, toggleTheme } = useTheme();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Navigation Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-xl 
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full absolute right-4"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <nav className="mt-8">
          <Link
            to="/"
            onClick={onClose}
            className="block px-6 py-3 text-lg font-serif text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={onClose}
            className="block px-6 py-3 text-lg font-serif text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="block px-6 py-3 text-lg font-serif text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Kontakt
          </Link>
          <Link
            to="/cart"
            onClick={onClose}
            className="block px-6 py-3 text-lg font-serif text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Warenkorb {itemCount > 0 && `(${itemCount})`}
          </Link>
          
          <button
            onClick={toggleTheme}
            className="w-full px-6 py-3 text-left text-lg font-serif text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-5 h-5 mr-2" />
                Dunkelmodus
              </>
            ) : (
              <>
                <Sun className="w-5 h-5 mr-2" />
                Hellmodus
              </>
            )}
          </button>
        </nav>
      </div>
    </>
  );
};