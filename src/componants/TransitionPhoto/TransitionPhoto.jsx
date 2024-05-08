import PropTypes from "prop-types";
import { motion } from "framer-motion";
import style from "./TransitionPhoto.module.scss";
import { useAppContext } from "../../Context";

const Transition = ({ children }) => {
  const { setIsTransitionFinished } = useAppContext();

  const handleExitComplete = () => {
    setIsTransitionFinished(true);
    setTimeout(() => {
      setIsTransitionFinished(false);
    }, 2000);
  };

  return (
    <>
      {children}

      <motion.div
        className={style.slideIn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [1, 0.01, 0.54, 0.97] }}
        onAnimationComplete={handleExitComplete}
      />

      <motion.div
        className={style.slideOut}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.66, 0.02, 0.14, 0.99] }}
      />
    </>
  );
};

Transition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Transition;
