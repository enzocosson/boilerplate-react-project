import { useEffect, useState } from "react";
import { useAppContext } from "../../Context";
import styles from "./Loader.module.scss";

const Loader = () => {
  const { isLoad, setIsLoad, setIsLoadGsap } = useAppContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 30);

    if (progress === 100) {
      setIsLoad(true);
      setIsLoadGsap(true);
    }

    return () => clearInterval(interval);
  }, [progress, setIsLoad, setIsLoadGsap]);
  return (
    <div
      className={isLoad ? `${styles.loader} ${styles.loaded}` : styles.loader}
    >
      <img
        className={`${styles.texture}`}
        src="/images/overlay-grain.webp"
        alt=""
      />
      <p className={`${styles.loading}`}>
        {progress} <span>%</span>
      </p>

      <div className={`${styles.footer}`}>Copyright © 2024 | Enzo Cosson</div>
    </div>
  );
};

export default Loader;
