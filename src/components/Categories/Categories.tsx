import { useEffect, useState } from "react";
import { getCategories } from "../../api/apiNews";
import styles from "./styles.module.css";
import { CategoriesPropsI } from "./types/CategoriesPropsI";
function Categories({ activeCategory, setActiveCategory }: CategoriesPropsI) {
  const [categories, setCategories] = useState<string[]>([]);

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getCategories();
      if (fetchedCategories && fetchedCategories.categories.length) {
        setCategories(["All", ...fetchedCategories.categories]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className={styles.categories}>
      {categories.map((category, index) => {
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
              setActiveCategory(category === "All" ? "" : category)
            }
            key={index}
          >
            {category[0].toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
