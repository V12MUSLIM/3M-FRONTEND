"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ImageCard from "@/components/ui/image-card"

const products = [
  {
    id: 1,
    name: "Air Void 01",
    price: "129",
    tag: "JUST IN",
    tagColor: "bg-[#FACC00] text-black",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 2,
    name: "Phantom Low",
    price: "189",
    tag: "LIMITED",
    tagColor: "bg-main text-main-foreground",
    imageUrl:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
  },
  {
    id: 3,
    name: "Neo Court",
    price: "99",
    tag: "NEW",
    tagColor: "bg-black text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
  },
  {
    id: 4,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 30,
    name: "Neo Court",
    price: "99",
    tag: "NEW",
    tagColor: "bg-black text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
  },
  {
    id: 454,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 42354,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 42354254,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 4235654,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 4235454,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 423245454,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
  {
    id: 42003245454,
    name: "Stark Runner",
    price: "155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
]

export default function NewArrivals() {
  return (
    <section
      className="flex w-full flex-col bg-background px-6 py-20 md:px-12 bg-[url('/gridbg-v2.png')] bg-cover"
    >
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
            className="text-5xl leading-none font-heading tracking-tight uppercase md:text-6xl"
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

        <Button size="lg" className="px-20">View All →</Button>
      </div>

      {/* ── Card Grid ── */}
      <div className="grid grid-cols-2 gap-4 self-center md:grid-cols-3 lg:max-w-[800px] lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ImageCard
              caption={product.name}
              imageUrl={product.imageUrl}
              btnName="Buy Now"
              price={product.price}
            />
          </div>
        ))}
      </div>

      {/* ── Bottom ticker strip ── */}
      <div
        className="mt-16 overflow-hidden border-y-2 border-black py-3"
        style={{ boxShadow: "0 4px 0 #000, 0 -4px 0 #000" }}
        aria-hidden="true"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "tickerLeft 14s linear infinite" }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 pr-8 text-xs font-black tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              Fresh Drop <span className="text-main">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tickerLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
