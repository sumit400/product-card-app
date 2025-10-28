// src/components/HomeClient.js
'use client';

import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './components/ProductCard';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './context/ThemeContext';

export default function HomeClient() {
  const { isDarkMode } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

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
          {products.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}
