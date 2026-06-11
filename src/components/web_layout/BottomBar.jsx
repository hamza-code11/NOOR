// components/BottomBar.jsx
import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight, Flame, Menu, X, User, Heart, ShoppingCart, Truck, Phone, Crown } from 'lucide-react';
import { bottomBarCategories } from '../../data/bottomBarData';

const BottomBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimeout = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = (categoryName) => {
    if (dropdownTimeout.current) { clearTimeout(dropdownTimeout.current); dropdownTimeout.current = null; }
    setActiveDropdown(categoryName);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => { setActiveDropdown(null); }, 200);
  };

  const handleDropdownEnter = (categoryName) => {
    if (dropdownTimeout.current) { clearTimeout(dropdownTimeout.current); dropdownTimeout.current = null; }
    setActiveDropdown(categoryName);
  };

  const totalCategories = bottomBarCategories.length;
  const isRightAligned = (index) => index >= totalCategories - 3;

  const toggleMobileCategory = (categoryName) => {
    setMobileExpanded(mobileExpanded === categoryName ? null : categoryName);
  };

  const navLinks = [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Teens', href: '/teens' },
  ];

  const cartCount = 3;
  const wishlistCount = 5;

  return (
    <div className="bg-primary-light relative" ref={containerRef}>
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center h-10 md:h-11 lg:h-12">
          
          {/* Hamburger + Nav Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-gold-light transition-colors py-2 pr-3 border-r border-white/20 mr-2"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="hidden sm:inline text-xs md:text-sm">All</span>
            </button>

            <div className="hidden sm:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href}
                  className="text-xs md:text-sm font-medium text-white/80 hover:text-gold-light transition-colors px-2 md:px-3 py-2 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Category Links */}
          <div className="hidden lg:flex items-center gap-1 flex-1 ml-3">
            {bottomBarCategories.map((category, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
                onMouseEnter={() => handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 xl:px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer
                    ${activeDropdown === category.name 
                      ? 'text-gold-light bg-white/10' 
                      : 'text-white/80 hover:text-gold-light hover:bg-white/5'
                    }`}
                >
                  {category.name}
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${activeDropdown === category.name ? 'rotate-180 text-gold' : 'text-white/40'}`} 
                  />
                </button>

                {/* Mega Dropdown */}
                {activeDropdown === category.name && category.sections && (
                  <div 
                    className={`absolute top-full mt-0 bg-white shadow-2xl border border-gray-100 p-5 lg:p-6 z-[9999] rounded-b-2xl
                      ${isRightAligned(index) ? 'right-0' : 'left-0'}
                    `}
                    style={{ minWidth: '600px', maxWidth: '800px', width: 'max-content' }}
                    onMouseEnter={() => handleDropdownEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                      {category.sections.map((section, idx) => (
                        <div key={idx}>
                          <h3 className="text-primary font-semibold text-xs uppercase tracking-wider mb-3 pb-2 border-b-2 border-gold/30">
                            {section.title}
                          </h3>
                          <ul className="space-y-1">
                            {section.items && section.items.map((item, i) => (
                              <li key={i}>
                                <a href="#"
                                  className="text-gray-600 hover:text-primary hover:bg-primary-50 block px-2 py-1.5 rounded-md text-sm transition-all duration-150"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tablet Scroll */}
          <div className="hidden md:flex lg:hidden items-center gap-1 flex-1 overflow-x-auto scrollbar-hide ml-2">
            {bottomBarCategories.map((category, index) => (
              <button key={index}
                onClick={() => toggleMobileCategory(category.name)}
                className="flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-white/80 hover:text-gold-light hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-0.5 flex-1 overflow-x-auto scrollbar-hide">
            {bottomBarCategories.slice(0, 4).map((category, index) => (
              <button key={index}
                className="text-[11px] font-medium text-white/70 hover:text-gold-light px-2 py-2 whitespace-nowrap flex-shrink-0 transition-colors"
              >
                {category.name}
              </button>
            ))}
            {bottomBarCategories.length > 4 && (
              <button onClick={() => setMobileMenuOpen(true)}
                className="text-[11px] font-medium text-gold-light px-2 py-2 whitespace-nowrap flex-shrink-0"
              >
                +{bottomBarCategories.length - 4} More
              </button>
            )}
          </div>

          {/* HOT Badge */}
          <div className="flex items-center gap-2 ml-auto flex-shrink-0">
            <span className="flex items-center gap-1 bg-gold text-primary-dark px-2 lg:px-3 py-1 rounded-full text-[10px] lg:text-xs font-bold animate-pulse cursor-pointer shadow-lg shadow-gold/20">
              <Flame size={12} />
              <span className="hidden sm:inline">HOT</span>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - GREEN THEME */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60]" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <div 
            className="absolute top-0 left-0 h-full w-[300px] sm:w-[350px] bg-primary shadow-2xl overflow-y-auto animate-slideRight"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-primary-dark p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <Crown size={20} className="text-gold" />
                <span className="font-bold text-lg text-white">BIGEEST</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* User */}
            <div className="p-4 border-b border-white/10">
              <a href="/login" className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary-dark" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Hello, Guest</p>
                  <p className="text-xs text-white/60">Login / Register</p>
                </div>
                <ChevronRight size={18} className="ml-auto text-white/40" />
              </a>
            </div>

            {/* Nav */}
            <div className="p-3 border-b border-white/10">
              <p className="text-xs text-gold-light/70 uppercase tracking-wider px-2 mb-2">Shop By</p>
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl font-semibold text-white hover:bg-white/10 hover:text-gold-light transition-colors">
                  <span>{link.name}</span>
                  <ChevronRight size={18} className="text-gold/60" />
                </a>
              ))}
            </div>

            {/* Categories */}
            <div className="p-3">
              <p className="text-xs text-gold-light/70 uppercase tracking-wider px-2 mb-2">All Categories</p>
              {bottomBarCategories.map((category, index) => (
                <div key={index} className="border-b border-white/5 last:border-0">
                  <button onClick={() => toggleMobileCategory(category.name)}
                    className="flex items-center justify-between w-full p-3 rounded-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                    <span className="text-sm">{category.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === category.name ? 'rotate-180 text-gold' : 'text-white/40'}`} />
                  </button>

                  {mobileExpanded === category.name && category.sections && (
                    <div className="pl-4 pb-3 space-y-3">
                      {category.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-semibold text-gold-light uppercase tracking-wider mt-2 mb-1.5">{section.title}</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {section.items && section.items.map((item, i) => (
                              <a key={i} href="#" className="text-xs text-white/60 hover:text-gold-light hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}>
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="p-3 border-t border-white/10 space-y-1">
              <a href="/wishlist" className="flex items-center gap-3 p-3 text-sm text-white/70 hover:bg-white/10 rounded-xl transition-colors">
                <Heart size={18} className="text-gold" />Wishlist {wishlistCount > 0 && <span className="ml-auto bg-gold text-primary-dark text-xs px-2 py-0.5 rounded-full font-bold">{wishlistCount}</span>}
              </a>
              <a href="/cart" className="flex items-center gap-3 p-3 text-sm text-white/70 hover:bg-white/10 rounded-xl transition-colors">
                <ShoppingCart size={18} className="text-gold" />Cart {cartCount > 0 && <span className="ml-auto bg-gold text-primary-dark text-xs px-2 py-0.5 rounded-full font-bold">{cartCount}</span>}
              </a>
              <a href="/track-order" className="flex items-center gap-3 p-3 text-sm text-white/70 hover:bg-white/10 rounded-xl transition-colors">
                <Truck size={18} className="text-gold-light" />Track Order
              </a>
              <a href="/contact" className="flex items-center gap-3 p-3 text-sm text-white/70 hover:bg-white/10 rounded-xl transition-colors">
                <Phone size={18} className="text-gold-light" />Contact Us
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default BottomBar;