import ReviewCard from "../ui/reviewCard"

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    date: "2026-06-18",
    text: "I bought these for everyday wear and didn't expect much. Three months later they're still my go-to pair. Comfortable straight out of the box and they still look brand new.",
    verified: true,
    helpful: 42,
    featured: true,
  },
  {
    name: "Sarah K.",
    rating: 4,
    date: "2026-06-22",
    text: "Great quality. The toe box felt a little tight on day one but after a week they fit perfectly.",
    verified: true,
    helpful: 18,
    featured: false,
  },
  {
    name: "Daniel R.",
    rating: 5,
    date: "2026-06-20",
    text: "The photos don't do them justice. They look even better in person.",
    verified: true,
    helpful: 27,
    featured: false,
  },
  {
    name: "Emma L.",
    rating: 3,
    date: "2026-06-15",
    text: "Nice design but I wish there were more color options.",
    verified: false,
    helpful: 5,
    featured: false,
  },
  {
    name: "Noah P.",
    rating: 5,
    date: "2026-06-12",
    text: "Wore them for a weekend trip and walked all day. No blisters, no discomfort.",
    verified: true,
    helpful: 31,
    featured: false,
  },
  {
    name: "Olivia M.",
    rating: 4,
    date: "2026-06-10",
    text: "Shipping was fast and packaging felt premium. Would definitely order again.",
    verified: true,
    helpful: 14,
    featured: false,
  },
  {
    name: "James C.",
    rating: 5,
    date: "2026-06-08",
    text: "I've owned a lot of sneakers and these are easily among the most comfortable. The materials feel premium and the fit is spot on.",
    verified: true,
    helpful: 24,
    featured: true,
  },

]
export default function Reviews() {
  return (
    // In your Reviews section wrapper div, replace the plain section with:

    <section
      className="relative overflow-hidden p-6"
      style={{ background: "#E8E0FF" }}
    >
      {/* Dot pattern — same as hero/fresh drops */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7c5cbf44 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />



      {/* Yellow triangle */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: 52,
          right: 60,
          transform: "rotate(20deg)",
          width: 0,
          height: 0,
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "35px solid #FACC00",
          filter: "drop-shadow(3px 3px 0 #000)",
        }}
        aria-hidden="true"
      />

      {/* Dot cluster */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: 28,
          bottom: 80,
          display: "grid",
          gridTemplateColumns: "repeat(3, 6px)",
          gap: 7,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              background: "#000",
              borderRadius: "50%",
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      
      <div className="relative z-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              className="text-5xl leading-none font-heading tracking-tight uppercase md:text-6xl"
              style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
            >
              Trusted
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">By Hundreds</span>
                <span
                  className="absolute bottom-1 left-0 -z-0 h-4 w-full bg-[#FACC00]"
                  aria-hidden="true"
                />
              </span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev) => (
            <ReviewCard
              key={rev.date + rev.name}
              name={rev.name}
              rating={rev.rating}
              date={rev.date}
              text={rev.text}
              verified={rev.verified}
              featured={rev.featured}
              helpful={rev.helpful}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
