
import { useHoveredLabel } from "hooks/useHoveredLabel"

export default function HoverLabel() {
    const { text, className } = useHoveredLabel();
  return (
    <div className="absolute top-0 left-0 bg-gray-50 rounded-lg border-[1px] shadow p-1">
      <p className={className}>
        {text}
      </p>
    </div>
  )
}