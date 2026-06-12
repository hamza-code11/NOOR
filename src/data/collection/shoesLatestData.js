// data/collection/shoesLatestData.js
import img1 from '../../assets/shoes/01.png';
import img2 from '../../assets/shoes/02.png';
import img3 from '../../assets/shoes/03.png';
import img4 from '../../assets/shoes/04.png';

export const latestArrivals = [
  {
    id: 1,
    image: img1 || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
    name: 'Air Max Classic Sneakers',
    price: '$129.99',
    originalPrice: '$179.99',
    link: '/product/shoes-1',
  },
  {
    id: 2,
    image: img2 || 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=500&fit=crop',
    name: 'Ultraboost Running Shoes',
    price: '$149.99',
    originalPrice: '$199.99',
    link: '/product/shoes-2',
  },
  {
    id: 3,
    image: img3 || 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=400&h=500&fit=crop',
    name: 'Revolution Training Shoes',
    price: '$89.99',
    originalPrice: '$129.99',
    link: '/product/shoes-3',
  },
  {
    id: 4,
    image: img4 || 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=500&fit=crop',
    name: 'Performance Pro Athlete',
    price: '$119.99',
    originalPrice: '$169.99',
    link: '/product/shoes-4',
  },
];