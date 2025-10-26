import { useGLTF } from "@react-three/drei";
import { Color, Mesh, MeshStandardMaterial, Object3D } from "three";
import { useEffect, useState } from "react";
import type { ThreeEvent } from "@react-three/fiber";
import { useContext } from "react";
import { ShoeContext } from "@context/ShoeContext";

export default function ShoeModel() {
  /** Context to communicate with the floating bar */
  const context = useContext(ShoeContext);

  /** Load the model*/
  const { scene } = useGLTF("/sneeker.glb");

  /** Stores the selected part of the shoe */
  const [selected, setSelected] = useState<string | null>(null);

  /**
   * Use effect to change the color of the model according to the context
   * of the  floating bar
   */
  useEffect(() => {
    scene.traverse((node: Object3D) => {
      if (context?.color != null) {
        const child = node as Mesh;
        if (
          child.isMesh &&
          child.material instanceof MeshStandardMaterial &&
          child.name === selected
        ) {
          const baseColor = new Color(context.color);
          child.material.color.copy(baseColor);
          child.material.needsUpdate = true;
        }
      }
    });
  }, [context?.color]);

  /**
   * Set shadows in the each mesh of the model
   */
  scene.traverse((node: Object3D) => {
    if ((node as Mesh).isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  /**
   * Handle pointer over
   * @param e - event of pointer over
   */
  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    const mesh = e.object as Mesh;
    const material = mesh.material as MeshStandardMaterial;
    const baseColor = material.color.clone();

    material.emissive.copy(baseColor);
    material.emissiveIntensity = 0.1;

    context?.setHoveredMesh(e.object.name);

    document.body.style.cursor = "pointer";
  };

  /**
   * Handle pointer out
   * @param e - event of pointer out
   */
  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    document.body.style.cursor = "default";

    const mesh = e.object as Mesh;
    const material = mesh.material as MeshStandardMaterial;

    material.emissive.set(0x000000);
    material.emissiveIntensity = 0;

    context?.setHoveredMesh(null);
  };

  /**
   * Handle click
   * @param e - event of click
   */
  const handleClick = (e: ThreeEvent<PointerEvent>) => {

    e.stopPropagation();
    setSelected(e.object.name);

    context?.setSelectedMesh(e.object.name);
  };

  return (
    <primitive
      object={scene}
      scale={15}
      position={[0, -0.8, 0]}
      rotation={[0, 1.5, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
}
