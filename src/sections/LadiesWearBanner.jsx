// components/LadiesWearBanner.jsx
import React from 'react';
import { ArrowRight, Crown, Star } from 'lucide-react';
import { ladiesWearProducts } from '../data/ladiesBannerData';

const LadiesWearBanner = () => {
  return (
    <section className="bg-primary py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      
      {/* Header - Top Center */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 text-center mb-10 md:mb-14 relative z-10">
        <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/30">
          <Crown size={14} className="text-gold" />
          Curated For You
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Top Picks for You
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
          We've handpicked the styles we know you'll love. Explore what's trending now.
        </p>
      </div>

      {/* Cards Container - No Gap, No Radius */}
      <div className="flex flex-col md:flex-row gap-0 relative z-10">
        
        {ladiesWearProducts.map((product, index) => (
          <a
            key={product.id}
            href={product.link}
            className={`group relative overflow-hidden border-r border-white/10 last:border-r-0
              ${product.size === 'small' 
                ? 'w-full md:w-[25%]' 
                : 'w-full md:w-[37.5%]'
              }
            `}
          >
            {/* Image Container */}
            <div className="h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Green to Gold Gradient Overlay */}
              <div className="absolute inset-0"></div>
              
              {/* Gold shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-8">
                {/* Category Badge - Gold */}
                <span className="inline-block bg-gold text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full mb-3 shadow-lg">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">
                  {product.name}
                </h3>

                {/* Price & Shop Now */}
                <div className="flex items-center justify-between">
                  <span className="text-gold-light text-lg md:text-xl font-bold">
                    {product.price}
                  </span>
                  <span className="flex items-center gap-1.5 text-gold-light text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    Shop Now
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}

      </div>
    </section>
  );
};

export default LadiesWearBanner;