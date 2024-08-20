import LatestNews from "../../components/LatestNews/LatestNews";
import styles from "./styles.module.css";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
function Main() {
  return (
    <div className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </div>
  );
}

export default Main;
