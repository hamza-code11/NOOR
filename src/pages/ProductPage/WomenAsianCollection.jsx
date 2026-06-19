// pages/AsianCollection.jsx
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ladiesWearProducts } from '../../data/ladiesWearData';
import ProductCard from '../../components/web/ProductCard/ProductCard';

const AsianCollection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'RTW', name: 'RTW' },
    { id: 'Kurti', name: 'Kurti' },
    { id: 'Bottomwear', name: 'Bottomwear' },
    { id: 'Essentials', name: 'Essentials' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? ladiesWearProducts
    : ladiesWearProducts.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-primary">
      
      {/* Header */}
      <header className="bg-primary sticky top-0 z-40 shadow-lg">
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            <button 
              onClick={() => navigate(-1)}
              className="p-2 text-gold-light hover:text-gold transition-colors rounded-lg hover:bg-white/10"
            >
              <ArrowLeft size={22} />
            </button>

            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gold-light tracking-wide">
              Asian Collection
            </h1>

            <div className="w-10"></div>
          </div>
        </div>
      </header>

      {/* Total Products & Filter Bar */}
      <div className="bg-primary-light sticky top-14 md:top-16 z-30">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          
          {/* Total Count */}
          <div className="py-3">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              Total Products / <span className="text-gold-light">{filteredProducts.length}</span>
            </h2>
          </div>
          
          {/* Filter Options */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide pb-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-200
                  ${activeFilter === filter.id
                    ? 'text-gold-light'
                    : 'text-white/50 hover:text-white/80'
                  }`}
              >
                {filter.name}
                {activeFilter === filter.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-gold rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid - 5 Cards Per Row */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-6 md:py-8 relative z-10">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {filteredProducts.map((product) => (
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl">No products found</p>
            <p className="text-white/30 text-base mt-2">Try selecting a different filter</p>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AsianCollection;