import { useMemo } from "react";

/**
   * Hook to normalize a string from the label of the 3D model
   * to be showed in any label. It changes the _ to spaces.
   * 
   * @param text 
   * @returns normalized text
   */

export function useNormalize(text: string) {

  const normalized = useMemo(() => {
    if(!text) return '';
    return text.replace(/_/g, ' ');
  }, [text]);

  return normalized;
}