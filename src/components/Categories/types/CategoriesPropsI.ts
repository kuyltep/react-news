import { Dispatch, SetStateAction } from "react";

export interface CategoriesPropsI {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
}
