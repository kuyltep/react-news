import { getCategories } from "../../api/apiNews";
import styles from "./styles.module.css";
import { CategoriesPropsI } from "./types/CategoriesPropsI";
import useFetch from "../../helpers/hooks/useFetch";
import { ForwardedRef, forwardRef } from "react";
import { CategoriesResponseI } from "../../api/types/NewsI";
const Categories = forwardRef(
  (
    { activeCategory, setActiveCategory }: CategoriesPropsI,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { data: dataCategories } = useFetch<CategoriesResponseI, null>(
      getCategories
    );
    return dataCategories && dataCategories?.categories ? (
      <div ref={ref} className={styles.categories}>
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
                setActiveCategory(
                  "category",
                  category === "All" ? "" : category
                )
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
);

export default Categories;
