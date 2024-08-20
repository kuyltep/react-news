import { Dispatch, SetStateAction } from "react";
import FiltersI from "../../../helpers/hooks/types/filtersI";
import { ResponseI } from "../../../api/types/NewsI";

export interface NewsByFiltersI {
  filters: FiltersI;
  changeFilter: (key: string, value: string | number) => void;
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
  dataNews: ResponseI | null;
  isLoading: boolean;
}
