import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { useState } from "react";
import type { ThreeEvent } from "@react-three/fiber";

export default function ShoeModel() {

  const { scene } = useGLTF("/sneeker.glb");
  const [hovered, setHovered] = useState<string | null>(null);
  const [originalColor, setOriginalColor] = useState<string | null>(null);

  /**
   * Set shadows in the each mesh of the model
   */
  scene.traverse((node) => {
    if ((node as Mesh).isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  })

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    const mesh = e.object as Mesh;
    const material = mesh.material as MeshStandardMaterial;

    if(!originalColor) {
      setOriginalColor(material.color.getStyle());
    }

    material.color.set(0xff0000)
    setHovered(e.object.name)

    document.body.style.cursor = 'pointer'
    console.log(hovered)
  }

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(null)
    document.body.style.cursor = 'default'

    const mesh = e.object as Mesh;
    const material = mesh.material as MeshStandardMaterial;
    if(originalColor) {
      material.color.set(originalColor)
    }
  }
  
  return (
    <primitive 
      object={scene}
      scale={15}
      position={[0, -1, 0]}
      rotation={[0, 1.5, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  )
}
