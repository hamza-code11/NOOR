// components/PerfumeSection.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Heart, Star, Crown } from 'lucide-react';
import { perfumeProducts } from '../data/perfumeData';

const PerfumeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCards = 5;
  const totalCards = perfumeProducts.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => nextSlide(), 2500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const displayCards = [
    ...perfumeProducts.slice(currentIndex),
    ...perfumeProducts.slice(0, currentIndex),
    ...perfumeProducts.slice(currentIndex),
    ...perfumeProducts.slice(0, currentIndex),
  ];

  return (
    <section className="bg-primary py-12 md:py-16 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/30">
            <Crown size={14} className="text-gold" />
            Luxury Fragrances
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Premium Perfumes
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Discover captivating fragrances from the world's most exclusive brands
          </p>
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
              className="flex gap-3 md:gap-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
              }}
            >
              {displayCards.map((product, index) => (
                <a
                  key={`${product.id}-${index}`}
                  href={product.link}
                  className="group flex-shrink-0 w-[calc((100%-48px)/5)] md:w-[calc((100%-64px)/5)] min-w-[130px] md:min-w-[160px]"
                >
                  {/* Card */}
                  <div className="overflow-hidden rounded-2xl hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-primary-light/30 backdrop-blur-sm">
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Gold Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Wishlist */}
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        className="absolute top-2 right-2 w-8 h-8 bg-white/90 hover:bg-gold rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 hover:text-primary-dark"
                      >
                        <Heart size={15} />
                      </button>

                      {/* Type Badge - Gold */}
                      <span className="absolute top-2 left-2 bg-gold text-primary-dark text-[9px] md:text-[10px] font-bold px-3 py-0.5 rounded-full shadow-lg">
                        {product.type}
                      </span>
                    </div>

                    {/* Product Info */}
                    <div className="p-2.5 md:p-3">
                      {/* Brand */}
                      <p className="text-[9px] md:text-[10px] text-gold-light/70 font-semibold uppercase tracking-wider mb-0.5">
                        {product.brand}
                      </p>

                      {/* Product Name */}
                      <h3 className="text-[11px] md:text-xs font-semibold text-white mb-1.5 line-clamp-1 group-hover:text-gold-light transition-colors">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-1.5">
                        <Star size={11} className="text-gold fill-gold" />
                        <span className="text-white/60 text-[10px] md:text-[11px]">{product.rating}</span>
                        <span className="text-white/40 text-[10px] md:text-[11px]">({product.reviews})</span>
                      </div>

                      {/* Price */}
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
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {perfumeProducts.map((_, index) => (
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

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/perfumes"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:scale-105 group"
          >
            View All Perfumes
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerfumeSection;