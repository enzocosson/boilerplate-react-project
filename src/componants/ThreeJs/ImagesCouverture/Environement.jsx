/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useEffect } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import {
  EffectComposer,
  Vignette,
  Bloom,
  HueSaturation,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { useAppContext } from "../../../Context";
import { gsap } from "gsap";

function Environement() {
  const { isToggleDarkMode } = useAppContext();

  const ref = useRef();
  useHelper(ref, PointLightHelper, 1);

  return (
    <>
      {/* <ambientLight ref={ambientRef} intensity={5} color={0xffffff} /> */}

      <EffectComposer>
        <Fluid
          fluidColor={"#000000"}
          // fluidColor={"#8297ff"}
          showBackground={false}
          backgroundColor={isToggleDarkMode ? "#f4f4f4" : "#252525"}
          intensity={0.1}
          force={1.1}
          distortion={0.7}
          curl={1.8}
          swirl={4}
          blend={0.5}
          radius={0.3}
          velocityDissipation={0.96}
          densitionDissipation={1}
          pressure={0.8}
        />
      </EffectComposer>
    </>
  );
}

export default Environement;
