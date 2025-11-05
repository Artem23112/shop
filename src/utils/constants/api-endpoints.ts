export const API = {
  baseUrl: 'https://api.escuelajs.co/api/v1/',
  products: (id: string = '') => `products/${id}`,
  productsFilter: (filter: string) => `products${filter}`,
  allProductsByCategory: (id: string = '') => `categories/${id}/products`,
  categories: (id: string = '') => `categories/${id}`,
  carts: (id: string = '') => `cart/${id}`,
  users: (id: string = '') => `users/${id}`,
  auth: `auth/login`,
};

export interface ProductsFilters {
  title?: string;
  price?: number;
  priceMin?: number;
  priceMax?: number;
  categoryId?: number | null;
  categorySlug?: string;
  limit?: number;
  offset?: number;
}

export const getFilterString = ({
  title,
  price,
  priceMin,
  priceMax,
  categoryId,
  categorySlug,
  limit,
  offset,
}: ProductsFilters): string => {
  const filterBase = '?';
  const filters = [];
  if (title) filters.push(`title=${title}`);
  if (price !== undefined) filters.push(`price=${price}`);
  if (priceMin !== undefined) filters.push(`price_min=${priceMin}`);
  if (priceMax !== undefined) filters.push(`price_max=${priceMax}`);
  if (categoryId !== undefined && categoryId)
    filters.push(`categoryId=${categoryId}`);
  if (categorySlug) filters.push(`categorySlug=${categorySlug}`);
  if (limit !== undefined) filters.push(`limit=${limit}`);
  if (offset !== undefined) filters.push(`offset=${offset}`);

  return filterBase + filters.join('&');
};
