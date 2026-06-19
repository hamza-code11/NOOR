// components/BagsCategoryCards.jsx
import React from 'react';

import img1 from '../../../assets/bags/05-removebg-preview.png';
import img2 from '../../../assets/bags/06-removebg-preview.png';
import img3 from '../../../assets/bags/07-removebg-preview.png';
import img4 from '../../../assets/bags/08-removebg-preview.png';
import img5 from '../../../assets/bags/09-removebg-preview.png';
import img6 from '../../../assets/bags/10-removebg-preview.png';
import img7 from '../../../assets/bags/11-removebg-preview.png';
import img8 from '../../../assets/bags/12-removebg-preview.png';

const categories = [
  {
    id: 1,
    name: 'Handbags',
    image: img1 || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop',
    link: '/bags/handbags',
  },
  {
    id: 2,
    name: 'Clutches',
    image: img2 || 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=300&h=300&fit=crop',
    link: '/bags/clutches',
  },
  {
    id: 3,
    name: 'Tote Bags',
    image: img3 || 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop',
    link: '/bags/tote-bags',
  },
  {
    id: 4,
    name: 'Sling Bags',
    image: img4 || 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=300&fit=crop',
    link: '/bags/sling-bags',
  },
  {
    id: 5,
    name: 'Backpacks',
    image: img5 || 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=300&h=300&fit=crop',
    link: '/bags/backpacks',
  },
  {
    id: 6,
    name: 'Wallets',
    image: img6 || 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop',
    link: '/bags/wallets',
  },
  {
    id: 7,
    name: 'Crossbody',
    image: img7 || 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop',
    link: '/bags/crossbody',
  },
  {
    id: 8,
    name: 'Shoulder Bags',
    image: img8 || 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=300&h=300&fit=crop',
    link: '/bags/shoulder-bags',
  },
];

const BagsCategoryCards = () => {
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

export default BagsCategoryCards;