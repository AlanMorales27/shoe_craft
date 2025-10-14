import { createContext } from "react";

interface ShoeContextProps {
  color: string | null;
  setColor: (color: string | null) => void;
}

export const ShoeContext = createContext<ShoeContextProps | null>(null);