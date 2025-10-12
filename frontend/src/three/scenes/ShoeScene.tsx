import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ShoeModel from "@models/ShoeModel";
import { OrbitControls } from "@react-three/drei";

export default function ShoeScene() {
  return (
    <Canvas>
      <Suspense fallback={null  }>
        <ambientLight intensity={2}/>
        <ShoeModel />
        {/* User controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
