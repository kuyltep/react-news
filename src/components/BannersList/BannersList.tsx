import withSkeleton from "../../helpers/hocs/withSceleton";
import { LatestNewsPropsI } from "../LatestNews/types/LatestNewsPropsI";
import NewsBanner from "../News/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
export function BannersList({ banners }: LatestNewsPropsI) {
  return (
    <ul className={styles.banners}>
      {banners?.map((item) => {
        return (
          <NewsBanner
            key={item.id}
            author={item.author}
            image={item.image}
            published={item.published}
            title={item.title}
          />
        );
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<LatestNewsPropsI>(
  BannersList,
  "banner",
  10,
  "column"
);

export default BannersListWithSkeleton;
