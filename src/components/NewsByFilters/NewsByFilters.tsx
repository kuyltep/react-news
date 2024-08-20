import { TOTAL_PAGES } from "../../constants/constants";
import NewsList from "../News/NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";
import { NewsByFiltersI } from "./types/NewsByFiltersI";
function NewsByFilters({
  filters,
  changeFilter,
  keywords,
  setKeywords,
  dataNews,
  isLoading,
}: NewsByFiltersI) {
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
