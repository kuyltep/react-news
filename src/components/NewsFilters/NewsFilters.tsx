import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { NewsFiltersI } from "./types/NewsFiltersI";

function NewsFilters({
  filters,
  changeFilter,
  keywords,
  setKeywords,
}: NewsFiltersI) {
  return (
    <div>
      <Categories
        activeCategory={filters.category}
        setActiveCategory={changeFilter}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />
    </div>
  );
}

export default NewsFilters;
