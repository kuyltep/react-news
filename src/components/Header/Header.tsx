import { formatDate } from "../../helpers/formatDate";
import classes from "./styles.module.css";
import { useTheme } from "../../context/theme";

function Header() {
  const { isDark, toogleTheme } = useTheme();
  return (
    <header
      className={`${classes.header} ${isDark ? classes.dark : classes.light}`}
    >
      <div>
        <h1 className={classes.title}>React News</h1>
        <p className={classes.time}>{formatDate(new Date())}</p>
      </div>
      <div>
        <button className={classes.theme} onClick={() => toogleTheme()}>
          <img
            src={
              isDark
                ? "src/assets/theme/dark.png"
                : "src/assets/theme/light.png"
            }
            alt=""
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
