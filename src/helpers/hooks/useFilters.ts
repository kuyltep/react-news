import { useState } from "react";
import FiltersI from "./types/filtersI";

export const useFilters = (initalFilters: FiltersI) => {
  const [filters, setFilters] = useState<FiltersI>(initalFilters);

  const changeFilter = (key: string, value: string | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter };
};
