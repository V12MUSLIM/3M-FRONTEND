"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageCard from "@/components/ui/image-card";

const products = [
  {
    id: 1,
    name: "Air Void 01",
    price: "$129",
    tag: "JUST IN",
    tagColor: "bg-[#FACC00] text-black",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 2,
    name: "Phantom Low",
    price: "$189",
    tag: "LIMITED",
    tagColor: "bg-main text-main-foreground",
    imageUrl:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
  },
  {
    id: 3,
    name: "Neo Court",
    price: "$99",
    tag: "NEW",
    tagColor: "bg-black text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
  },
  {
    id: 4,
    name: "Stark Runner",
    price: "$155",
    tag: "HOT",
    tagColor: "bg-[#FF4D50] text-white",
    imageUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
  },
];

export default function NewArrivals() {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-background">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span
            className="inline-block text-xs font-black uppercase tracking-[0.25em] border-2 border-black px-3 py-1 mb-4"
            style={{ boxShadow: "3px 3px 0 #000" }}
          >
            ✦ New Arrivals
          </span>
          <h2
            className="font-heading text-5xl md:text-6xl uppercase leading-none tracking-tight"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          >
            Fresh
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Drops</span>
              <span
                className="absolute bottom-1 left-0 w-full h-4 bg-[#FACC00] -z-0"
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>

        <Button
          className="self-start md:self-auto border-2 border-black font-black uppercase tracking-widest text-sm px-6 py-5 rounded-none bg-main text-main-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
          style={{ boxShadow: "4px 4px 0 #000" }}
        >
          View All →
        </Button>
      </div>

      {/* ── Card Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 items-start">
        {products.map((product, i) => (
          <div
            key={product.id}
            className={`flex flex-col gap-0 group ${
              i % 2 !== 0 ? "md:mt-10" : ""
            }`}
          >
            {/* Image wrapper with brutalist border */}
            <div
              className="relative border-2 border-black overflow-hidden bg-secondary-background"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              {/* Tag badge */}
              <Badge
                className={`absolute top-3 left-3 z-10 rounded-none border-2 border-black text-[10px] font-black uppercase tracking-widest px-2 py-0.5 ${product.tagColor}`}
                style={{ boxShadow: "2px 2px 0 #000" }}
              >
                {product.tag}
              </Badge>

              {/* ImageCard */}
              <div className="w-full aspect-[3/4] [&>*]:w-full [&>*]:h-full [&>*]:object-cover">
                <ImageCard
                  caption={product.name}
                  imageUrl={product.imageUrl}
                />
              </div>
            </div>

            {/* Product info — brutalist footer strip */}
            <div
              className="border-2 border-t-0 border-black bg-secondary-background px-3 py-3 flex items-center justify-between"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              <div>
                <p
                  className="text-xs uppercase font-black tracking-widest text-foreground leading-none mb-1"
                  style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
                >
                  {product.name}
                </p>
                <p className="text-[11px] text-foreground/60 font-base">
                  Sneakers
                </p>
              </div>
              <span
                className="text-sm font-black border-2 border-black px-2 py-1 bg-background"
                style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
              >
                {product.price}
              </span>
            </div>

            {/* Add to cart — full width brutalist button */}
            <button
              className="w-full border-2 border-t-0 border-black bg-foreground text-background text-[11px] font-black uppercase tracking-[0.2em] py-2.5 hover:bg-main hover:text-main-foreground transition-colors"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              Add to Cart +
            </button>
          </div>
        ))}
      </div>

      {/* ── Bottom ticker strip ── */}
      <div
        className="mt-16 border-y-2 border-black py-3 overflow-hidden"
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
              className="inline-flex items-center gap-4 pr-8 text-xs font-black uppercase tracking-[0.2em]"
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
  );
}