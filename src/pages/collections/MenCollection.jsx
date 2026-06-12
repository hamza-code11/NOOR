// pages/MenCollection.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Grid3X3, List } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { mensProducts } from '../../data/collection/mensCollection';

const MenCollection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [viewMode, setViewMode] = useState('grid');

  // Update active category when URL changes
  useEffect(() => {
    setActiveCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'western', name: 'Western' },
    { id: 'pakistani', name: 'Pakistani' },
    { id: 'asian', name: 'Asian' },
    { id: 'tired', name: 'Tired' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? mensProducts
    : mensProducts.filter(p => p.category === activeCategory);

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

            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-gold-light tracking-wide">
              Men's Collection
            </h1>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid'
                  ? 'bg-gold/20 text-gold'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list'
                  ? 'bg-gold/20 text-gold'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Subcategories Filter Bar */}
      <div className="bg-primary-light sticky top-14 md:top-16 z-30">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex items-center gap-8 md:gap-10 lg:gap-12 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  navigate(`/men-collection?category=${cat.id}`, { replace: true });
                }}
                className={`relative py-4 text-base md:text-lg font-semibold whitespace-nowrap transition-all duration-200
                  ${activeCategory === cat.id
                    ? 'text-gold-light'
                    : 'text-white/50 hover:text-white/80'
                  }`}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-gold rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-8 md:py-10 relative z-10">

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {filteredProducts.map((product) => (
              <a
                key={product.id}
                href={product.link}
                className="group bg-primary-light/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2 border border-white/10"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <span className="absolute capitalize top-4 left-4 bg-gold text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.category} Collection
                  </span>
                </div>
                <div className="p-5 md:p-6 text-center">
                  <h3 className="text-xl md:text-2xl capitalize font-bold text-white mb-2 group-hover:text-gold-light transition-colors">
                    {product.category}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 font-medium">
                    {product.desc}
                  </p>
                </div>
              </a>
            ))}

            {filteredProducts.length < 4 && (
              <>
                {Array.from({ length: 4 - filteredProducts.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="hidden lg:block"></div>
                ))}
              </>
            )}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <a
                key={product.id}
                href={product.link}
                className="group bg-primary-light/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 flex border border-white/10 w-full"
              >
                <div className="w-36 sm:w-44 md:w-52 flex-shrink-0 overflow-hidden">
                  <div className="aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                  <span className="text-sm font-bold text-gold-light uppercase tracking-wider mb-2">
                    {product.category} Collection
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gold-light transition-colors">
                    {product.category}
                  </h3>
                  <p className="text-base md:text-lg text-white/60 font-medium">
                    {product.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl">No products found</p>
            <p className="text-white/30 text-base mt-2">Try selecting a different category</p>
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

export default MenCollection;