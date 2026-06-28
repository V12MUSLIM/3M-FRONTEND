"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, X } from "lucide-react"
import { motion } from "motion/react"

export default function Hero() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 45 },
  }

  return (
    <div className="relative flex w-full flex-col-reverse items-start justify-between gap-8 px-6 py-5 md:flex-row md:gap-0 md:px-10 md:py-8">
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center gap-6">
        <div className="flex flex-row items-center gap-1">
          <div className="flex h-10 w-fit flex-row items-center justify-between gap-2 bg-black px-2 text-white">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-violet-600"></span>
            </span>
            <p>New drop</p>
          </div>
          <div className="flex gap-2">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="flex gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <X strokeWidth={4} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-unbounded md:tracking-wides text-[clamp(3rem,8vw,15rem)] leading-none uppercase"
          >
            Make
          </h1>
          <h1 className="text-[clamp(3rem,8vw,15rem)] leading-none uppercase md:tracking-widest">
            Your
          </h1>
          <h1 className="text-[clamp(3rem,8vw,15rem)] leading-none font-heading text-main uppercase md:tracking-widest">
            Move.
          </h1>
        </div>

        <p className="text-muted-foreground text-lg lg:text-xl">
          Step into bold. Designed to perform, built to stand out.
        </p>

        <div className="flex flex-col flex-wrap gap-4 md:max-w-lg">
          <Button size="lg" className="lg:py-8 lg:text-lg">
            Get Yours Now <ArrowRight />
          </Button>
          <Button size="sm" variant="noShadow" className="bg-white lg:py-6">
            Explore Sneakers
          </Button>
        </div>
      </div>
      <div className="relative flex w-full flex-1 items-center justify-center self-center transition-opacity duration-500">
        {/* Right: Image */}
        <div className="w-full self-center transition-opacity duration-500">
          <Image
            src="/Image-v2.png"
            width={500}
            height={500}
            alt="hero-image"
            className="h-auto w-full object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  )
}
