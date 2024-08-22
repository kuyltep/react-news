import { Dispatch, SetStateAction } from "react";
import { FiltersI } from "../../../helpers/hooks/useFilters";

export interface NewsFiltersI {
  filters: FiltersI;
  changeFilter: (key: string, value: string | number) => void;
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}
