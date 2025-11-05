import type { Product } from '@features/products/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  API,
  getFilterString,
  type ProductsFilters,
} from '@utils/constants/api-endpoints';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  tagTypes: ['productApi'],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void | undefined>({
      query: () => API.products(),
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => API.products(id),
    }),
    getProductsByFilter: builder.query<Product[], ProductsFilters>({
      query: (filters) => {
        const filtersString = getFilterString(filters);
        return API.productsFilter(filtersString);
      },
      providesTags: ['productApi'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByFilterQuery,
} = productApi;
