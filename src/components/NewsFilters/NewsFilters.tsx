import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import { NewsFiltersI } from "./types/NewsFiltersI";

function NewsFilters({
  filters,
  changeFilter,
  keywords,
  setKeywords,
}: NewsFiltersI) {
  return (
    <div>
      <Slider>
        <Categories
          activeCategory={filters.category}
          setActiveCategory={changeFilter}
        />
      </Slider>
      <Search keywords={keywords} setKeywords={setKeywords} />
    </div>
  );
}

export default NewsFilters;
