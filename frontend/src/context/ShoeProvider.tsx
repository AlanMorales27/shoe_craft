/**
 *  This context is used to change  the shoe colors, materials and other
 *  properties between the floating bar and the 3D model
 */

import { useState } from "react";
import { ShoeContext } from "./ShoeContext";

export const ShoeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [color, setColor] = useState<string | null>(null);

  return (
    <ShoeContext.Provider value={{ color, setColor }}>
      {children}
    </ShoeContext.Provider>
  );
};
