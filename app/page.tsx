import Hero from "@/components/sections/hero";
import BeltDivider from "@/components/ui/beltDivider";
import NewArrivals from "@/components/sections/newArrivals";
interface Category {
  _id: string;
  name: string;
}
interface Product {
  _id: string;
  userID: string;
  categoryID: Category;
  name: string;
  description: string;
  images: string[]; // Assuming images are an array of strings (URLs)
  imageCover: string;
  price: number;
  quantity: number;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  __v: number;
}
interface ProductResponse {
  message: string;
  page: number;
  limit: number;
  total: number;
  data: Product[];
}
export default async function Home() {

  return (
    <div className="min-h-screen flex flex-col flex-1 items-center justify-centerfont-sans ">
      <Hero />
      <BeltDivider/>
      <NewArrivals/>
    </div>
  );
}