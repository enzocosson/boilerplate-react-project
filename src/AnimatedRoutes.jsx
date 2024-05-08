import { Home } from "./componants/Home/Home";
import { Page } from "./componants/Page/Page";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Transition from "./componants/Transition/Transition";
// import TransitionPhoto from "./componants/TransitionPhoto/TransitionPhoto";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Transition>
              <Home />
            </Transition>
          }
        />
        <Route
          path="/web-works"
          element={
            <Transition>
              <Page />
            </Transition>
          }
        />
        <Route
          path="/photo"
          element={
            <Transition>
              <Page />
            </Transition>
          }
        />

        <Route
          path="/video"
          element={
            <Transition>
              <Page />
            </Transition>
          }
        />

        <Route
          path="/about-me"
          element={
            <Transition>
              <Page />
            </Transition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
