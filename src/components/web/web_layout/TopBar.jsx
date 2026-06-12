// TopBar.jsx
import React from 'react';
import { Phone, Truck, Tag, ChevronDown, Crown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary-light text-white relative overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-8 md:h-10">
          
          {/* Left Section */}
          <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-xs lg:text-sm">
            <a href="tel:+923001234567" className="flex items-center gap-1.5 hover:text-gold-light transition-colors whitespace-nowrap group">
              <Phone size={14} className="shrink-0 text-gold-light group-hover:text-gold transition-colors" />
              <span className="hidden sm:inline text-[12px]">+92 300 1234567</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-white/80 text-[12px]">
              <Truck size={14} className="shrink-0 text-gold-light" />
              Free Shipping (Orders $50+)
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-white/80 text-[12px]">
              <Tag size={14} className="shrink-0 text-gold-light" />
              Up to 70% Off
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-5 text-[4px] md:text-xs lg:text-sm">
            <a href="#" className="hover:text-gold-light text-[12px] transition-colors hidden sm:inline whitespace-nowrap">
              Track Order
            </a>
            |
            <a href="#" className="hover:text-gold-light text-[12px] transition-colors whitespace-nowrap">
              Help Center
            </a>
            |
            <a href="#" className="hover:text-gold-light text-[12px] transition-colors whitespace-nowrap">
              Sigin / Register
            </a>
            


          </div>
        </div>
      </div>
      
      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    </div>
  );
};

export default TopBar;