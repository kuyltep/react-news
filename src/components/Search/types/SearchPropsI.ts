import { Dispatch, SetStateAction } from "react";

export interface SearchPropsI {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}
