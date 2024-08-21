import { useRef } from "react";
import styles from "./styles.module.css";
import React from "react";
import { SliderPropsI } from "./types/SliderPropsI";
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
  return (
    <div className={styles.slider}>
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
