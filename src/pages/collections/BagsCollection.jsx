// pages/BagsCollection.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BagsBanner from '../../components/web/Bags/BagsBanner';
import BagsCategoryCards from '../../components/web/Bags/BagsCategoryCards';
import BagsLatestArrivals from '../../components/web/Bags/BagsLatestArrivals';

const BagsCollection = () => {
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
              Ladies Bags
            </h1>

            <div className="w-10"></div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <BagsBanner />

      {/* Category Cards - 8 per row */}
      <BagsCategoryCards />

      {/* Latest Arrivals - 4 per row */}
      <BagsLatestArrivals />
    </div>
  );
};

export default BagsCollection;