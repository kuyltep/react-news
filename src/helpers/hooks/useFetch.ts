import { ErrorInfo, useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";
import { NewsI } from "../../api/types/NewsI";

function useFetch(fetchFunction, params?) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const stringParams = new URLSearchParams(params).toString();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);
  return { isLoading, error, data };
}
export default useFetch;
