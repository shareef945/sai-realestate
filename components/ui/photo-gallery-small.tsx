import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PhotoGallerySmall() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-4">
        {/* Main large image */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
            alt="Modern living room with tufted sofa"
            className="object-cover rounded-lg md:rounded-r-none"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Right column grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top row */}
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
              alt="Modern bedroom"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
              alt="Contemporary living space"
              className="object-cover md:rounded-tr-lg"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>

          {/* Bottom row */}
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
              alt="Modern dining area"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
          <div className="relative aspect-square w-full group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
              alt="Dining area with built-in cabinetry"
              className="object-cover md:rounded-br-lg"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center md:rounded-br-lg transition-opacity hover:bg-black/50">
              <Button variant="secondary" className="font-medium">
                Show all photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
