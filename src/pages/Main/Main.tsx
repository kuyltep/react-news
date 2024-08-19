import NewsBanner from "../../components/News/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/News/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import useDebounce from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import useFetch from "../../helpers/hooks/useFetch";
import { useState } from "react";
import { useFilters } from "../../helpers/hooks/useFilters";

function Main() {
  const [keywords, setKeywords] = useState<string>("");
  const debouncedKeywords = useDebounce(keywords, 1500);
  const { filters, changeFilter } = useFilters({
    endpoint: "search",
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "",
    keywords: debouncedKeywords,
  });
  const {
    data: dataNews,
    error,
    isLoading,
  } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });
  return (
    <div>
      <Categories
        activeCategory={filters.category}
        setActiveCategory={changeFilter}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />
      <NewsBanner
        isLoading={isLoading}
        news={dataNews?.news && dataNews.news.length && dataNews.news[0]}
      />
      <NewsList
        news={dataNews?.news && dataNews.news.length && dataNews.news}
        isLoading={isLoading}
      />
      <Pagination
        activePage={filters.page_number}
        totalPages={TOTAL_PAGES}
        setActivePage={changeFilter}
      />
    </div>
  );
}

export default Main;
