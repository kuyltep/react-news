import { SearchPropsI } from "./types/SearchPropsI";
import styles from "./styles.module.css";
function Search({ keywords, setKeywords }: SearchPropsI) {
  return (
    <div className={styles.search}>
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
