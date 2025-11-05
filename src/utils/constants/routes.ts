export const ROUTES = {
  HOME: '/',
  CATALOG: (id: string = '') => (id ? `/catalog/${id}` : '/catalog'),
  CART: '/cart',
  WISHLIST: '/wishlist',
  SEARCH: '/search',
};
