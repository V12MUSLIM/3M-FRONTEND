import { Star, ThumbsUp, Quote } from "lucide-react"

type ReviewCardProps = {
  name: string
  avatar?: string
  rating: number
  date: string
  text: string
  verified?: boolean
  helpful?: number
  featured?: boolean
}

export default function ReviewCard({
  name,
  avatar,
  rating,
  date,
  text,
  verified = false,
  helpful = 0,
  featured = false,
}: ReviewCardProps) {
  return (
    <div
      className={`group min-w-0 relative flex flex-col gap-4 border-2 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
        featured ? "bg-amber-300" : "bg-white"
      } ${featured ? "lg:col-span-2" : ""}`}
    >
      {/* Decorative quote */}
      <Quote
        className="absolute top-4 right-4 h-8 w-8 text-black/10"
        strokeWidth={3}
      />

      {/* Header */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="h-12 w-12 shrink-0 overflow-hidden border-2 border-black bg-violet-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-black text-white">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm font-black tracking-wide uppercase">
              {name}
            </span>
            {verified && (
              <span className="border border-black bg-black px-1.5 py-0.5 text-[10px] font-bold text-white uppercase">
                Verified
              </span>
            )}
          </div>
          <span className="text-xs font-bold text-black/50">{date}</span>
        </div>
      </div>

      {/*TODO: find a way to map numbers to stars. */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? featured
                  ? "fill-violet-500 text-black"
                  : "fill-amber-300 text-black"
                : "fill-transparent text-black/20"
            } `}
            strokeWidth={2.5}
          />
        ))}
      </div>

      {/* Body */}
      <p className="text-sm leading-relaxed font-bold text-black/90">
        {text}
      </p>

      {/* Footer */}
      <div className="mt-auto flex w-full items-center justify-between border-t-2 border-black pt-3">
        <button className="shrink-0 flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1.5 text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
          <ThumbsUp className="h-3.5 w-3.5" strokeWidth={2.5} />
          Helpful ({helpful})
        </button>
        <span className="text-xs font-bold text-black/30">{date}</span>
      </div>
    </div>
  )
}
