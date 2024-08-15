import { NewsI } from "../../../api/types/NewsI";
import { formatTimeAgo } from "../../../helpers/formatTimeAgo";
import Image from "../../Image/Image";
import styles from "./styles.module.css";
function NewsItem({ author, image, published, title }: NewsI) {
  return (
    <li className={styles["news-item"]}>
      <Image image={image} />
      <div className={styles["news-description"]}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>
          {formatTimeAgo(published)} by {author}
        </p>
      </div>
    </li>
  );
}

export default NewsItem;
