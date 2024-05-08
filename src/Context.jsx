/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext({
  audioRef: null,
});

export const AppContextProvider = ({ children }) => {
  const [isTest, setIsTest] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [isLoadGsap, setIsLoadGsap] = useState(false);
  const [isAlreadyLoaded, setIsAlreadyLoaded] = useState(false);
  const [isToggleDarkMode, setIsToggleDarkMode] = useState(false);
  const [isTransitionFinished, setIsTransitionFinished] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  if (isLoad) {
    setTimeout(() => {
      setIsAlreadyLoaded(true);
    }, 2000);
  }

  const appProps = {
    isTest,
    setIsTest,
    isBurgerOpen,
    handleBurgerClick,
    isHover,
    setIsHover,
    isLoad,
    setIsLoad,
    isAlreadyLoaded,
    setIsAlreadyLoaded,
    isToggleDarkMode,
    setIsToggleDarkMode,
    isTransitionFinished,
    setIsTransitionFinished,
    isLoadGsap,
    setIsLoadGsap,
  };

  return <AppContext.Provider value={appProps}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => useContext(AppContext);
