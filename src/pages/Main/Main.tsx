import { useEffect, useState } from "react";
import NewsBanner from "../../components/News/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import { NewsI } from "../../api/types/NewsI";
import NewsList from "../../components/News/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

function Main() {
  const [news, setNews] = useState<NewsI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;
  const [pageSize, setPageSize] = useState(10);
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const response = await getNews({
        endpoint: "search",
        page_number: pageNumber,
        page_size: pageSize,
      });
      if (response && response.news.length) {
        setNews(response.news);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [pageNumber]);
  return (
    <div>
      {news.length > 0 && !isLoading ? (
        <NewsBanner
          author={news[0].author}
          image={news[0].image}
          published={news[0].published}
          title={news[0].title}
        />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
      <Pagination
        activePage={pageNumber}
        totalPages={totalPages}
        setActivePage={setPageNumber}
      />
    </div>
  );
}

export default Main;
