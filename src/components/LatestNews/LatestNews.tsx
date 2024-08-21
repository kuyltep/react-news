import useFetch from "../../helpers/hooks/useFetch";
import BannersListWithSkeleton from "../BannersList/BannersList";
import { getLatestNews } from "../../api/apiNews";
import { ResponseI } from "../../api/types/NewsI";

function LatestNews() {
  const { data, isLoading } = useFetch<ResponseI, null>(getLatestNews);
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
