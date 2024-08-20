import BannersListWithSkeleton from "../BannersList/BannersList";
import { LatestNewsPropsI } from "./types/LatestNewsPropsI";

function LatestNews({ banners, isLoading }: LatestNewsPropsI) {
  return (
    <section>
      <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
