import { ShoeContext } from "@context/ShoeContext";
import { useContext } from "react";
import { useNormalize } from "hooks/useNormalize";

/**
 * Hook to get the hovered label text and style
 *  
 * @returns {text: string, className?: string}
 */

interface HoveredLabelData{
  text: string;
  className?: string;
}

export function useHoveredLabel(): HoveredLabelData {
  
  /** Context to communicate with the 3D model*/
  const context = useContext(ShoeContext);
  /** Hook to normalize the text */
  const normalizedText = useNormalize(context?.hoveredMesh || '');
  /** General style for the text */
  const baseText = "font-semibold text-[.7rem]"

  if(context?.hoveredMesh){
    return {
      text: normalizedText,
      className: `${baseText} text-gray-500`
    };
  }

  return {
    text: 'Desliza sobre una parte',
    className: `${baseText} text-gray-500`
  };
}
