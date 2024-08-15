import axios from "axios";
import { ResponseI } from "./types/NewsI";

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
  endpoint: string
): Promise<ResponseI | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
