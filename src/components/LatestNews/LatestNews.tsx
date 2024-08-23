import BannersListWithSkeleton from "../BannersList/BannersList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  return (
    <section>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}

export default LatestNews;
