import { SkeletonPropsI } from "./types/SkeletonPropsI";
import styles from "./styles.module.css";
function Skeleton({ count = 1, type = "banner", direction }: SkeletonPropsI) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={direction === "row" ? styles.rowList : styles.columnList}
        >
          {[...Array(count)].map((_, index) => {
            return (
              <li
                key={index}
                className={type === "banner" ? styles.banner : styles.item}
              ></li>
            );
          })}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
}

export default Skeleton;
