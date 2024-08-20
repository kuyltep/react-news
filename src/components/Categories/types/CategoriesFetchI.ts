import { CategoriesResponseI } from "../../../api/types/NewsI";

export default interface CategoriesFetchI {
  data: CategoriesResponseI;
  isLoading: boolean;
  error: unknown;
}
