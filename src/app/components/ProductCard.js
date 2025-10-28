"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductCard = ({ image, title, price, rating, inStock }) => {
  return (
    <motion.div
      className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-label={`Product card for ${title}`}
    >
      <figure>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-56 object-cover"
          priority
        />
        <figcaption className="p-4">
          <h2 className="text-center text-xl font-bold mb-2">{title}</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 text-sm mb-2">
            Price: <span className="font-semibold">${price}</span>
          </p>
          <p className="text-center text-yellow-500 font-medium mb-3">
            ⭐ {rating} / 5
          </p>

          {!inStock ? (
            <span className="block text-center text-red-500 font-semibold mb-3">
              Out of Stock
            </span>
          ) : (
            <span className="block text-center text-green-500 font-semibold mb-3">
              In Stock
            </span>
          )}

          <button
            aria-label="View more about the product"
            className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          >
            View More
          </button>
        </figcaption>
      </figure>
    </motion.div>
  );
};

export default ProductCard;
