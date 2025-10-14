import { useContext } from "react";
import { ShoeContext } from "@context/ShoeContext";

interface CustomMaterial {
  color: string;
}

export default function FloatingBar() {

  /** Context to communicate with the 3D model*/
  const context = useContext(ShoeContext);

  /** Color available for the shoe */
  const shoeColors: CustomMaterial[] = [
    {color: 'blue'},
    {color: 'red'}
  ];

  return (
    <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[70vw] h-20 bg-gray-50 rounded-lg border-[1px] shadow">
      <div className="flex items-center gap-1">
        {shoeColors.map((color, index) => (
          <button className="w-7 h-7 rounded-full shadow-sm"
            key={index}  
            style={{ backgroundColor: color.color }}
            onClick={() => context?.setColor(color.color)}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
