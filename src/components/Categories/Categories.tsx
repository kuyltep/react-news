import styles from "./styles.module.css";
import { ForwardedRef, forwardRef } from "react";
import { useTheme } from "../../context/theme";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store/store";
import { setFilters } from "../../store/slices/newsSlice";
import { CategoriesPropsI } from "./types/CategoriesPropsI";

const Categories = forwardRef(
  ({ activeCategory }: CategoriesPropsI, ref: ForwardedRef<HTMLDivElement>) => {
    const { data: dataCategories } = useGetCategoriesQuery(null);
    const dispatch = useAppDispatch();
    const { isDark } = useTheme();
    return dataCategories && dataCategories?.categories ? (
      <div
        ref={ref}
        className={`${styles.categories} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        <button
          className={!activeCategory.length ? styles.active : styles.category}
          disabled={activeCategory === ""}
          onClick={() => dispatch(setFilters({ key: "category", value: "" }))}
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
                dispatch(
                  setFilters({
                    key: "category",
                    value: category === "All" ? "" : category,
                  })
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
