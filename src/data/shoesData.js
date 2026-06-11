// data/shoesData.js
import sneaker1 from '../assets/shoes/sneakers-1.webp';
import sneaker2 from '../assets/shoes/sneakers-2.webp';
import sneaker3 from '../assets/shoes/sneakers-3.webp';
import sneaker4 from '../assets/shoes/sneakers-4.webp';
import sneaker5 from '../assets/shoes/sneakers-5.webp';
import athlete1 from '../assets/shoes/athletes-1.webp';
import athlete2 from '../assets/shoes/athletes-2.webp';
import athlete3 from '../assets/shoes/athletes-3.webp';
import athlete4 from '../assets/shoes/athletes-4.webp';
import athlete5 from '../assets/shoes/athletes-5.webp';
import athlete6 from '../assets/shoes/athletes-6.webp';
import men1 from '../assets/shoes/men-1.webp';
import men2 from '../assets/shoes/men-2.webp';
import men3 from '../assets/shoes/men-3.webp';
import men4 from '../assets/shoes/men-4.webp';
import men5 from '../assets/shoes/men-5.webp';
import women1 from '../assets/shoes/women-1.webp';
import women2 from '../assets/shoes/women-2.webp';
import women3 from '../assets/shoes/women-3.webp';
import women4 from '../assets/shoes/women-4.webp';
import women5 from '../assets/shoes/women-5.webp';
import kids1 from '../assets/shoes/kid-1.webp';
import kids2 from '../assets/shoes/kid-2.webp';
import kids3 from '../assets/shoes/kid-3.webp';
import kids4 from '../assets/shoes/kid-4.webp';
import kids5 from '../assets/shoes/kid-5.webp';
import adibas1 from '../assets/shoes/abibas-1.webp';
import adibas2 from '../assets/shoes/abibas-2.webp';
import adibas3 from '../assets/shoes/abibas-3.webp';
import adibas4 from '../assets/shoes/abibas-4.webp';
import adibas5 from '../assets/shoes/abibas-5.webp';
import nika1 from '../assets/shoes/nika-1.webp';
import nika2 from '../assets/shoes/nika-2.webp';
import nika3 from '../assets/shoes/nika-3.webp';
import nika4 from '../assets/shoes/nika-4.webp';
import nika5 from '../assets/shoes/nika-5.webp';

export const shoeBrands = [
  'All Shoes',
  'Sneakers',
  'Athletes',
  'Adibas',
  'Nika',
  'Men',
  'Women',
  'Kids',
];

export const shoesProducts = [
  // ============================================================
  // SNEAKERS (5 products)
  // ============================================================
  {
    id: 1, image: sneaker1, brand: 'Nika', category: 'Sneakers',
    name: 'Air Max Classic Sneakers', price: '$129.99', originalPrice: '$179.99',
    tag: 'sneakers', link: '/product/air-max',
  },
  {
    id: 2, image: sneaker2, brand: 'Adibas', category: 'Sneakers',
    name: 'Ultraboost Running Shoes', price: '$149.99', originalPrice: '$199.99',
    tag: 'sneakers', link: '/product/ultraboost',
  },
  {
    id: 3, image: sneaker3, brand: 'Nika', category: 'Sneakers',
    name: 'Blazer Mid Vintage 77', price: '$109.99', originalPrice: '$159.99',
    tag: 'sneakers', link: '/product/blazer-mid',
  },
  {
    id: 4, image: sneaker4, brand: 'Adibas', category: 'Sneakers',
    name: 'Stan Smith White Green', price: '$89.99', originalPrice: '$129.99',
    tag: 'sneakers', link: '/product/stan-smith',
  },
  {
    id: 5, image: sneaker5, brand: 'Nika', category: 'Sneakers',
    name: 'Dunk Low Retro Panda', price: '$119.99', originalPrice: '$169.99',
    tag: 'sneakers', link: '/product/dunk-low',
  },

  // ============================================================
  // ATHLETES (6 products)
  // ============================================================
  {
    id: 6, image: athlete1, brand: 'Nika', category: 'Athletes',
    name: 'Revolution Training Shoes', price: '$89.99', originalPrice: '$129.99',
    tag: 'athletes', link: '/product/revolution',
  },
  {
    id: 7, image: athlete2, brand: 'Adibas', category: 'Athletes',
    name: 'Performance Pro Athlete', price: '$119.99', originalPrice: '$169.99',
    tag: 'athletes', link: '/product/performance-pro',
  },
  {
    id: 8, image: athlete3, brand: 'Nika', category: 'Athletes',
    name: 'Flex Experience RN 11', price: '$79.99', originalPrice: '$119.99',
    tag: 'athletes', link: '/product/flex-experience',
  },
  {
    id: 9, image: athlete4, brand: 'Adibas', category: 'Athletes',
    name: 'Solarboost 5 Running', price: '$139.99', originalPrice: '$189.99',
    tag: 'athletes', link: '/product/solarboost',
  },
  {
    id: 10, image: athlete5, brand: 'Nika', category: 'Athletes',
    name: 'Quest 5 Premium', price: '$69.99', originalPrice: '$99.99',
    tag: 'athletes', link: '/product/quest-5',
  },
  {
    id: 11, image: athlete6, brand: 'Adibas', category: 'Athletes',
    name: 'Duramo SL 2.0', price: '$59.99', originalPrice: '$89.99',
    tag: 'athletes', link: '/product/duramo-sl',
  },

  // ============================================================
  // MEN (5 products)
  // ============================================================
  {
    id: 12, image: men1, brand: 'Nika', category: 'Men',
    name: 'Formal Leather Oxford', price: '$99.99', originalPrice: '$149.99',
    tag: 'men', link: '/product/oxford',
  },
  {
    id: 13, image: men2, brand: 'Adibas', category: 'Men',
    name: 'Casual Loafers Brown', price: '$79.99', originalPrice: '$119.99',
    tag: 'men', link: '/product/loafers',
  },
  {
    id: 14, image: men3, brand: 'Nika', category: 'Men',
    name: 'Court Vision Low', price: '$69.99', originalPrice: '$99.99',
    tag: 'men', link: '/product/court-vision',
  },
  {
    id: 15, image: men4, brand: 'Adibas', category: 'Men',
    name: 'Grand Court Base', price: '$59.99', originalPrice: '$89.99',
    tag: 'men', link: '/product/grand-court',
  },
  {
    id: 16, image: men5, brand: 'Nika', category: 'Men',
    name: 'Air Monarch IV', price: '$84.99', originalPrice: '$124.99',
    tag: 'men', link: '/product/air-monarch',
  },

  // ============================================================
  // WOMEN (5 products)
  // ============================================================
  {
    id: 17, image: women1, brand: 'Nika', category: 'Women',
    name: 'Air Force 1 Shadow', price: '$109.99', originalPrice: '$159.99',
    tag: 'women', link: '/product/af1-shadow',
  },
  {
    id: 18, image: women2, brand: 'Adibas', category: 'Women',
    name: 'Stiletto Heels Black', price: '$69.99', originalPrice: '$99.99',
    tag: 'women', link: '/product/stiletto',
  },
  {
    id: 19, image: women3, brand: 'Nika', category: 'Women',
    name: 'Air Max Bliss', price: '$94.99', originalPrice: '$139.99',
    tag: 'women', link: '/product/air-max-bliss',
  },
  {
    id: 20, image: women4, brand: 'Adibas', category: 'Women',
    name: 'Cloudfoam Pure 2.0', price: '$54.99', originalPrice: '$79.99',
    tag: 'women', link: '/product/cloudfoam',
  },
  {
    id: 21, image: women5, brand: 'Nika', category: 'Women',
    name: 'Waffle Debut', price: '$74.99', originalPrice: '$109.99',
    tag: 'women', link: '/product/waffle-debut',
  },

  // ============================================================
  // KIDS (5 products)
  // ============================================================
  {
    id: 22, image: kids1, brand: 'Nika', category: 'Kids',
    name: 'Kids Sport Running Shoes', price: '$49.99', originalPrice: '$79.99',
    tag: 'kids', link: '/product/kids-sport',
  },
  {
    id: 23, image: kids2, brand: 'Adibas', category: 'Kids',
    name: 'Toddler Light-Up Sneakers', price: '$39.99', originalPrice: '$59.99',
    tag: 'kids', link: '/product/toddler-sneakers',
  },
  {
    id: 24, image: kids3, brand: 'Nika', category: 'Kids',
    name: 'Star Runner 4', price: '$44.99', originalPrice: '$69.99',
    tag: 'kids', link: '/product/star-runner',
  },
  {
    id: 25, image: kids4, brand: 'Adibas', category: 'Kids',
    name: 'Racer TR23 Kids', price: '$34.99', originalPrice: '$54.99',
    tag: 'kids', link: '/product/racer-tr23',
  },
  {
    id: 26, image: kids5, brand: 'Nika', category: 'Kids',
    name: 'Flex Runner 3', price: '$54.99', originalPrice: '$79.99',
    tag: 'kids', link: '/product/flex-runner',
  },

  // ============================================================
  // ADIBAS BRAND (5 products)
  // ============================================================
  {
    id: 27, image: adibas1, brand: 'Adibas', category: 'Running',
    name: 'Adibas Adizero Pro', price: '$159.99', originalPrice: '$229.99',
    tag: 'adibas', link: '/product/adizero-pro',
  },
  {
    id: 28, image: adibas2, brand: 'Adibas', category: 'Originals',
    name: 'Superstar Foundation', price: '$89.99', originalPrice: '$129.99',
    tag: 'adibas', link: '/product/superstar',
  },
  {
    id: 29, image: adibas3, brand: 'Adibas', category: 'Sport',
    name: 'Predator Edge FG', price: '$199.99', originalPrice: '$279.99',
    tag: 'adibas', link: '/product/predator-edge',
  },
  {
    id: 30, image: adibas4, brand: 'Adibas', category: 'Lifestyle',
    name: 'Forum Low Classic', price: '$99.99', originalPrice: '$149.99',
    tag: 'adibas', link: '/product/forum-low',
  },
  {
    id: 31, image: adibas5, brand: 'Adibas', category: 'Training',
    name: 'Dropset Trainer 2', price: '$129.99', originalPrice: '$179.99',
    tag: 'adibas', link: '/product/dropset-trainer',
  },

  // ============================================================
  // NIKA BRAND (5 products)
  // ============================================================
  {
    id: 32, image: nika1, brand: 'Nika', category: 'Running',
    name: 'Pegasus 40 Premium', price: '$139.99', originalPrice: '$199.99',
    tag: 'nika', link: '/product/pegasus-40',
  },
  {
    id: 33, image: nika2, brand: 'Nika', category: 'Basketball',
    name: 'LeBron Witness 8', price: '$109.99', originalPrice: '$159.99',
    tag: 'nika', link: '/product/lebron-witness',
  },
  {
    id: 34, image: nika3, brand: 'Nika', category: 'Lifestyle',
    name: 'Air Max 270 React', price: '$149.99', originalPrice: '$209.99',
    tag: 'nika', link: '/product/air-max-270',
  },
  {
    id: 35, image: nika4, brand: 'Nika', category: 'Training',
    name: 'Metcon 9 Premium', price: '$129.99', originalPrice: '$179.99',
    tag: 'nika', link: '/product/metcon-9',
  },
  {
    id: 36, image: nika5, brand: 'Nika', category: 'Sportswear',
    name: 'Tech Hera Essential', price: '$89.99', originalPrice: '$129.99',
    tag: 'nika', link: '/product/tech-hera',
  },
];