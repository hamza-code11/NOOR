// SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ 
  searchQuery, 
  setSearchQuery, 
  variant = 'desktop',
  onSearch 
}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`
        flex items-center bg-gray-100 rounded-full overflow-hidden
        transition-all duration-300 w-full
        ${variant === 'desktop' 
          ? 'border-2 border-transparent hover:border-gray-300 focus-within:border-primary focus-within:bg-white focus-within:shadow-md h-10' 
          : 'border-2 border-transparent focus-within:border-primary focus-within:bg-white h-9'
        }
      `}>
        {/* Search Icon Left */}
        <button 
          type="submit"
          className="flex-shrink-0 pl-3 text-gray-400 hover:text-primary transition-colors"
          aria-label="Search"
        >
          <Search size={16} strokeWidth={2} />
        </button>

        {/* Input - Full Width */}
        <input 
          type="text" 
          placeholder="Search for products, brands and more..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2.5 py-2 bg-transparent outline-none text-[13.5px] w-full text-gray-700 placeholder-gray-400"
          autoFocus={variant === 'mobile'}
        />
      </div>
    </form>
  );
};

export default SearchBar;