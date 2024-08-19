import { PaginationPropsI } from "./types/PaginationPropsI";
import styles from "./styles.module.css";
function Pagination({
  activePage,
  totalPages,
  setActivePage,
}: PaginationPropsI) {
  const checkIsAvailablePage = (action: number) => {
    const resultPage = activePage + action;
    if (resultPage <= totalPages && resultPage >= 1) {
      setActivePage("page_number", resultPage);
    }
  };

  return (
    <div className={styles.pagination}>
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
              onClick={() => setActivePage("page_number", index + 1)}
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
