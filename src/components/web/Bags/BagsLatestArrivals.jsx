// components/BagsLatestArrivals.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { latestBags } from '../../../data/collection/bagsLatestData';
import ProductCard from '../ProductCard/ProductCard';

const BagsLatestArrivals = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Latest Arrivals
            </h2>
            <p className="text-white/50 text-sm mt-1">Newest additions to our bags collection</p>
          </div>
          <a href="/bags/latest" className="text-gold-light hover:text-gold text-sm font-semibold transition-colors flex items-center gap-1 group">
            View All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Products Grid - 4 Cards Per Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {latestBags.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              showBrand={false}
              showCategory={false}
              showRating={false}
              showDiscountBadge={false}
              showViewMore={true}
              showWishlist={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BagsLatestArrivals;