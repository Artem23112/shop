import { fetchProductById } from '@features/products/helpers/fetch-product-by-id';
import type { Params } from 'react-router-dom';

interface LoaderFunctionArgs<P = Params<string>> {
  params: P;
  request: Request;
  context?: unknown;
}

export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.productId) throw new Error('No product id');

  try {
    const productInfo = await fetchProductById(params.productId);
    return productInfo;
  } catch (e: unknown) {
    if (isEntityNotFoundError(e)) return e;
    else return e as Error;
  }
};

export type ProductLoaderData = Awaited<ReturnType<typeof productLoader>>;
export type EntityNotFoundError = {
  status: 400;
  data: {
    path: string;
    timestamp: string;
    name: 'EntityNotFoundError';
    message: string;
  };
};

export function isEntityNotFoundError(
  error: unknown
): error is EntityNotFoundError {
  if (typeof error !== 'object' || error === null) return false;

  const e = error as Partial<EntityNotFoundError>;

  return (
    e.data?.name === 'EntityNotFoundError' &&
    typeof e.data.path === 'string' &&
    typeof e.data.timestamp === 'string' &&
    typeof e.data.message === 'string'
  );
}
