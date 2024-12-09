import React from 'react';
import { ProductSize, ProductStyle } from '../../types/product';

interface FilterSectionProps {
  selectedSize: ProductSize | '';
  selectedStyle: ProductStyle | '';
  priceRange: [number, number];
  onSizeChange: (size: ProductSize | '') => void;
  onStyleChange: (style: ProductStyle | '') => void;
  onPriceRangeChange: (range: [number, number]) => void;
  isCustomizable: boolean | null;
  onCustomizableChange: (value: boolean | null) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  selectedSize,
  selectedStyle,
  priceRange,
  onSizeChange,
  onStyleChange,
  onPriceRangeChange,
  isCustomizable,
  onCustomizableChange,
}) => {
  const sizes: ProductSize[] = ['klein', 'mittel', 'gross'];
  const styles: ProductStyle[] = ['klassisch', 'modern', 'vintage', 'rustikal', 'festlich'];
  const minPrice = 0;
  const maxPrice = 100;

  const handlePriceChange = (value: string, index: number) => {
    const newValue = value === '' ? (index === 0 ? minPrice : maxPrice) : Number(value);
    const newRange: [number, number] = [...priceRange] as [number, number];
    
    // Ensure the value is within bounds
    const boundedValue = Math.max(minPrice, Math.min(maxPrice, newValue));
    newRange[index] = boundedValue;
    
    // Ensure min <= max
    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[1] = newRange[0];
    } else if (index === 1 && newRange[1] < newRange[0]) {
      newRange[0] = newRange[1];
    }
    
    onPriceRangeChange(newRange);
  };

  return (
    <div className="space-y-6 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold mb-3 dark:text-gray-100">Grösse</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSizeChange('')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedSize === '' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Alle
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedSize === size
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 dark:text-gray-100">Stil</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onStyleChange('')}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedStyle === ''
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Alle
          </button>
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => onStyleChange(style)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedStyle === style
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 dark:text-gray-100">Preisbereich</h3>
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Von</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">CHF</span>
              <input
                type="number"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e.target.value, 0)}
                className="w-full pl-12 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                         transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Bis</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">CHF</span>
              <input
                type="number"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e.target.value, 1)}
                className="w-full pl-12 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                         transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 dark:text-gray-100">Personalisierung</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCustomizableChange(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              isCustomizable === null
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Alle
          </button>
          <button
            onClick={() => onCustomizableChange(true)}
            className={`px-3 py-1 rounded-full text-sm ${
              isCustomizable === true
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Personalisierbar
          </button>
          <button
            onClick={() => onCustomizableChange(false)}
            className={`px-3 py-1 rounded-full text-sm ${
              isCustomizable === false
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Standard
          </button>
        </div>
      </div>
    </div>
  );
};