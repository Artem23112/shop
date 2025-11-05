export const UserListKeys = {
  cart: 'cart',
  wishlist: 'wishlist',
} as const;

export type UserListKeys = (typeof UserListKeys)[keyof typeof UserListKeys];
