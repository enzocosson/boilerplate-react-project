import { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

// import { GUI } from "dat.gui";

function CameraSettings() {
  const cameraRef = useRef();
  const controlsRef = useRef();

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        dampingFactor={0.04}
        minDistance={0}
        maxDistance={1000}
        enableRotate={false}
        // minPolarAngle={Math.PI / 3}
        // maxPolarAngle={Math.PI / 1.8}
        // minAzimuthAngle={-Math.PI / 10}
        // maxAzimuthAngle={Math.PI / 10}
        target={[0, 0, 0]}
        // autoRotate={true}
        // autoRotateSpeed={5}
      />

      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 2]}
        rotation={[0, 0, 0]}
        fov={60}
        near={1}
        far={500}
        shadows
      />
    </>
  );
}

export default CameraSettings;
