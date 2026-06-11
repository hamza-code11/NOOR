import img1 from '../assets/ladies-wear/01.png';
import img2 from '../assets/ladies-wear/02.png';
import img3 from '../assets/ladies-wear/03.png';


export const ladiesWearProducts = [
  {
    id: 1,
    image: img1,
    name: 'Elegant Silk Dress',
    category: 'Dresses',
    price: '$89.99',
    link: '/product/silk-dress',
    size: 'large', // left card
  },
  {
    id: 2,
    image: img2,
    name: 'Designer Handbag',
    category: 'Accessories',
    price: '$129.99',
    link: '/product/designer-handbag',
    size: 'small', // center card - smaller width
  },
  {
    id: 3,
    image: img3,
    name: 'Premium Kurti Set',
    category: 'Ethnic Wear',
    price: '$69.99',
    link: '/product/kurti-set',
    size: 'large', // right card
  },
];