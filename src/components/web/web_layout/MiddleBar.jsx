// // components/MiddleBar.jsx
// import React, { useState } from 'react';
// import { ShoppingCart, User, Heart, Search, Crown, X, ChevronRight, Phone, Truck } from 'lucide-react';
// import SearchBar from './SearchBar';
// import logo from '../../assets/logo/logo.png';


// const MiddleBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [imgError, setImgError] = useState(false);

//   const cartCount = 3;
//   const wishlistCount = 5;

//   const logoImageUrl = logo;

//   const handleSearch = (query) => {
//     console.log('Searching for:', query);
//   };

//   return (
//     <nav className="bg-primary sticky top-0 z-40 shadow-lg">
//       {/* Gold line bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
//       <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        
//         <div className="flex items-center h-14 md:h-16 lg:h-16 gap-2 sm:gap-3">
          
//           {/* Logo */}
//           <a href="/" className="flex items-center gap-2 flex-shrink-0">
//             {!imgError ? (
//               <img 
//                 src={logoImageUrl} 
//                 alt="NOOR Logo" 
//                 className="h-16 sm:h-18 md:h-22 lg:h-24 w-auto object-contain"
//                 onError={() => setImgError(true)}
//               />
//             ) : (
//               <div className="flex items-center gap-2">
//                 <div className="relative">
//                   <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Crown size={18} className="text-primary-dark" />
//                   </div>
//                 </div>
//                 <div>
//                   <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight tracking-tight whitespace-nowrap">
//                     NOOR
//                   </span>
//                   <p className="text-[8px] text-gold-light font-semibold uppercase tracking-[2px] leading-tight">Premium Store</p>
//                 </div>
//               </div>
//             )}
//           </a>

//           {/* Search Bar */}
//           <div className="hidden md:block flex-1 min-w-0 max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto">
//             <SearchBar 
//               searchQuery={searchQuery} 
//               setSearchQuery={setSearchQuery}
//               variant="desktop"
//               onSearch={handleSearch}
//             />
//           </div>

//           {/* Right Icons */}
//           <div className="flex items-center gap-0.5 sm:gap-1 ml-auto flex-shrink-0">
            
//             <button 
//               onClick={() => setIsSearchOpen(!isSearchOpen)} 
//               className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             {/* Wishlist */}
//             <button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" aria-label="Wishlist">
//               <Heart size={20} strokeWidth={1.5} className="group-hover:text-gold-light transition-colors" />
//               {wishlistCount > 0 && (
//                 <span className="absolute top-0.5 right-0.5 bg-gold text-primary-dark text-[9px] min-w-[16px] h-[16px] rounded-full flex items-center justify-center font-bold leading-none shadow-lg">
//                   {wishlistCount}
//                 </span>
//               )}
//             </button>

//             {/* User */}
//             <button className="hidden sm:flex p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" aria-label="Account">
//               <User size={20} strokeWidth={1.5} className="group-hover:text-gold-light transition-colors" />
//             </button>

//             {/* Cart */}
//             <button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" aria-label="Cart">
//               <ShoppingCart size={20} strokeWidth={1.5} className="group-hover:text-gold-light transition-colors" />
//               {cartCount > 0 && (
//                 <span className="absolute top-0.5 right-0.5 bg-gold text-primary-dark text-[9px] min-w-[16px] h-[16px] rounded-full flex items-center justify-center font-bold leading-none shadow-lg">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         {isSearchOpen && (
//           <div className="md:hidden pb-3 animate-slideDown">
//             <SearchBar 
//               searchQuery={searchQuery} 
//               setSearchQuery={setSearchQuery}
//               variant="mobile"
//               onSearch={handleSearch}
//             />
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default MiddleBar;




// components/MiddleBar.jsx
import React, { useState } from 'react';
import { ShoppingCart, User, Heart, Search, Crown } from 'lucide-react';
import SearchBar from './SearchBar';
import logo from '../../../assets/logo/logo.png';

const MiddleBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cartCount = 3;
  const wishlistCount = 5;

  const logoImageUrl = logo;

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <nav className="bg-primary sticky top-0 z-40 shadow-lg">
      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      {/* Increased height for logo */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        
        <div className="flex items-center h-16 sm:h-18 md:h-20 lg:h-24 gap-2 sm:gap-3">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0 py-1">
            {!imgError ? (
              <img 
                src={logoImageUrl} 
                alt="NOOR Logo" 
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain max-h-full"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Crown size={20} className="text-primary-dark" />
                  </div>
                </div>
                <div>
                  <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight tracking-tight whitespace-nowrap">
                    NOOR
                  </span>
                  <p className="text-[8px] text-gold-light font-semibold uppercase tracking-[2px] leading-tight">Premium Store</p>
                </div>
              </div>
            )}
          </a>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 min-w-0 max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              variant="desktop"
              onSearch={handleSearch}
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-0.5 sm:gap-1 ml-auto flex-shrink-0">
            
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" aria-label="Wishlist">
              <Heart size={20} strokeWidth={1.5} className="group-hover:text-gold-light transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-gold text-primary-dark text-[9px] min-w-[16px] h-[16px] rounded-full flex items-center justify-center font-bold leading-none shadow-lg">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* User */}
            <button className="hidden sm:flex p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" aria-label="Account">
              <User size={20} strokeWidth={1.5} className="group-hover:text-gold-light transition-colors" />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" aria-label="Cart">
              <ShoppingCart size={20} strokeWidth={1.5} className="group-hover:text-gold-light transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-gold text-primary-dark text-[9px] min-w-[16px] h-[16px] rounded-full flex items-center justify-center font-bold leading-none shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-3 animate-slideDown">
            <SearchBar 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery}
              variant="mobile"
              onSearch={handleSearch}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default MiddleBar;