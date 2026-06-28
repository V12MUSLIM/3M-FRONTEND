"use client"
import { useEffect, useState } from "react"
import ImageCard from "../ui/image-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
export default function Discounts() {
  const target = new Date("2026-06-28T23:59:59").getTime()
  const [total, setTotatal] = useState<number>(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime()
      const totalmillisecondsLeft = target - currentTime
      setTotatal(totalmillisecondsLeft)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [target])
  const ONE_SECOND = 1000
  const ONE_MINUTE = ONE_SECOND * 60
  const ONE_HOUR = ONE_MINUTE * 60
  const hours = Math.floor(total / ONE_HOUR)
  const remainderAfterHours = total % ONE_HOUR
  const minutes = Math.floor(remainderAfterHours / ONE_MINUTE)
  const remainderAfterMinutes = total % ONE_MINUTE
  const seconds = Math.floor(remainderAfterMinutes / ONE_SECOND)
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
      discountPrice: "151.20", // 80% of 189
    },
    {
      id: 3,
      name: "Neo Court",
      price: "99",
      imageUrl:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
      discountPrice: "79.20", // 80% of 99
    },
    {
      id: 4,
      name: "Stark Runner",
      price: "155",
      imageUrl:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
      discountPrice: "124.00", // 80% of 155
    },
    {
      id: 5,
      name: "Air Max Plus",
      price: "175",
      imageUrl:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
      discountPrice: "140.00", // 80% of 175
    },
    {
      id: 6,
      name: "Zoom Fly",
      price: "140",
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
      discountPrice: "112.00", // 80% of 140
    },
  ]

  function splitNumbers(number: number): string[] {
    const strNumber = String(number)
    return strNumber.padStart(2, "0").split("")
  }
  const hourDigits = splitNumbers(hours)
  const minuteDigits = splitNumbers(minutes)
  const secondDigits = splitNumbers(seconds)
  return (
    <section className="flex flex-col p-6 md:p-10">
      {/* ── Header ── */}
      <div className="mb-4 md:mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span
            className="mb-4 inline-block border-2 border-black px-3 py-1 text-xs font-black tracking-[0.25em] uppercase"
            style={{ boxShadow: "3px 3px 0 #000" }}
          >
            ✦ Flash Sale
          </span>
          <h2
            className="text-5xl leading-none font-black tracking-tight uppercase md:text-6xl"
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
          className="border-2 border-black bg-[#A78BFA] px-8 text-black shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#A78BFA] hover:shadow-[2px_2px_0_#000]"
        >
          View All →
        </Button>
      </div>
      <div className="flex w-full flex-col p-6">
        <p className="mb-4 text-center text-3xl font-heading tracking-widest uppercase md:text-4xl">
          Hurry up!
        </p>
        <div className="mb-4 flex flex-row justify-center gap-4 p-4">
          <div>
            <p className="mb-2 text-center text-lg font-heading uppercase">
              Hours
            </p>
            <div className="flex gap-2">
              {hourDigits.map((hour, index) => (
                <span
                  key={index + 1}
                  className="flex h-12 w-10 items-center justify-center border-2 bg-white text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:h-15 md:w-12"
                >
                  {hour}
                </span>
              ))}
            </div>
          </div>
          <span className="self-end text-6xl">:</span>
          <div>
            <p className="mb-2 text-center text-lg font-heading uppercase">
              minutes
            </p>
            <div className="flex gap-2">
              {minuteDigits.map((min, index) => (
                <span
                  key={index + 1}
                  className="flex h-12 w-10 items-center justify-center border-2 bg-white text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:h-15 md:w-12"
                >
                  {min}
                </span>
              ))}
            </div>
          </div>
          <span className="self-end text-6xl">:</span>
          <div>
            <p className="mb-2 text-center text-lg font-heading uppercase">
              Seconds
            </p>
            <div className="flex gap-2">
              {secondDigits.map((sec, index) => (
                <span
                  key={index + 1}
                  className="flex h-12 w-10 items-center justify-center border-2 bg-white text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:h-15 md:w-12"
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
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
