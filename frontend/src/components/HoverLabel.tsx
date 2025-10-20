
import { useHoveredLabel } from "hooks/useHoveredLabel"

export default function HoverLabel() {
    const { text, className } = useHoveredLabel();
  return (
    <div className="absolute top-0 left-0 bg-gray-50 rounded-lg border-[1px] shadow p-1 m-1">
      {text ? (
        <p className={className}>
          Viendo: {text}
        </p>
      ) : (
        <p className={className}>
          Desliza sobre una parte
        </p>
      )}
    </div>
  )
}