import { useGLTF } from "@react-three/drei";

export default function ShoeModel() {

  const { scene } = useGLTF("/sneeker.glb");
  
  return (
    <primitive 
      object={scene}
      scale={15}
      position={[0, -1, 0]}
      rotation={[0, 1.5, 0]}
    />
  )
}
