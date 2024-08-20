import { getNews } from "../../api/apiNews";
import useDebounce from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constants";
import useFetch from "../../helpers/hooks/useFetch";
import { useState } from "react";
import { useFilters } from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import styles from "./styles.module.css";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
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
    <div className={styles.main}>
      <LatestNews
        banners={dataNews?.news && dataNews.news}
        isLoading={isLoading}
      />
      <NewsByFilters
        changeFilter={changeFilter}
        dataNews={dataNews}
        filters={filters}
        isLoading={isLoading}
        keywords={keywords}
        setKeywords={setKeywords}
      />
    </div>
  );
}

export default Main;
