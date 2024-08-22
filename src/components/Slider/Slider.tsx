import { useRef } from "react";
import styles from "./styles.module.css";
import React from "react";
import { SliderPropsI } from "./types/SliderPropsI";
import { useTheme } from "../../context/theme";
function Slider({ children, step = 150 }: SliderPropsI) {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= step;
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += step;
    }
  };

  const { isDark } = useTheme();
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button className={styles.arrow} onClick={scrollLeft}>
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button className={styles.arrow} onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
}

export default Slider;
