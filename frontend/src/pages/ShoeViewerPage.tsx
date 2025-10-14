import FloatingBar from '@components/FloatingBar'
import { ShoeContextProvider } from '@context/ShoeProvider'
import ShoeScene from '@scenes/ShoeScene'

export default function ShoeViewerPage() {
  return (
    <div className="relative h-screen w-screen">
      <ShoeContextProvider>
        <ShoeScene />
        <FloatingBar />
      </ShoeContextProvider>
    </div>
  )
}