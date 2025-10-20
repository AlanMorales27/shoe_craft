import { createContext } from "react";

interface ShoeContextProps {
  color: string | null;
  setColor: (color: string | null) => void;
  hoveredMesh: string | null;
  setHoveredMesh: (hoveredMesh: string | null) => void;
  selectedMesh: string | null;
  setSelectedMesh: (selectedMesh: string | null) => void;
}

export const ShoeContext = createContext<ShoeContextProps | null>(null);