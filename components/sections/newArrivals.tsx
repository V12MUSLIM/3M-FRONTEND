"use client"

import { Button } from "@/components/ui/button"
import ImageCard from "@/components/ui/image-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    id: 1,
    name: "Air Void 01",
    price: "129",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    discountPrice: "100"
  },
  {
    id: 2,
    name: "Phantom Low",
    price: "189",
    imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    discountPrice: "151.20" // 80% of 189
  },
  {
    id: 3,
    name: "Neo Court",
    price: "99",
    imageUrl: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    discountPrice: "79.20" // 80% of 99
  },
  {
    id: 4,
    name: "Stark Runner",
    price: "155",
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
    discountPrice: "124.00" // 80% of 155
  },
  {
    id: 5,
    name: "Air Max Plus",
    price: "175",
    imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    discountPrice: "140.00" // 80% of 175
  },
  {
    id: 6,
    name: "Zoom Fly",
    price: "140",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    discountPrice: "112.00" // 80% of 140
  },
];

export default function NewArrivals() {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden px-6 py-20 md:px-12"
      style={{ background: "#E8E0FF" }}
    >
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #7c5cbf44 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full flex-col">
        {/* ── Header ── */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span
              className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-black tracking-[0.25em] uppercase"
              style={{ boxShadow: "3px 3px 0 #000" }}
            >
              ✦ New Arrivals
            </span>
            <h2
              className="text-5xl leading-none font-black tracking-tight uppercase md:text-6xl"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              Fresh
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Drops</span>
                <span
                  className="absolute bottom-1 left-0 -z-0 h-4 w-full bg-[#FACC00]"
                  aria-hidden="true"
                />
              </span>
            </h2>
          </div>
          <Button
            size="lg"
            className="border-2 border-black bg-[#A78BFA] px-8 text-black shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#A78BFA] hover:shadow-[2px_2px_0_#000]"
          >
            View All →
          </Button>
        </div>

        {/* ── Carousel ── */}
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ImageCard
                  className="w-full"
                  caption={product.name}
                  imageUrl={product.imageUrl}
                  btnName="Add to cart"
                  price={product.price}
                  badge="New"
  
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex gap-3">
            <CarouselPrevious className="relative left-0 top-0 h-10 w-10 translate-y-0 border-2 border-black bg-white shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]" />
            <CarouselNext className="relative right-0 top-0 h-10 w-10 translate-y-0 border-2 border-black bg-white shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]" />
          </div>
        </Carousel>

        {/* ── Bottom ticker strip ── */}
        <div
          className="mt-16 overflow-hidden border-y-2 border-black py-3"
          style={{ boxShadow: "0 4px 0 #000, 0 -4px 0 #000" }}
          aria-hidden="true"
        >
          <div className="animate-ticker flex whitespace-nowrap">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 pr-8 text-xs font-black tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                Fresh Drop <span className="text-[#7c5cbf]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}