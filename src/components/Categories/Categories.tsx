import { getCategories } from "../../api/apiNews";
import styles from "./styles.module.css";
import { CategoriesPropsI } from "./types/CategoriesPropsI";
import useFetch from "../../helpers/hooks/useFetch";
import CategoriesFetchI from "./types/CategoriesFetchI";
function Categories({ activeCategory, setActiveCategory }: CategoriesPropsI) {
  const {
    data: dataCategories,
    error,
    isLoading,
  }: CategoriesFetchI = useFetch(getCategories);
  return dataCategories && dataCategories?.categories ? (
    <div className={styles.categories}>
      <button
        className={!activeCategory.length ? styles.active : styles.category}
        disabled={activeCategory === ""}
        onClick={() => setActiveCategory("category", "")}
      >
        All
      </button>
      {dataCategories.categories.map((category, index) => {
        return (
          <button
            className={
              category === activeCategory ||
              (activeCategory === "" && category === "All")
                ? styles.active
                : styles.category
            }
            disabled={category === activeCategory}
            onClick={() =>
              setActiveCategory("category", category === "All" ? "" : category)
            }
            key={index}
          >
            {category[0].toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  ) : null;
}

export default Categories;
