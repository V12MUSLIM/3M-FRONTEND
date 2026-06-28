import Hero from "@/components/sections/hero"
import BeltDivider from "@/components/ui/beltDivider"
import NewArrivals from "@/components/sections/newArrivals"
import Categories from "@/components/sections/categories"
import Reviews from "@/components/sections/reviews"
import Discounts from "@/components/sections/discouns"
interface Category {
  _id: string
  name: string
}
interface Product {
  _id: string
  userID: string
  categoryID: Category
  name: string
  description: string
  images: string[] // Assuming images are an array of strings (URLs)
  imageCover: string
  price: number
  quantity: number
  createdAt: string // ISO 8601 date string
  updatedAt: string // ISO 8601 date string
  __v: number
}
interface ProductResponse {
  message: string
  page: number
  limit: number
  total: number
  data: Product[]
}
export default async function Home() {
  return (
    <main>
      <Hero />
      <BeltDivider />
      <Discounts />
      <Categories />
      <NewArrivals />
      <Reviews />
    </main>
  )
}
