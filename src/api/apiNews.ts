import axios from "axios";
import { CategoriesResponseI, ResponseI } from "./types/NewsI";
import { ApiParamsI } from "./types/ApiParamsI";

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  endpoint,
  page_number = 1,
  page_size = 10,
  category = "",
  keywords = "",
}: ApiParamsI): Promise<ResponseI | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
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
  }
};

export const getCategories = async (): Promise<
  CategoriesResponseI | undefined
> => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLatestNews = async (): Promise<ResponseI | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
