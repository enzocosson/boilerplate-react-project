import { useState, useEffect } from "react";
import styles from "./CursorFollow.module.scss";
import { useAppContext } from "../../Context";

const CursorFollow = () => {
  const { isHover, setIsHover } = useAppContext();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    if (window.innerWidth >= 1024) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("a, button");
    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [setIsHover]);

  return (
    <div
      className={`${styles.cursor} ${isHover ? styles.cursorHover : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CursorFollow;
