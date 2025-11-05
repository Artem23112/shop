import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@utils/constants/api-endpoints';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  endpoints: (builder) => ({
    auth: builder.mutation<Tokens, UserCred>({
      query: (cred) => ({
        url: 'auth/login',
        method: 'POST',
        body: cred,
      }),
    }),
    createUser: builder.mutation<Tokens, UserInfo>({
      query: (info) => ({
        url: 'users',
        method: 'POST',
        body: info,
      }),
    }),
  }),
});

export const { useAuthMutation, useCreateUserMutation } = authApi;

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface UserInfo {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface UserCred {
  email: string;
  password: string;
}
