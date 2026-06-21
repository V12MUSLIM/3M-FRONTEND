"use client";
import { Button } from "./button";
import { ShoppingCart, Heart, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "./input";
export default function NavigationBar() {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="flex w-full justify-between items-center border-b-2 p-4 gap-4">
      <div className=" flex flex-row items-center gap-3">
        
        {navItems.map((item) => {
          return (
            <Link key={item.title} href={item.path}>
              <Button variant={pathname === item.path ? "default" : "neutral"}>
                {item.title}
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex relative items-center border-2 border-border rounded-base overflow-hidden">
          <Input className="pl-10 border-0" />
          <Search strokeWidth={4} className="absolute left-2 h-4 w-4 text-indigo-500" />
        </div>
        <div className="flex flex-row gap-3">
          <Button size="icon" variant="neutral">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="neutral">
            <User className="h-4 w-4" />
          </Button>
          <Button size="icon">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}