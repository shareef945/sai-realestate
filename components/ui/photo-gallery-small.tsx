import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

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
            priority={true}
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
              priority={true}
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
              alt="Contemporary living space"
              className="object-cover md:rounded-tr-lg"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              priority={true}
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
              priority={true}
            />
          </div>
          <div className="relative aspect-square w-full group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%203.07.19%E2%80%AFPM-Hwv1lTxTtyVPuiLPMAfqw01zGqM5tf.png"
              alt="Dining area with built-in cabinetry"
              className="object-cover md:rounded-br-lg"
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center md:rounded-br-lg transition-opacity hover:bg-black/50">
              {/* <Button variant="secondary" className="font-medium">
                Show all photos
              </Button> */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="font-medium">
                    Show all photos
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when youre
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter> */}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
