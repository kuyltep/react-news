import { NewsI } from "../../../api/types/NewsI";

export interface LatestNewsPropsI {
  banners?: NewsI[] | null;
  isLoading: boolean;
}
