import axios from "axios";
import { CategoriesResponseI, ResponseI } from "./types/NewsI";
import { ApiParamsI } from "./types/ApiParamsI";

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
  params?: Partial<ApiParamsI>
): Promise<ResponseI> => {
  try {
    const { endpoint, page_number, page_size, category, keywords } =
      params || {};
    const response = await axios.get<ResponseI>(`${BASE_URL}${endpoint}`, {
      params: {
        page_number,
        page_size,
        apiKey: API_KEY,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      news: [],
      status: "error",
      page: 1,
    };
  }
};

export const getCategories = async (): Promise<CategoriesResponseI> => {
  try {
    const response = await axios.get<CategoriesResponseI>(
      `${BASE_URL}available/categories`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      description: "",
      categories: [],
    };
  }
};

export const getLatestNews = async (): Promise<ResponseI> => {
  try {
    const response = await axios.get<ResponseI>(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      news: [],
      status: "error",
      page: 1,
    };
  }
};
