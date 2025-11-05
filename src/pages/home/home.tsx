import { Slider } from '@components/slider/slider';
import type { SlideInfo } from '@components/slider/types';
import { CategoriesSection } from '@pages/home/components/sections/categories-section/categories-section';
import { NewProductsSection } from '@pages/home/components/sections/new-products-section/new-products-section';
import { PopularProductsSection } from '@pages/home/components/sections/popular-products-section/popular-products-section';
import { ROUTES } from '@utils/constants/routes';
import clsx from 'clsx';
import s from './home.module.scss';

const slidesInfo: SlideInfo[] = [
  {
    id: 1,
    title: 'Fall Sale',
    description: 'Up to 70% off this season’s best picks',
    to: ROUTES.CATALOG(),
    linkText: 'Shop Now',
  },
  {
    id: 2,
    title: 'New Collection',
    description: 'Modern tech for your home and workspace',
    to: ROUTES.CATALOG(),
    linkText: 'Discover More',
  },
  {
    id: 3,
    title: 'Free Shipping',
    description: 'On all orders over $50',
    to: '/',
    linkText: 'Order Now',
  },
];

export const Home = () => {
  return (
    <main>
      <section>
        <div className={clsx('container', s.sliderWrapper)}>
          <Slider slidesInfo={slidesInfo} />
        </div>
      </section>
      <PopularProductsSection />
      <NewProductsSection />
      <CategoriesSection />
    </main>
  );
};
