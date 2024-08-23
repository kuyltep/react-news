import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersI } from "../../helpers/hooks/useFilters";
import { PAGE_SIZE } from "../../constants/constants";
import { NewsI } from "../../api/types/NewsI";
interface State {
  news: NewsI[];
  filters: FiltersI;
}
const initialState: State = {
  news: [],
  filters: {
    endpoint: "search",
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "",
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setFilters(
      state,
      action: PayloadAction<{
        key: string;
        value: string | number | null | undefined;
      }>
    ) {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setFilters } = newsSlice.actions;

export default newsSlice.reducer;
