// data/collection/lingerieFeaturedData.js
import img1 from '../../assets/lingerie/01.png';
import img2 from '../../assets/lingerie/02.png';
import img3 from '../../assets/lingerie/03.png';
import img4 from '../../assets/lingerie/04.png';

export const featuredProducts = [
  {
    id: 1,
    image: img1 || 'https://images.unsplash.com/photo-1581431815566-4a22912ff7b2?w=400&h=500&fit=crop',
    name: 'Lace Bralette Set',
    price: '$49.99',
    originalPrice: '$79.99',
    link: '/product/lingerie-1',
  },
  {
    id: 2,
    image: img2 || 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop',
    name: 'Silk Camisole Top',
    price: '$39.99',
    originalPrice: '$59.99',
    link: '/product/lingerie-2',
  },
  {
    id: 3,
    image: img3 || 'https://images.unsplash.com/photo-1618335829650-daf86b9363bd?w=400&h=500&fit=crop',
    name: 'Cotton Comfort Bra',
    price: '$29.99',
    originalPrice: '$49.99',
    link: '/product/lingerie-3',
  },
  {
    id: 4,
    image: img4 || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    name: 'Seamless Hipster Pack',
    price: '$34.99',
    originalPrice: '$54.99',
    link: '/product/lingerie-4',
  },
];