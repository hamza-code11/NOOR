// components/PerfumeCategoryCards.jsx
import React from 'react';


import img5 from '../../../assets/perfume/05-removebg-preview.png';
import img6 from '../../../assets/perfume/06-removebg-preview.png';
import img7 from '../../../assets/perfume/07-removebg-preview.png';
import img8 from '../../../assets/perfume/08-removebg-preview.png';

const categories = [
  {
    id: 1,
    name: 'For Him',
    image: img5 || 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
    link: '/perfume/for-him',
  },
  {
    id: 2,
    name: 'For Her',
    image: img6 || 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=300&h=300&fit=crop',
    link: '/perfume/for-her',
  },
  {
    id: 3,
    name: 'Unisex',
    image: img7 || 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop',
    link: '/perfume/unisex',
  },
  {
    id: 4,
    name: 'Gift Sets',
    image: img8 || 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=300&h=300&fit=crop',
    link: '/perfume/gift-sets',
  },
  {
    id: 5,
    name: 'Deodorants',
    image: img5 || 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop',
    link: '/perfume/deodorants',
  },
  {
    id: 6,
    name: 'Body Mists',
    image: img6 || 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop',
    link: '/perfume/body-mists',
  },
  {
    id: 7,
    name: 'Attar',
    image: img7 || 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop',
    link: '/perfume/attar',
  },
  {
    id: 8,
    name: 'Luxury',
    image: img8 || 'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=300&h=300&fit=crop',
    link: '/perfume/luxury',
  },
];

const PerfumeCategoryCards = () => {
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

export default PerfumeCategoryCards;