// components/MensWearSection.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Heart, Crown } from 'lucide-react';
import { mensWearProducts } from '../data/mensWearData';

const MensWearSection = () => {
  const [wishlist, setWishlist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalCards = mensWearProducts.length;
  const visibleCards = 5;

  const toggleWishlist = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => nextSlide(), 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const displayCards = [
    ...mensWearProducts.slice(currentIndex),
    ...mensWearProducts.slice(0, currentIndex),
    ...mensWearProducts.slice(currentIndex),
    ...mensWearProducts.slice(0, currentIndex),
  ];

  return (
    <section className="bg-primary py-12 md:py-16 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-gold/30">
              <Crown size={14} className="text-gold" />
              Men's Collection
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
              Men's Wear
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Premium fashion for the modern man
            </p>
          </div>

          <a 
            href="/men-collection"
            className="hidden md:flex items-center gap-2 text-gold-light hover:text-gold font-semibold text-sm transition-colors group border-b-2 border-gold/50 hover:border-gold pb-1"
          >
            View All
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scrolling Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

          {/* Cards Track */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-2 md:gap-3 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
              }}
            >
              {displayCards.map((product, index) => (
                <a
                  key={`${product.id}-${index}`}
                  href={product.link}
                  className="group flex-shrink-0 w-[calc((100%-32px)/5)] md:w-[calc((100%-48px)/5)] min-w-[130px] md:min-w-[150px]"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-primary-light/30 mb-2 rounded-2xl border border-white/10">
                    <div className="h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Gold overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(e, product.id)}
                      className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110
                        ${wishlist.includes(product.id)
                          ? 'bg-gold text-primary-dark'
                          : 'bg-white/90 text-gray-600 hover:bg-gold hover:text-primary-dark'
                        }`}
                    >
                      <Heart 
                        size={15} 
                        className={wishlist.includes(product.id) ? 'fill-primary-dark' : ''} 
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="px-0.5">
                    <p className="text-[9px] md:text-[10px] text-gold-light/70 mb-0.5 truncate">
                      {product.brand} | {product.category}
                    </p>
                    <h3 className="text-[11px] md:text-xs font-semibold text-white mb-1 line-clamp-1 group-hover:text-gold-light transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs md:text-[13px] font-bold text-gold-light">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[10px] md:text-[11px] text-white/40 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {mensWearProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full
                  ${currentIndex === index 
                    ? 'w-7 h-2 bg-gold shadow-lg shadow-gold/30' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center md:hidden">
          <a 
            href="/men"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/40 group"
          >
            View All Men's Wear
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MensWearSection;