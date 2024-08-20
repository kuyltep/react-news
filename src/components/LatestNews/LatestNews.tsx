import useFetch from "../../helpers/hooks/useFetch";
import BannersListWithSkeleton from "../BannersList/BannersList";
import { getLatestNews } from "../../api/apiNews";

function LatestNews() {
  const { data, isLoading } = useFetch(getLatestNews);
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
