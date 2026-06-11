// components/ShoesSection.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Heart, ChevronRight, Crown, Footprints } from 'lucide-react';
import { shoeBrands, shoesProducts } from '../data/shoesData';

const ShoesSection = () => {
  const [activeBrand, setActiveBrand] = useState('All Shoes');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCards = 4;

  const getFilteredProducts = () => {
    if (activeBrand === 'All Shoes') return shoesProducts;
    const brandLower = activeBrand.toLowerCase();
    return shoesProducts.filter(product => {
      if (product.tag === brandLower) return true;
      if (product.brand.toLowerCase() === brandLower) return true;
      if (product.category.toLowerCase() === brandLower) return true;
      return false;
    });
  };

  const filteredProducts = getFilteredProducts();
  const totalCards = filteredProducts.length;

  const nextSlide = useCallback(() => {
    if (totalCards <= visibleCards) return;
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeBrand]);

  useEffect(() => {
    if (isPaused || totalCards <= visibleCards) return;
    const interval = setInterval(() => nextSlide(), 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalCards]);

  const displayCards = [
    ...filteredProducts.slice(currentIndex),
    ...filteredProducts.slice(0, currentIndex),
    ...filteredProducts.slice(currentIndex),
    ...filteredProducts.slice(0, currentIndex),
  ];

  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-gold/30">
              <Crown size={14} className="text-gold" />
              Step In Style
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
              Shoes Collection
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Step into style with our premium footwear
            </p>
          </div>
          <a 
            href="/shoes"
            className="hidden md:flex items-center gap-2 text-gold-light hover:text-gold font-semibold text-sm transition-colors group border-b-2 border-gold/50 hover:border-gold pb-1"
          >
            View All
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
          
          {/* Left - Brand Names */}
          <div className="md:w-[200px] lg:w-[220px] flex-shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {shoeBrands.map((brand, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBrand(brand)}
                  className={`flex-shrink-0 md:flex-shrink text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between gap-2 group
                    ${activeBrand === brand 
                      ? 'bg-gold text-primary-dark shadow-lg shadow-gold/30 font-bold' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                    }`}
                >
                  <span className="whitespace-nowrap">{brand}</span>
                  <ChevronRight 
                    size={16} 
                    className={`hidden md:block transition-all duration-200
                      ${activeBrand === brand 
                        ? 'text-primary-dark opacity-100' 
                        : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gold'
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Cards */}
          <div className="flex-1 min-w-0">
            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {totalCards > visibleCards && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
                </>
              )}

              <div className="overflow-hidden">
                <div 
                  className="flex gap-3 md:gap-4 transition-transform duration-700 ease-in-out"
                  style={{
                    transform: totalCards > visibleCards 
                      ? `translateX(-${(100 / visibleCards) * currentIndex}%)` 
                      : 'translateX(0)',
                  }}
                >
                  {filteredProducts.length > 0 ? (
                    displayCards.map((product, index) => (
                      <a
                        key={`${product.id}-${index}`}
                        href={product.link}
                        className="group flex-shrink-0 w-[calc((100%-36px)/4)] md:w-[calc((100%-48px)/4)] min-w-[140px] md:min-w-[180px]"
                      >
                        <div className="relative overflow-hidden bg-primary-light/30 mb-2 rounded-2xl border border-white/10">
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Gold overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="absolute top-2 right-2 w-8 h-8 bg-white/90 hover:bg-gold rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 hover:text-primary-dark"
                          >
                            <Heart size={15} />
                          </button>
                        </div>
                        
                        <div className="px-0.5">
                          <p className="text-[9px] md:text-[10px] text-gold-light/70 mb-0.5 truncate">
                            {product.brand} | {product.category}
                          </p>
                          <h3 className="text-[11px] md:text-xs font-semibold text-white mb-1 line-clamp-1 group-hover:text-gold-light transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs md:text-[13px] font-bold text-gold-light">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-[10px] md:text-[11px] text-white/40 line-through">{product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="w-full text-center py-16">
                      <p className="text-lg font-medium text-white/60">No products found</p>
                      <p className="text-sm mt-1 text-white/40">Try selecting a different category</p>
                    </div>
                  )}
                </div>
              </div>

              {totalCards > visibleCards && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  {filteredProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-500 rounded-full
                        ${currentIndex === index 
                          ? 'w-7 h-2 bg-gold shadow-lg shadow-gold/30' 
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center md:hidden">
          <a 
            href="/shoes"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 group"
          >
            View All Shoes
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
};

export default ShoesSection;