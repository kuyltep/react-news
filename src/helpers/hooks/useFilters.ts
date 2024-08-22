import { useState } from "react";
export interface FiltersI {
  endpoint: string;
  keywords: string;
  category: string;
  page_number: number;
  page_size: number;
}
export const useFilters = (initalFilters: FiltersI) => {
  const [filters, setFilters] = useState<FiltersI>(initalFilters);

  const changeFilter = (key: string, value: string | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter };
};
