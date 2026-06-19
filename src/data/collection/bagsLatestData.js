// data/collection/bagsLatestData.js
import img1 from '../../assets/bags/01.png';
import img2 from '../../assets/bags/02.png';
import img3 from '../../assets/bags/03.png';
import img4 from '../../assets/bags/04.png';

export const latestBags = [
  {
    id: 1,
    image: img1 || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
    name: 'Luxury Leather Handbag',
    price: '$189.99',
    originalPrice: '$259.99',
    link: '/product/bag-1',
  },
  {
    id: 2,
    image: img2 || 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop',
    name: 'Elegant Evening Clutch',
    price: '$89.99',
    originalPrice: '$129.99',
    link: '/product/bag-2',
  },
  {
    id: 3,
    image: img3 || 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop',
    name: 'Designer Tote Bag',
    price: '$149.99',
    originalPrice: '$219.99',
    link: '/product/bag-3',
  },
  {
    id: 4,
    image: img4 || 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=500&fit=crop',
    name: 'Classic Sling Bag',
    price: '$69.99',
    originalPrice: '$99.99',
    link: '/product/bag-4',
  },
];