import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/shop/SearchBar';
import { FilterSection } from '../components/shop/FilterSection';
import { products } from '../data/products';
import { ProductSize, ProductStyle } from '../types/product';
import { Filter } from 'lucide-react';

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState<ProductSize | ''>('');
  const [selectedStyle, setSelectedStyle] = useState<ProductStyle | ''>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [isCustomizable, setIsCustomizable] = useState<boolean | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSize = !selectedSize || product.size === selectedSize;
      const matchesStyle = !selectedStyle || product.style === selectedStyle;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCustomizable = isCustomizable === null || product.isCustomizable === isCustomizable;

      return matchesSearch && matchesSize && matchesStyle && matchesPrice && matchesCustomizable;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedSize, selectedStyle, priceRange, isCustomizable]);

  const activeFiltersCount = [
    selectedSize,
    selectedStyle,
    priceRange[0] > 0 || priceRange[1] < 100,
    isCustomizable !== null,
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm"
          >
            <Filter className="w-5 h-5" />
            <span>Filter {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
          </button>
          <div className="flex-1 ml-4">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>

        {/* Filters sidebar - Desktop */}
        <div className={`
          md:w-64 md:flex-shrink-0
          ${isFilterOpen ? 'block' : 'hidden'}
          md:block
          fixed md:relative
          inset-0 md:inset-auto
          z-40 md:z-0
          bg-gray-100/95 dark:bg-gray-900/95 md:bg-transparent
          backdrop-blur-sm md:backdrop-blur-none
          p-4 md:p-0
          overflow-y-auto
        `}>
          {/* Close button for mobile */}
          <div className="md:hidden flex justify-end mb-4">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              ✕
            </button>
          </div>

          <FilterSection
            selectedSize={selectedSize}
            selectedStyle={selectedStyle}
            priceRange={priceRange}
            onSizeChange={(size) => {
              setSelectedSize(size);
              setIsFilterOpen(false);
            }}
            onStyleChange={(style) => {
              setSelectedStyle(style);
              setIsFilterOpen(false);
            }}
            onPriceRangeChange={setPriceRange}
            isCustomizable={isCustomizable}
            onCustomizableChange={(value) => {
              setIsCustomizable(value);
              setIsFilterOpen(false);
            }}
          />
        </div>

        {/* Main content */}
        <div className="flex-grow">
          {/* Desktop Search */}
          <div className="hidden md:block mb-8">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>

          {/* Overlay for mobile filters */}
          {isFilterOpen && (
            <div 
              className="fixed inset-0 bg-black/20 z-30 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                Keine Produkte gefunden. Bitte passen Sie Ihre Filtereinstellungen an.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};