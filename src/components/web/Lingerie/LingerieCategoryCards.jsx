// components/LingerieCategoryCards.jsx
import React from 'react';

import img1 from '../../../assets/lingerie/bras-removebg-preview.png';
import img2 from '../../../assets/lingerie/panti-removebg-preview.png';
import img3 from '../../../assets/lingerie/sets-removebg-preview.png';
import img4 from '../../../assets/lingerie/sleepwear-removebg-preview.png';
import img5 from '../../../assets/lingerie/shapewear-removebg-preview.png';
import img6 from '../../../assets/lingerie/Camisoles-removebg-preview.png';
import img7 from '../../../assets/lingerie/Robes-removebg-preview.png';
import img8 from '../../../assets/lingerie/Plus_Size-removebg-preview.png';

const categories = [
  {
    id: 1,
    name: 'Bras',
    image: img1 || 'https://images.unsplash.com/photo-1581431815566-4a22912ff7b2?w=300&h=300&fit=crop',
    link: '/lingerie/bras',
  },
  {
    id: 2,
    name: 'Panties',
    image: img2 || 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop',
    link: '/lingerie/panties',
  },
  {
    id: 3,
    name: 'Sets',
    image: img3 || 'https://images.unsplash.com/photo-1618335829650-daf86b9363bd?w=300&h=300&fit=crop',
    link: '/lingerie/sets',
  },
  {
    id: 4,
    name: 'Sleepwear',
    image: img4 || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    link: '/lingerie/sleepwear',
  },
  {
    id: 5,
    name: 'Shapewear',
    image: img5 || 'https://images.unsplash.com/photo-1581431815566-4a22912ff7b2?w=300&h=300&fit=crop',
    link: '/lingerie/shapewear',
  },
  {
    id: 6,
    name: 'Camisoles',
    image: img6 || 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop',
    link: '/lingerie/camisoles',
  },
  {
    id: 7,
    name: 'Robes',
    image: img7 || 'https://images.unsplash.com/photo-1618335829650-daf86b9363bd?w=300&h=300&fit=crop',
    link: '/lingerie/robes',
  },
  {
    id: 8,
    name: 'Plus Size',
    image: img8 || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    link: '/lingerie/plus-size',
  },
];

const LingerieCategoryCards = () => {
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

export default LingerieCategoryCards;