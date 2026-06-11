// components/JewelrySection.jsx
import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import { jewelryBanners } from '../data/jewelryData';

const JewelrySection = () => {
  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-36 h-36 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/30">
            <Crown size={14} className="text-gold" />
            Luxury Collection
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Exquisite Jewelry
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Timeless pieces crafted with precision and passion
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {jewelryBanners.map((item) => (
            <a
              key={item.id}
              href={item.link || '#'}
              className="group relative overflow-hidden min-h-[300px] md:min-h-[350px] rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-1 border border-white/10"
            >
              {/* Image - Full Card Cover */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Green to Dark Gradient Overlay */}
              <div className="absolute inset-0"></div>
              
              {/* Gold Shimmer on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content - RIGHT SIDE */}
              <div className="absolute inset-0 flex items-center justify-end p-6 md:p-8 lg:p-10">
                <div className="w-full md:w-1/2 text-right">
                  {/* Subtitle */}
                  <p className="text-gold-light text-xs md:text-sm font-semibold uppercase tracking-[3px] md:tracking-[4px] mb-3 drop-shadow-lg">
                    {item.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-lg">
                    {item.title}
                  </h3>

                  {/* Shop Now Button */}
                  <span className="inline-flex items-center gap-2 text-gold-light border-b-2 border-gold text-sm md:text-base font-semibold hover:text-gold hover:border-gold-light transition-all duration-300 group/btn pb-1">
                    Shop Now
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Decorative Gold Corners */}
              <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-gold/50 group-hover:border-gold rounded-tl-xl transition-all duration-300"></div>
              <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-gold/50 group-hover:border-gold rounded-br-xl transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelrySection;