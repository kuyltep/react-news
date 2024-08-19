export interface PaginationPropsI {
  activePage: number;
  setActivePage: (key: string, value: string | number) => void;
  totalPages: number;
}
