// components/ProductCard.jsx
import React, { useState } from 'react';
import { Heart, Eye } from 'lucide-react';

const ProductCard = ({
    product,
    showBrand = true,
    showCategory = true,
    showRating = false,
    showDiscountBadge = false,
    showViewMore = false,
    showWishlist = true,
}) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };

    const discountPercent = product.originalPrice
        ? Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)
        : 0;

    return (
        <a
            href={product.link || '#'}
            className="group flex-shrink-0 w-full block"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-primary-light/20 mb-2 rounded-2xl border border-white/10">
                <div className="aspect-[3/4] overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>

                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Discount Badge */}
                {showDiscountBadge && product.originalPrice && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                        -{discountPercent}%
                    </span>
                )}

                {/* Wishlist Button */}
                {showWishlist && (
                    <button
                        onClick={toggleWishlist}
                        className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110
              ${isWishlisted
                                ? 'bg-gold text-primary-dark'
                                : 'bg-white/90 text-gray-600 hover:bg-gold hover:text-primary-dark'
                            }`}
                    >
                        <Heart
                            size={16}
                            className={isWishlisted ? 'fill-primary-dark' : ''}
                        />
                    </button>
                )}

                {/* View More Button */}
                {showViewMore && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-10">
                        <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary-dark text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-gold transition-colors whitespace-nowrap">
                            <Eye size={14} />
                            View More
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info - LARGER FONTS */}
            <div className="px-0.5">
                {/* Brand | Category */}
                {/* {showBrand && (
          <p className="text-[11px] md:text-xs text-gold-light/70 mb-0.5 truncate font-medium">
            {product.brand}{showCategory && product.category ? ` | ${product.category}` : ''}
          </p>
        )} */}

                {/* Product Name - INCREASED */}
                <h3 className="text-sm md:text-base font-semibold text-white mb-0 line-clamp-1 group-hover:text-gold-light transition-colors">
                    {product.name}
                </h3>

                {/* Rating */}
                {/* {showRating && (
          <div className="flex items-center gap-1 mb-1">
            <span className="text-gold text-xs">★</span>
            <span className="text-white/60 text-xs">{product.rating || '4.5'}</span>
            <span className="text-white/30 text-xs">({product.reviews || '0'})</span>
          </div>
        )} */}

                {/* Price - INCREASED */}
                <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-bold text-gold-light">
                        {product.price}
                    </span>
                    {product.originalPrice && (
                        <span className="text-xs md:text-sm text-white/40 line-through">
                            {product.originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </a>
    );
};

export default ProductCard;