// data/collection/perfumeBestSellersData.js
import img1 from '../../assets/perfume/01.jfif';
import img2 from '../../assets/perfume/02.jfif';
import img3 from '../../assets/perfume/03.jfif';
import img4 from '../../assets/perfume/04.jfif';

export const bestSellers = [
  {
    id: 1,
    image: img1 || 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    name: 'Dior Sauvage Elixir',
    price: '$165',
    originalPrice: '$219',
    link: '/product/perfume-1',
  },
  {
    id: 2,
    image: img2 || 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop',
    name: 'Chanel Coco Mademoiselle',
    price: '$189',
    originalPrice: '$249',
    link: '/product/perfume-2',
  },
  {
    id: 3,
    image: img3 || 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop',
    name: 'Tom Ford Black Orchid',
    price: '$145',
    originalPrice: '$199',
    link: '/product/perfume-3',
  },
  {
    id: 4,
    image: img4 || 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop',
    name: 'Gucci Bloom Acqua',
    price: '$129',
    originalPrice: '$179',
    link: '/product/perfume-4',
  },
];