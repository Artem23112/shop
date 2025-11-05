import { fetchProductById } from '@features/products/helpers/fetch-product-by-id';
import { ROUTES } from '@utils/constants/routes';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const routesMap: { [key: string]: string } = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.CATALOG()]: 'Catalog',
  [ROUTES.CART]: 'YourCart',
  [ROUTES.WISHLIST]: 'Your Wishlist',
};

export const usePageTitle = () => {
  const { pathname } = useLocation();
  const { productId } = useParams();

  useEffect(() => {
    let ignoreFlag = false;
    const defaultTitle = createTitleString(routesMap[pathname]);

    if (defaultTitle) document.title = defaultTitle;

    if (productId) {
      fetchProductById(productId).then(({ title }) => {
        if (ignoreFlag) return;

        document.title = createTitleString(title);
      });
    }
    return () => {
      ignoreFlag = true;
    };
  }, [pathname, productId]);
};

function createTitleString(name: string = ''): string {
  return name ? `ShopHub | ${name}` : `ShopHub`;
}
