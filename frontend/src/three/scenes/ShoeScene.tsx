import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ShoeModel from "@models/ShoeModel";
import { OrbitControls } from "@react-three/drei";

export default function ShoeScene() {
  return (
    <Canvas>
      <Suspense fallback={<span>Cargando Modelo...</span>}>
        <ambientLight intensity={2}/>
        <ShoeModel />
        {/* User controls */}
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
