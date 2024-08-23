import { useState } from "react";
import { TOTAL_PAGES } from "../../constants/constants";
import NewsList from "../News/NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";
import useDebounce from "../../helpers/hooks/useDebounce";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useAppSelector } from "../../store/store";
function NewsByFilters() {
  const [keywords, setKeywords] = useState<string>("");
  const debouncedKeywords = useDebounce(keywords, 1500);

  const filters = useAppSelector((state) => state.news.filters);
  const { data: dataNews, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  return (
    <section className={styles.section}>
      <NewsFilters keywords={keywords} setKeywords={setKeywords} />
      <Pagination activePage={filters.page_number} totalPages={TOTAL_PAGES} />
      <NewsList news={dataNews?.news && dataNews.news} isLoading={isLoading} />
    </section>
  );
}

export default NewsByFilters;
