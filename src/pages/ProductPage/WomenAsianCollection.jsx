// pages/AsianCollection.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ladiesWearProducts } from '../../data/ladiesWearData';
import ProductCard from '../../components/web/ProductCard/ProductCard';

const AsianCollection = () => {
  const navigate = useNavigate();

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

      {/* Products Grid - 5 Cards Per Row */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-6 md:py-8 relative z-10">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {ladiesWearProducts.map((product) => (
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
        {ladiesWearProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl">No products found</p>
            <p className="text-white/30 text-base mt-2">Try again later</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsianCollection;