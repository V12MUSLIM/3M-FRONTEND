import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Plus } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row items-start justify-between  px-6 md:px-10 py-`5 md:py-8 gap-8 md:gap-0">

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6">
        <div className="flex flex-row items-center gap-1">
          <div className="bg-black text-white w-fit flex flex-row items-center px-2 h-10 justify-between gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
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
          <h1 className=" text-[clamp(3rem,8vw,9rem)] font-grotesk leading-none uppercase  md:tracking-widest">
            Make
          </h1>
          <h1 className="text-[clamp(3rem,8vw,9rem)]  leading-none uppercase  md:tracking-widest">
            Your
          </h1>
          <h1 className="text-[clamp(3rem,8vw,9rem)]  leading-none uppercase text-main md:tracking-widest">
            Move.
          </h1>
        </div>

        <p className="text-muted-foreground text-lg max-w-sm  ">
          Step into bold. Designed to perform, built to stand out.
        </p>

        <div className="flex flex-row flex-wrap gap-4">
          <Button size="lg">Get Yours Now</Button>
          <Button size="lg" variant="neutral">
            Explore Sneakers <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center w-full">
        <Image
          src="/Image-v2.png"
          width={600}
          height={600}
          alt="hero-image"
          className="w-full max-w-[480px] md:max-w-full h-auto object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
}