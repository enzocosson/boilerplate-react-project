/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useEffect } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";
import {
  EffectComposer,
  Vignette,
  Bloom,
  HueSaturation,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { useAppContext } from "../../Context";
import { gsap } from "gsap";

function Environement() {
  const ambientRef = useRef();
  const sunRef = useRef();

  const ref = useRef();
  const refSpotlightHelicopter = useRef();
  useHelper(ref, PointLightHelper, 1);

  return (
    <>
      {/* <ambientLight ref={ambientRef} intensity={5} color={0xffffff} /> */}

      <spotLight
        color={0xffffff}
        position={[0, 3, 7]}
        intensity={600}
        distance={100}
      />

      {/* <EffectComposer disableNormalPass multisampling={false}>
        <Bloom
          luminanceThreshold={0.01}
          radius={0.9}
          levels={1}
          intensity={1}
          mipmapBlur
        />
      </EffectComposer> */}
    </>
  );
}

export default Environement;
