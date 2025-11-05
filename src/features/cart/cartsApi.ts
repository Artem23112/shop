import type { Cart } from '@features/cart/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API } from '@utils/constants/api-endpoints';

export const cartsApi = createApi({
  reducerPath: 'cartsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  tagTypes: ['Carts'],
  endpoints: (builder) => ({
    getAllCarts: builder.query<Cart[], void | undefined>({
      query: () => API.carts(),
    }),
    getCartById: builder.query<Cart, number>({
      query: (id) => API.carts(String(id)),
    }),
    addCart: builder.mutation({
      query: (body) => ({
        url: API.carts(),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Carts'],
    }),
  }),
});
