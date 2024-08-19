import { CategoriesResponseI } from "../../../api/types/NewsI";

export default interface CategoriesFetchI {
  data: CategoriesResponseI | object;
  isLoading: boolean;
  error: unknown;
}
