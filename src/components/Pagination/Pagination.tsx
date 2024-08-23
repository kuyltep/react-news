import { PaginationPropsI } from "./types/PaginationPropsI";
import styles from "./styles.module.css";
import { useTheme } from "../../context/theme";
import { useDispatch } from "react-redux";
import { setFilters } from "../../store/slices/newsSlice";
function Pagination({ activePage, totalPages }: PaginationPropsI) {
  const dispatch = useDispatch();
  const checkIsAvailablePage = (action: number) => {
    const resultPage = activePage + action;
    if (resultPage <= totalPages && resultPage >= 1) {
      dispatch(setFilters({ key: "page_number", value: resultPage }));
    }
  };

  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        className={styles.button}
        onClick={() => checkIsAvailablePage(-1)}
        disabled={activePage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.pages}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              disabled={index + 1 === activePage}
              className={
                index + 1 === activePage ? styles.active : styles.default
              }
              onClick={() =>
                dispatch(setFilters({ key: "page_number", value: index + 1 }))
              }
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.button}
        onClick={() => checkIsAvailablePage(1)}
        disabled={activePage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
