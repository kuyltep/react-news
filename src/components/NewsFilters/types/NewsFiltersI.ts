import { Dispatch, SetStateAction } from "react";

export interface NewsFiltersI {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}
