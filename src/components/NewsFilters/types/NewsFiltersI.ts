import { Dispatch, SetStateAction } from "react";
import FiltersI from "../../../helpers/hooks/types/filtersI";

export interface NewsFiltersI {
  filters: FiltersI;
  changeFilter: (key: string, value: string | number) => void;
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}
