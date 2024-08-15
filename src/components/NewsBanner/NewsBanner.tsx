import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { NewsBannerPropsI } from "./types/NewsBannerPropsI";
import classes from "./styles.module.css";
import Image from "../Image/Image";
function NewsBanner({ author, published, title, image }: NewsBannerPropsI) {
  return (
    <div className={classes.banner}>
      <Image image={image} />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.info}>
        {formatTimeAgo(published)} by {author}
      </p>
    </div>
  );
}

export default NewsBanner;
