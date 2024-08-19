import { formatTimeAgo } from "../../../helpers/formatTimeAgo";
import { NewsBannerPropsI } from "./types/NewsBannerPropsI";
import classes from "./styles.module.css";
import Image from "../../Image/Image";
import withSkeleton from "../../../helpers/hocs/withSceleton";
function NewsBanner(news: NewsBannerPropsI) {
  const { author, image, published, title } = news;
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
const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
