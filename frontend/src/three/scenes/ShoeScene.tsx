import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ShoeModel from "@models/ShoeModel";
import { OrbitControls } from "@react-three/drei";

export default function ShoeScene() {
  return (
    <Canvas shadows>
      <Suspense fallback={null  }>
        {/* Lights */}
        <ambientLight 
          intensity={1} 
          color={0xffffff}
          castShadow
        />
        <directionalLight 
          position={[3, 1, 1]} 
          intensity={4}
          castShadow
        />
        <ShoeModel />
        {/* User controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
