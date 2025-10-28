'use client';

import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';

export default function HomeClient({ products }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main
      className="min-h-screen flex flex-col transition-colors"
      style={{
        background: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      
      <div className="max-w-6xl mx-auto p-4 flex justify-end">
        <ThemeToggle />
      </div>

      
      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}
