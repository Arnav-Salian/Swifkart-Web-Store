import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define base URLs for different environments
const developmentBaseUrl = 'http://localhost:5001/';
const productionBaseUrl = 'https://swifkart-backend.vercel.app/';

// Determine the base URL based on the environment
const baseUrl = window.location.hostname === 'localhost'
  ? developmentBaseUrl
  : productionBaseUrl;

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;
