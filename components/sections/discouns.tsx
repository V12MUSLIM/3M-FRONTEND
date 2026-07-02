"use client"
import ImageCard from "../ui/image-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import dynamic from "next/dynamic"
import { useState } from "react"
const Countdown = dynamic(() => import("react-countdown"), { ssr: false })
const target = new Date("2026-07-02T23:59:59").getTime()
export default function Discounts() {
  const [section, setSection] = useState(() => Date.now() < target)
  const products = [
    {
      id: 1,
      name: "Air Void 01",
      price: "129",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      discountPrice: "100",
    },
    {
      id: 2,
      name: "Phantom Low",
      price: "189",
      imageUrl:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
      discountPrice: "151.20",
    },
    {
      id: 3,
      name: "Neo Court",
      price: "99",
      imageUrl:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
      discountPrice: "79.20",
    },
    {
      id: 4,
      name: "Stark Runner",
      price: "155",
      imageUrl:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
      discountPrice: "124.00",
    },
    {
      id: 5,
      name: "Air Max Plus",
      price: "175",
      imageUrl:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      discountPrice: "140.00",
    },
    {
      id: 6,
      name: "Zoom Fly",
      price: "140",
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
      discountPrice: "112.00",
    },
  ]

  // Custom Neo-Brutalist Renderer for the Countdown
  const countdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: any) => {
    if (completed) {
      return (
        <span className="text-3xl font-black text-red-500 uppercase">
          Sale Ended!
        </span>
      )
    }
    return (
      <div className="flex items-center justify-center gap-2 text-3xl font-black md:gap-4 md:text-5xl">
        <div className="flex h-16 w-16 flex-col items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0_#000] md:h-24 md:w-24">
          {String(days).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0_#000] md:h-24 md:w-24">
          {String(hours).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0_#000] md:h-24 md:w-24">
          {String(minutes).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0_#000] md:h-24 md:w-24">
          {String(seconds).padStart(2, "0")}
        </div>
      </div>
    )
  }
  if (!section) return null
  return (
    <section className="relative flex flex-col p-6 md:p-10">
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7c5cbf44 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* ── Header ── */}
      <div className="mb-4 flex flex-col gap-6 md:mb-14 md:flex-row md:items-center md:justify-between">
        <div>
          <span
            className="mb-4 inline-block border-2 border-black bg-white px-3 py-1 text-xs font-black tracking-[0.25em] uppercase"
            style={{ boxShadow: "3px 3px 0 #000" }}
          >
            ✦ Flash Sale
          </span>
          <h2
            className="text-4xl leading-none font-black tracking-tight uppercase md:text-6xl"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          >
            great
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Discounts</span>
              <span
                className="absolute bottom-1 left-0 -z-0 h-4 w-full bg-[#FACC00]"
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>
        <Button
          size="lg"
          className="border-2 border-black bg-[#A78BFA] px-8 text-black shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#8B5CF6] hover:shadow-[2px_2px_0_#000]"
        >
          View All →
        </Button>
      </div>

      {/* ── Countdown Timer ── */}
      <div className="mb-8 flex w-full flex-col items-center justify-center gap-4 p-6">
        <p className="text-center text-3xl font-black font-heading tracking-widest uppercase md:text-4xl">
          Hurry up!
        </p>

        {/* Simply render the component and pass the target and renderer */}
        <Countdown
          date={target}
          renderer={countdownRenderer}
          onComplete={() => setSection(false)}
        />
      </div>

      {/* ── Carousel ── */}
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <ImageCard
                className="w-full"
                caption={product.name}
                imageUrl={product.imageUrl}
                btnName="Add to cart"
                price={product.price}
                discountPrice={product.discountPrice}
                badgDiscount={Math.floor(
                  (1 - Number(product.discountPrice) / Number(product.price)) *
                    100
                )}
                isDiscount
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex gap-3">
          <CarouselPrevious className="relative top-0 left-0 h-10 w-10 translate-y-0 border-2 border-black bg-white shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]" />
          <CarouselNext className="relative top-0 right-0 h-10 w-10 translate-y-0 border-2 border-black bg-white shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]" />
        </div>
      </Carousel>
    </section>
  )
}
