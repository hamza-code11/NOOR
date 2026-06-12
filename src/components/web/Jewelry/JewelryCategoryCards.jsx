// components/JewelryCategoryCards.jsx
import React from 'react';

import img14 from '../../../assets/jewllery/14-removebg-preview.png';
import img15 from '../../../assets/jewllery/15-removebg-preview.png';
import img16 from '../../../assets/jewllery/16-removebg-preview.png';
import img17 from '../../../assets/jewllery/17-removebg-preview.png';
import img18 from '../../../assets/jewllery/18-removebg-preview.png';
import img19 from '../../../assets/jewllery/19-removebg-preview.png';
import img20 from '../../../assets/jewllery/20-removebg-preview.png';
import img21 from '../../../assets/jewllery/21-removebg-preview.png';


const categories = [
  {
    id: 1,
    name: 'Necklaces',
    image: img14,
    link: '/jewelry/necklaces',
  },
  {
    id: 2,
    name: 'Earrings',
    image: img15,
    link: '/jewelry/earrings',
  },
  {
    id: 3,
    name: 'Ring',
    image: img16,
    link: '/jewelry/ring',
  },
  {
    id: 4,
    name: 'Bangles',
    image: img17,
    link: '/jewelry/bangles',
  },
  {
    id: 5,
    name: 'Nose Pin',
    image: img18,
    link: '/jewelry/nose-pin',
  },
  {
    id: 6,
    name: 'Bracelets',
    image: img19,
    link: '/jewelry/bracelets',
  },
    {
    id: 7,
    name: 'Bridal Set',
    image: img20,
    link: '/jewelry/bridal-set',
  },
    {
    id: 8,
    name: 'Bangles',
    image: img21,
    link: '/jewelry/bangles',
  },
];

const JewelryCategoryCards = () => {
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

export default JewelryCategoryCards;