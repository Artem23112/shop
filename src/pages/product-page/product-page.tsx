import type { Product } from '@features/products/types';
import { ProductInfoSection } from '@pages/product-page/components/product-info-section';
import {
  isEntityNotFoundError,
  type EntityNotFoundError,
} from '@pages/product-page/product-loader';
import { ProductNotFoundPage } from '@pages/product-page/product-not-found-page';
import { useLoaderData } from 'react-router-dom';

export const ProductPage = () => {
  const productInfo = useLoaderData<Product | EntityNotFoundError | Error>();

  if (productInfo instanceof Error) return <div>Неизвестная ошибка</div>;

  if (isEntityNotFoundError(productInfo)) return <ProductNotFoundPage />;

  return (
    <div>
      <section className="container">
        <ProductInfoSection productInfo={productInfo} />
      </section>
    </div>
  );
};
