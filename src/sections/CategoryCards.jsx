// components/CategoryCards.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Crown } from 'lucide-react';
import { categoryCards } from '../data/categoryCardsData';

const CategoryCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalCards = categoryCards.length;
  const visibleCards = 8;

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
    ...categoryCards.slice(currentIndex),
    ...categoryCards.slice(0, currentIndex),
    ...categoryCards.slice(currentIndex),
    ...categoryCards.slice(0, currentIndex),
  ];

  return (
    <section className="bg-primary py-10 md:py-14 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-gold/30">
            <Crown size={14} className="text-gold" />
            Explore Categories
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Shop by Category
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Explore our wide range of premium categories
          </p>
        </div>

        {/* Scrolling Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

          {/* Cards Track */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 md:gap-5 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleCards) * currentIndex}%)`,
              }}
            >
              {displayCards.map((card, index) => (
                <a
                  key={`${card.id}-${index}`}
                  href={card.link}
                  className="group/card flex-shrink-0 w-[calc((100%-112px)/8)] md:w-[calc((100%-140px)/8)] min-w-[100px] md:min-w-[120px]"
                >
                  {/* Full Rounded Card */}
                  <div className="relative overflow-hidden rounded-full aspect-square bg-primary-light/30 shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 group-hover/card:-translate-y-1 border-[3px] border-white/10 hover:border-gold/60">
                    
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500 rounded-full"
                      loading="lazy"
                    />

                    {/* Gold Overlay on Hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold/60 via-gold/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                    {/* Shop Now Overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 md:pb-3">
                      <span className="text-gold-light font-bold text-[9px] md:text-[11px] border-b-2 border-gold pb-0.5">
                        Shop Now
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-center mt-2.5 text-[11px] md:text-sm font-semibold text-white group-hover/card:text-gold-light transition-colors duration-200 truncate px-0.5">
                    {card.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {categoryCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full
                  ${currentIndex === index 
                    ? 'w-7 h-2.5 bg-gold shadow-lg shadow-gold/30' 
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;