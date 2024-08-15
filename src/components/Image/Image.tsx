import { ImageI } from "./types/ImagePropsI";
import styles from "./styles.module.css";
function Image({ image }: ImageI) {
  return (
    <div className={styles.wrapper}>
      {image ? (
        <img className={styles.image} src={image} alt="News Image" />
      ) : null}
    </div>
  );
}

export default Image;
