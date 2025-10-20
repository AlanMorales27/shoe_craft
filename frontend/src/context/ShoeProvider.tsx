/**
 *  This context is used to change  the shoe colors, materials and other
 *  properties between the floating bar and the 3D model
 */

import { useState } from "react";
import { ShoeContext } from "./ShoeContext";

export const ShoeContextProvider = ({children}: {
  children: React.ReactNode;
}) => {
  /** State to keep track of the color of the model */
  const [color, setColor] = useState<string | null>(null);
  /** State of the hovered mesh */
  const [hoveredMesh, setHoveredMesh] = useState<string | null>(null);
  /** State of the selected mesh */
  const [selectedMesh, setSelectedMesh] = useState<string | null>(null);

  return (
    <ShoeContext.Provider value={{ 
      color, setColor, 
      hoveredMesh, setHoveredMesh, 
      selectedMesh, setSelectedMesh 
    }}>
      {children}
    </ShoeContext.Provider>
  );
};
