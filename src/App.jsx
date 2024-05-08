import { AppContextProvider } from "./Context";
import { Header } from "./componants/Header/Header";
import { Footer } from "./componants/Footer/Footer";

import { Background } from "./componants/Background/Background";
// import CursorFollow from "./componants/CursorFollow/CursorFollow";
import { MenuToggle } from "./componants/MenuToggle/MenuToggle";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import { useEffect } from "react";
import Lenis from "lenis";
import { useAppContext } from "./Context";

import Loader from "./componants/Loader/Loader";

import { useLocation } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { isAlreadyLoaded } = useAppContext();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <AppContextProvider>
      <Router>
        <ScrollToTop />
        {isAlreadyLoaded ? null : <Loader />}
        <div className={`${styles.main}`}>
          {/* <CursorFollow /> */}
          <MenuToggle />
          <Background />
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
