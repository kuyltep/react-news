import { NewsI } from "../../../api/types/NewsI";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
function NewsList({ news }: { news: NewsI[] }) {
  return (
    <ul className={styles["news-list"]}>
      {news.map((item) => {
        return (
          <NewsItem
            key={item.id}
            author={item.author}
            category={item.category}
            id={item.id}
            image={item.image}
            language={item.language}
            published={item.published}
            title={item.title}
            url={item.url}
          />
        );
      })}
    </ul>
  );
}

export default NewsList;
