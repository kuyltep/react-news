import { Dispatch, SetStateAction } from "react";
import { ResponseI } from "../../../api/types/NewsI";
import FiltersI from "../../../helpers/hooks/types/filtersI";

export interface NewsByFiltersI {
  filters: FiltersI;
  changeFilter: (key: string, value: string | number) => void;
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
  dataNews: ResponseI | null;
  isLoading: boolean;
}
