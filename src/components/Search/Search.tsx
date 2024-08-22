import { SearchPropsI } from "./types/SearchPropsI";
import styles from "./styles.module.css";
import { useTheme } from "../../context/theme";
function Search({ keywords, setKeywords }: SearchPropsI) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        className={styles.input}
        type="text"
        name=""
        id=""
        placeholder="Search..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value?.toString() || "")}
      />
    </div>
  );
}

export default Search;
