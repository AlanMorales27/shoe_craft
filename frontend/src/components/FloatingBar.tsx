import { useContext } from "react";
import { ShoeContext } from "@context/ShoeContext";
import { Palette } from "lucide-react";
import { shoeColors } from "@constants/colors";

export default function FloatingBar() {

  /** Context to communicate with the 3D model*/
  const context = useContext(ShoeContext);
  
  /**
   * Handle color change
   * @param color - color to change
   */
  const handleColorChange = (color: string) => {
    context?.setColor(null);
    setTimeout(() => context?.setColor(color), 5);
  };

  return (
    <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[70vw] h-20 bg-gray-50 rounded-lg border-[1px] shadow p-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-[5px] w-[18%] border-r-[1px] border-stone-300 pl-1">
          <Palette className="w-4 h-4"
           strokeWidth={1.5}
           stroke="black"
          />
          <h2 className="font-semibold"> Colores </h2>
        </div>
        <div className="flex items-center gap-1 w-[80%] flex-wrap">
          {shoeColors.map((color, index) => (
            <button className="w-7 h-7 rounded-full shadow-sm border-[1px] border-gray-300 transition-transform hover:scale-[1.05] cursor-pointer"
              key={index}  
              style={{ backgroundColor: color.color }}
              onClick={() => handleColorChange(color.color)}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
