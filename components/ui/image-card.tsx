import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Flame, Heart } from "lucide-react"
import { Badge } from "./badge"
import { p } from "motion/react-client"
type Props = {
  imageUrl: string
  caption: string
  className?: string
  btnName?: string
  price?: string
  badge?: string | number
  isDiscount?: boolean
  discountPrice?: string
  badgDiscount?: number
}

export default function ImageCard({
  imageUrl,
  caption,
  className,
  btnName,
  price,
  badge,
  isDiscount,
  discountPrice,
  badgDiscount,
}: Props) {
  return (
    <figure
      className={cn(
        `relative w-[280px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow transition-transform duration-300 ease-out hover:-translate-x-1 hover:-translate-y-2`,
        className
      )}
    >
      <img className="aspect-4/3 w-full" src={imageUrl} alt="image" />
      <figcaption className="flex flex-col gap-2 border-t-2 border-border p-4 text-main-foreground">
        <div className="flex flex-row justify-between">
          <p>{caption}</p>
          <div className="felx flex-row">
            {price && (
              <p
                className={`text-center ${isDiscount ? "text-sm text-black/50 line-through" : "text-md font-semibold md:text-lg"} `}
              >
                ${price}
              </p>
            )}

            {discountPrice && (
              <p className="text-md text-center font-semibold md:text-lg">
                ${discountPrice}
              </p>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          {btnName && (
            <Button className="w-full bg-amber-300 font-semibold text-black">
              {btnName}
            </Button>
          )}
          <Button className="w-full bg-white" variant="noShadow">
            More details
          </Button>
        </div>
      </figcaption>
      <div className="absolute top-3 right-3 flex w-full max-w-11/12 flex-row justify-between">
        {badge && <Badge>{badge}</Badge>}
        {badgDiscount && (
          <Badge className="flex items-center gap-1.5 px-3 py-1 text-lg font-black">
            {/* 💡 Drop the size prop, use explicit w-7 h-7 (or w-8 h-8) classes instead */}
            <Flame className="h-5! w-5! shrink-0 fill-amber-300 stroke-black" />
            <span>{badgDiscount}%</span>
          </Badge>
        )}
        <Button className="bg-white" size="icon">
          <Heart strokeWidth={3} className="text-red-400" />
        </Button>
      </div>
    </figure>
  )
}
