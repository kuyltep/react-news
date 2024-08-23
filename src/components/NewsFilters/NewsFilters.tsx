import { useAppSelector } from "../../store/store";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import { NewsFiltersI } from "./types/NewsFiltersI";

function NewsFilters({ keywords, setKeywords }: NewsFiltersI) {
  const filters = useAppSelector((state) => state.news.filters);
  return (
    <div>
      <Slider>
        <Categories activeCategory={filters.category} />
      </Slider>
      <Search keywords={keywords} setKeywords={setKeywords} />
    </div>
  );
}

export default NewsFilters;
