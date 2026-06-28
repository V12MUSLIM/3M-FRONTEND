import Image from "next/image"

export default function Categories() {
  const categories = [
    {
      id: 1,
      imgUrl: "/shirts.png",
      name: "Shirts",
      count: 24,
    },
    {
      id: 2,
      imgUrl: "/pants2.png",
      name: "Pants",
      count: 18,
    },
    {
      id: 3,
      imgUrl: "/shoes2.png",
      name: "Sneakers",
      count: 36,
    },
    {
      id: 4,
      imgUrl: "/phones.png",
      name: "Phones",
      count: 12,
    },
    {
      id: 5,
      imgUrl: "/watches.png",
      name: "Watches",
      count: 15,
    },
    {
      id: 6,
      imgUrl: "/bags.png",
      name: "Bags",
      count: 9,
    },
  ]

  function CategoryCard({
    imgUrl,
    name,
    count,
  }: {
    imgUrl: string
    name: string
    count: number
  }) {
    return (
      <div className="group relative flex cursor-pointer flex-col">
        {/* Image container with hard shadow */}
        <div className="relative overflow-hidden border-2 border-black bg-[#7C3AED] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Image
            src={imgUrl}
            width={280}
            height={200}
            alt={name}
            className="h-50 w-full object-cover"
          />

          {/* Item count badge */}
          <span className="absolute top-3 right-3 border-2 border-black bg-white px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {count}
          </span>
        </div>

        {/* Label - positioned to overlap slightly */}
        <div className="relative mx-auto -mt-5">
          <span className="inline-block border-2 border-black bg-[#FACC00] px-6 py-2 text-sm font-black tracking-wider uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {name}
          </span>
        </div>
      </div>
    )
  }

  return (
    <section className="px-4 py-8 md:px-8">
      <div className="relative border-4 border-black bg-violet-100 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="mb-12 flex flex-col gap-2">
          <span
            className="inline-block w-fit border-2 border-black bg-white px-3 py-1 text-xs font-black tracking-[0.25em] uppercase"
            style={{ boxShadow: "3px 3px 0 #000" }}
          >
            ✦ Shop By Category
          </span>
          <h2
            className="text-4xl leading-none font-black tracking-tight uppercase md:text-6xl"
            style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Categories</span>
              <span
                className="absolute bottom-1 left-0 z-0 h-4 w-full bg-[#FACC00]"
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>

        {/* Grid - 2 cols mobile, 3 tablet, 4 desktop */}
        <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((cat) => (
            <CategoryCard
              imgUrl={cat.imgUrl}
              name={cat.name}
              count={cat.count}
              key={cat.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
