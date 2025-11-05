import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@utils/constants/api-endpoints';
import type { RootState } from './../../app/rtk/store';
import type { Category } from './types';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.authSliceReducer.accessToken;

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: ['Categories'],

  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void | undefined>({
      query: () => API.categories(),
    }),
    getCategoryById: builder.query<Category, number>({
      query: (id) => API.categories(String(id)),
    }),
    addProduct: builder.mutation<unknown, unknown>({
      query: (product) => ({
        url: API.products(),
        method: 'POST',
        body: product,
      }),
    }),
    deleteCategoryById: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: API.categories(String(id)),
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useAddProductMutation,
  useDeleteCategoryByIdMutation,
} = categoriesApi;
