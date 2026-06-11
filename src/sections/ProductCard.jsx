// components/ProductCard.jsx
import React from 'react';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <a href={product.link} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          {/* Discount Badge */}
          {product.discount && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full">
              {product.discount}
            </span>
          )}

          {/* Wishlist Button */}
          <button 
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.preventDefault();
              // Add to wishlist logic
            }}
          >
            <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
          </button>

          {/* Quick View - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white text-xs font-medium text-center block">
              Quick View
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 md:p-4">
          {/* Category */}
          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs md:text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-[10px] md:text-xs text-gray-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-lg font-bold text-primary">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs md:text-sm text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;