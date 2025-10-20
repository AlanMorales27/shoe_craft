import FloatingBar from '@components/FloatingBar'
import HoverLabel from '@components/HoverLabel'
import { ShoeContextProvider } from '@context/ShoeProvider'
import ShoeScene from '@scenes/ShoeScene'

export default function ShoeViewerPage() {
  return (
    <div className="relative h-screen w-screen">
      <ShoeContextProvider>
        <ShoeScene />
        {/* UI */}
        <HoverLabel />
        <FloatingBar />
      </ShoeContextProvider>
    </div>
  )
}