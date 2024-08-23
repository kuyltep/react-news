import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoriesResponseI, ResponseI } from "../../api/types/NewsI";
import { FiltersI } from "../../helpers/hooks/useFilters";

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<ResponseI, FiltersI>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page_number, page_size, category, keywords } = params || {};
        return {
          url: "search",
          params: {
            page_number,
            page_size,
            apiKey: API_KEY,
            category,
            keywords,
          },
        };
      },
    }),
    getCategories: builder.query<CategoriesResponseI, null>({
      query: () => ({
        url: "available/categories",
        params: {
          apiKey: API_KEY,
        },
      }),
    }),
    getLatestNews: builder.query<ResponseI, null>({
      query: () => ({
        url: "latest-news",
        params: {
          apiKey: API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetNewsQuery, useGetCategoriesQuery, useGetLatestNewsQuery } =
  newsApi;
