import { formatDate } from "../../helpers/formatDate";
import classes from "./styles.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>React News</h1>
      <p className={classes.time}>{formatDate(new Date())}</p>
    </header>
  );
}

export default Header;
