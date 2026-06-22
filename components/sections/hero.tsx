import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, Plus } from "lucide-react"

export default function Hero() {
  return (
    <div className="py-`5 relative flex w-full flex-col-reverse items-start justify-between gap-8 px-6 md:flex-row md:gap-0 md:px-10 md:py-8">
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6">
        <div className="flex flex-row items-center gap-1">
          <div className="flex h-10 w-fit flex-row items-center justify-between gap-2 bg-black px-2 text-white">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-violet-600"></span>
            </span>
            <p>New drop</p>
          </div>
          <div className="flex gap-2">
            <Plus strokeWidth={4} />
            <Plus strokeWidth={4} />
            <Plus strokeWidth={4} />
            <Plus strokeWidth={4} />
            <Plus strokeWidth={4} />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className=" text-[clamp(3rem,8vw,9rem)] leading-none uppercase md:tracking-widest">
            Make
          </h1>
          <h1 className="text-[clamp(3rem,8vw,9rem)] leading-none uppercase md:tracking-widest">
            Your
          </h1>
          <h1 className="text-[clamp(3rem,8vw,9rem)] leading-none font-heading text-main uppercase md:tracking-widest ">
            Move.
          </h1>
        </div>

        <p className="text-muted-foreground max-w-sm text-lg">
          Step into bold. Designed to perform, built to stand out.
        </p>

        <div className="flex max-w-lg flex-col flex-wrap gap-4">
          <Button size="lg" >
            Get Yours Now <ArrowRight />
          </Button>
          <Button size="sm" variant="noShadow" className="bg-white">
            Explore Sneakers
          </Button>
        </div>
        <div className="hidden  grid-cols-3 flex-row gap-2 border-4 bg-black lg:grid max-w-md">
          <Image
            src="/image-v2.png"
            height={400}
            width={200}
            alt="shoe on green image"
            className="h-full w-full"
          />
          <Image
            src="/image-v5.jpg"
            height={400}
            width={200}
            alt=" yellow and orange shoe image"
            className="h-full w-full"
          />
          <Image
            src="/image-v4.jpg"
            height={400}
            width={200}
            alt="violet shoe image"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src="/Image-v2.png"
          width={600}
          height={600}
          alt="hero-image"
          className="h-auto w-full max-w-[480px] object-contain mix-blend-multiply md:max-w-full"
        />
      </div>
    </div>
  )
}
