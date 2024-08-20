import { useState } from "react";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsList from "../News/NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";
import useDebounce from "../../helpers/hooks/useDebounce";
import { useFilters } from "../../helpers/hooks/useFilters";
import useFetch from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
function NewsByFilters() {
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
    <section className={styles.section}>
      <NewsFilters
        changeFilter={changeFilter}
        filters={filters}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      <Pagination
        activePage={filters.page_number}
        totalPages={TOTAL_PAGES}
        setActivePage={changeFilter}
      />
      <NewsList
        news={dataNews?.news && dataNews.news.length && dataNews.news}
        isLoading={isLoading}
      />
    </section>
  );
}

export default NewsByFilters;
