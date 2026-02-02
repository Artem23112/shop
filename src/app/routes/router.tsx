import { RootRoute } from '@layout/root-route';
import { CartPage } from '@pages/cart-page/cart-page';
import { CatalogPage } from '@pages/catalog/catalog';
import { Home } from '@pages/home/home';
import { NotFound } from '@pages/not-found/not-found';
import {
  isEntityNotFoundError,
  productLoader,
  type ProductLoaderData,
} from '@pages/product-page/product-loader';
import { ProductPage } from '@pages/product-page/product-page';
import { WishlistPage } from '@pages/wishlist-page/wishlist-page';
import { ROUTES } from '@utils/constants/routes';
import {
  createHashRouter,
  Link,
  Outlet,
  type RouteHandle,
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: ROUTES.HOME,
    element: <RootRoute />,
    handle: {
      crumb: () => <Link to={ROUTES.HOME}>Home</Link>,
    } satisfies RouteHandle,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.CATALOG(),
        element: <Outlet />,
        handle: {
          crumb: () => <Link to={ROUTES.CATALOG()}>Catalog</Link>,
        } satisfies RouteHandle,
        children: [
          {
            index: true,
            element: <CatalogPage />,
          },
          {
            path: ':productId',
            element: <ProductPage />,
            loader: productLoader,
            handle: {
              crumb: (data?: ProductLoaderData) => {
                if (!data) return null;
                if (isEntityNotFoundError(data)) return null;
                if (data instanceof Error) return null;

                return (
                  <Link to={ROUTES.CATALOG(data.id.toString())}>
                    {data.title}
                  </Link>
                );
              },
            } satisfies RouteHandle<ProductLoaderData>,
          },
        ],
      },

      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
      {
        path: ROUTES.WISHLIST,
        element: <WishlistPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
