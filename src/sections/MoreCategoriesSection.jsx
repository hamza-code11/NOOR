// components/MoreCategoriesSection.jsx
import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import { moreCategories } from '../data/moreCategoriesData';

const MoreCategoriesSection = () => {
  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-gold/30">
            <Crown size={14} className="text-gold" />
            Explore More
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            More Categories
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Discover our complete range of premium products across all categories
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-2 md:gap-3">
          
          {/* Left - Tall Card (Kids Wear) */}
          <a
            href={moreCategories[3].link}
            className="lg:w-[35%] group relative overflow-hidden h-[250px] sm:h-[300px] lg:h-[424px] rounded-2xl border border-white/10"
          >
            <img
              src={moreCategories[3].image}
              alt={moreCategories[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/78 via-primary/30 to-transparent"></div>
            {/* Gold shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <span className="absolute top-3 left-3 bg-gold text-primary-dark text-[10px] md:text-xs font-bold px-3 py-0.5 rounded-full shadow-lg">
              {moreCategories[3].items}
            </span>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="text-gold-light text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-0.5">
                {moreCategories[3].subtitle}
              </p>
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                {moreCategories[3].title}
              </h3>
              <p className="text-white/70 text-[10px] md:text-xs mb-3 line-clamp-2">
                {moreCategories[3].description}
              </p>
              <span className="inline-flex items-center gap-1.5 bg-gold hover:bg-gold-light text-primary-dark px-5 py-2.5 text-xs font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/40">
                Shop Now
                <ArrowRight size={14} />
              </span>
            </div>
          </a>

          {/* Right - 2 Rows */}
          <div className="lg:w-[65%] flex flex-col gap-2 md:gap-3">
            
            {/* Row 1 - Horizontal (Ladies Bags) */}
            <a
              href={moreCategories[0].link}
              className="group relative overflow-hidden h-[180px] sm:h-[220px] lg:h-[210px] rounded-2xl border border-white/10"
            >
              <img
                src={moreCategories[0].image}
                alt={moreCategories[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/78 via-primary/30 to-primary/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <span className="absolute top-3 left-3 bg-gold text-primary-dark text-[10px] md:text-xs font-bold px-3 py-0.5 rounded-full shadow-lg">
                {moreCategories[0].items}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-gold-light text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-0.5">
                  {moreCategories[0].subtitle}
                </p>
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                  {moreCategories[0].title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-gold-light text-xs md:text-sm font-semibold group-hover:text-gold transition-colors">
                  Shop Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>

            {/* Row 2 - 2 Small Cards (Under Garments + Teens Fashion) */}
            <div className="flex gap-2 md:gap-3">
              {moreCategories.slice(1, 3).map((category) => (
                <a
                  key={category.id}
                  href={category.link}
                  className="group relative overflow-hidden w-1/2 h-[180px] sm:h-[220px] lg:h-[210px] rounded-2xl border border-white/10"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/68 via-primary/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  <span className="absolute top-3 left-3 bg-gold text-primary-dark text-[9px] md:text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-lg">
                    {category.items}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <p className="text-gold-light text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                      {category.subtitle}
                    </p>
                    <h3 className="text-white text-base md:text-lg lg:text-xl font-bold mb-1">
                      {category.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-gold-light text-[10px] md:text-xs font-semibold group-hover:text-gold transition-colors">
                      Shop Now
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/categories"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/40 hover:scale-105 group"
          >
            View All Categories
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreCategoriesSection;