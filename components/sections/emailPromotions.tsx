import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function EmailPromotionsMobile() {
  return (
    <section className="relative w-full py-8 lg:py-12 ">
      {/* Full-width dotted background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7c5cbf44 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="flex w-full flex-col items-center justify-between gap-8 overflow-visible border-[4px] border-black bg-violet-400 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:gap-10 sm:p-8 sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] lg:flex-row lg:gap-16 lg:p-20 lg:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          {/* Character */}
          <div className="flex w-full shrink-0 justify-center lg:w-2/5">
            <Image
              src="/character-only2.png"
              width={600}
              height={600}
              alt="Promo character"
              className="w-48 object-contain sm:w-64 lg:w-full lg:max-w-[450px] xl:max-w-[550px]"
            />
          </div>

          {/* Content */}
          <div className="flex max-w-[600px] flex-1 flex-col items-center gap-5 text-center sm:gap-6 lg:items-start lg:gap-8 lg:text-left">
            <span className="border-[3px] border-black bg-white px-5 py-2 text-xs font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:px-6 sm:text-sm lg:text-lg lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Join the list
            </span>

            <h2 className="text-3xl leading-[1.1] font-black sm:text-4xl lg:text-7xl lg:leading-[1.05]">
              Add your email and receive exclusive{" "}
              <span className="text-amber-00">
                offers
              </span>{" "}
              and promo codes.
            </h2>

            <div className="mt-2 flex w-full max-w-3xl flex-col gap-3 sm:mt-4 sm:gap-4 lg:mt-6 lg:gap-6 xl:flex-row">
              <Input
                placeholder="Add your email"
                className="h-14 w-full flex-1 px-5 text-base sm:h-16 sm:min-w-[250px] sm:px-6 sm:text-lg lg:h-20 lg:px-8 lg:text-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />

              <Button className="h-14 w-full bg-amber-300 px-8 text-base font-black uppercase hover:bg-amber-400 sm:h-16 sm:px-10 sm:text-lg lg:h-20 lg:px-12 lg:text-2xl xl:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}