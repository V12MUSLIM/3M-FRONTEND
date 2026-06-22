import { cn } from "@/lib/utils"
import { Button } from "./button"
type Props = {
  imageUrl: string
  caption: string
  className?: string
  btnName?: string
  price: string
}

export default function ImageCard({
  imageUrl,
  caption,
  className,
  btnName,
  price,
}: Props) {
  return (
    <figure
      className={cn(
        `w-[280px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow transition-transform duration-300 ease-out hover:-translate-x-1 hover:-translate-y-2`,
        className
      )}
    >
      <img className="aspect-4/3 w-full" src={imageUrl} alt="image" />
      <figcaption className="flex flex-col gap-2 border-t-2 border-border p-4 text-main-foreground">
        {caption}
        <div className="flex w-full flex-row items-center justify-between">
          {btnName && (
            <Button className="w-fit" variant="neutral">
              {btnName}
            </Button>
          )}
          {price && <p className="text-md font-semibold">{price}$</p>}
        </div>
      </figcaption>
    </figure>
  )
}
