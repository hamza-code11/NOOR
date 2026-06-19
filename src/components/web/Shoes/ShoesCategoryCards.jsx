// components/ShoesCategoryCards.jsx
import React from 'react';

import img1 from '../../../assets/shoes/05-removebg-preview.png';
import img2 from '../../../assets/shoes/06-removebg-preview.png';
import img3 from '../../../assets/shoes/07-removebg-preview.png';
import img4 from '../../../assets/shoes/08-removebg-preview.png';
import img5 from '../../../assets/shoes/09-removebg-preview.png';
import img6 from '../../../assets/shoes/10-removebg-preview.png';
import img7 from '../../../assets/shoes/11-removebg-preview.png';
import img8 from '../../../assets/shoes/12-removebg-preview.png';

const categories = [
  {
    id: 1,
    name: 'Sneakers',
    image: img1 || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    link: '/shoes/sneakers',
  },
  {
    id: 2,
    name: 'Formal',
    image: img2 || 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=300&h=300&fit=crop',
    link: '/shoes/formal',
  },
  {
    id: 3,
    name: 'Casual',
    image: img3 || 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=300&fit=crop',
    link: '/shoes/casual',
  },
  {
    id: 4,
    name: 'Sports',
    image: img4 || 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=300&h=300&fit=crop',
    link: '/shoes/sports',
  },
  {
    id: 5,
    name: 'Heels',
    image: img5 || 'https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=300&h=300&fit=crop',
    link: '/shoes/heels',
  },
  {
    id: 6,
    name: 'Sandals',
    image: img6 || 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop',
    link: '/shoes/sandals',
  },
  {
    id: 7,
    name: 'Boots',
    image: img7 || 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=300&h=300&fit=crop',
    link: '/shoes/boots',
  },
  {
    id: 8,
    name: 'Loafers',
    image: img8 || 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop',
    link: '/shoes/loafers',
  },
];

const ShoesCategoryCards = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group block"
            >
              {/* Image - No Border, No Badge, No Overlay */}
              <div className="overflow-hidden rounded-full aspect-square mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Name - Golden */}
              <h3 className="text-center text-xs sm:text-sm md:text-base font-semibold text-gold-light group-hover:text-gold transition-colors">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoesCategoryCards;