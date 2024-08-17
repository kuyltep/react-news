import axios from "axios";
import { ResponseI } from "./types/NewsI";
import { ApiParamsI } from "./types/ApiParamsI";

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  endpoint,
  page_number = 1,
  page_size = 10,
}: ApiParamsI): Promise<ResponseI | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        page_number,
        page_size,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
