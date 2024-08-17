import { Dispatch, SetStateAction } from "react";

export interface PaginationPropsI {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}
