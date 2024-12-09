import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  sortOrder: string;
  onSortChange: (value: string) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ sortOrder, onSortChange }) => {
  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2">
        <ArrowUpDown className="w-5 h-5 text-gray-500" />
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                   text-gray-700 dark:text-gray-200 py-2 px-4 pr-8 rounded-lg leading-tight
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                   cursor-pointer"
        >
          <option value="name">Name</option>
          <option value="priceAsc">Preis: Aufsteigend</option>
          <option value="priceDesc">Preis: Absteigend</option>
        </select>
      </div>
    </div>
  );
};