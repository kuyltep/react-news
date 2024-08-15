import { useEffect, useState } from "react";
import NewsBanner from "../../components/News/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import { NewsI } from "../../api/types/NewsI";
import NewsList from "../../components/News/NewsList/NewsList";

function Main() {
  const [news, setNews] = useState<NewsI[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews("latest-news");
        if (response && response.news.length) {
          setNews(response.news);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div>
      {news.length > 0 ? (
        <NewsBanner
          author={news[0].author}
          image={news[0].image}
          published={news[0].published}
          title={news[0].title}
        />
      ) : null}
      {<NewsList news={news} />}
    </div>
  );
}

export default Main;
