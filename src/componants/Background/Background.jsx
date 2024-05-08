import styles from "./Background.module.scss";
import { useAppContext } from "../../Context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Background() {
  const { isLoad, isToggleDarkMode } = useAppContext();
  const blur1 = useRef(null);
  const blur2 = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    if (isLoad) {
      gsap.fromTo(
        [blur1.current, blur2.current],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 5,
          delay: 0.3,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        [welcomeRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power4.inOut",
        }
      );
    }
  }, [isLoad]);

  return (
    <div className={`${styles.background}`}>
      <div ref={welcomeRef} className={styles.welcome}>
        <span>W</span>elcome
      </div>
      <img
        className={
          isToggleDarkMode
            ? `${styles.points} ${styles.points__dark}`
            : styles.points
        }
        src="/images/points-white.webp"
        alt=""
      />
      <img
        className={
          isToggleDarkMode
            ? `${styles.overlay} ${styles.overlay__dark}`
            : styles.overlay
        }
        src="/images/overlay-grain.webp"
        alt=""
      />
      <div className={`${styles.container__color__background}`}>
        <img
          ref={blur1}
          className={
            isToggleDarkMode
              ? `${styles.blue__blur} ${styles.blue__blur__dark}`
              : styles.blue__blur
          }
          src="/images/couverture/blue-blur.webp"
          alt=""
        />

        <img
          ref={blur2}
          className={
            isToggleDarkMode
              ? `${styles.purple__blur} ${styles.purple__blur__dark}`
              : styles.purple__blur
          }
          src="/images/couverture/purple-blur.webp"
          alt=""
        />
      </div>
    </div>
  );
}
