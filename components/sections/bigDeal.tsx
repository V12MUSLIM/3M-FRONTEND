import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function SpecialOffer() {
  return (
    <section className="relative mt-4 flex flex-col items-center justify-center gap-4 p-4 lg:p-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7c5cbf44 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div className="flex flex-row items-start w-full">
      <div className="self start">
        <span
          className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-black tracking-[0.25em] uppercase"
          style={{ boxShadow: "3px 3px 0 #000" }}
        >
           %%% OFF
        </span>
        <h2
          className="text-5xl leading-none font-black tracking-tight uppercase md:text-6xl"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
         Today&apos;s 
          <br className="md:hidden" />
          <span className="relative inline-block">
            <span className="relative z-10 md:ml-2">deal</span>
            <span
              className="absolute bottom-1 left-0 md:left-1 -z-0 h-4 w-full bg-[#FACC00]"
              aria-hidden="true"
            />
          </span>
        </h2>
      </div>
      </div>
      <div className="relative">
        <Image
          src="/PromoImage.png"
          width={1000}
          height={700}
          alt="deal image "
          className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        />
        <Button
          size={"lg"}
          className="absolute right-4 bottom-4 bg-amber-500 text-lg font-bold md:text-2xl"
        >
          Save money <ArrowRight />
        </Button>
      </div>
    </section>
  )
}
