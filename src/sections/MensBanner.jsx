// components/MensBanner.jsx
import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import { mensBanner } from '../data/mensBannerData';

const MensBanner = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-primary">
      
      {/* Background Image */}
      <img
        src={mensBanner.image}
        alt="Men's Fashion Collection"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        loading="lazy"
      />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0"></div>
      
      {/* Gold Shimmer Overlay */}
      <div className="absolute inset-0"></div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gold/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-40 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/5 rounded-full blur-2xl"></div>

      {/* Content - Left Side */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 w-full">
          <div className="max-w-lg md:max-w-xl">
            
            {/* Category Badge - Gold */}
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 md:mb-5 border border-gold/30 backdrop-blur-sm">
              <Crown size={14} className="text-gold" />
              Trending Now
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-lg">
              {mensBanner.title}
            </h2>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-md">
              {mensBanner.description}
            </p>

            {/* CTA Button - Gold */}
            <a
              href={mensBanner.buttonLink}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/40 hover:scale-105 group"
            >
              {mensBanner.buttonText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Gold Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </section>
  );
};

export default MensBanner;