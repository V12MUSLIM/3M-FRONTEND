"use client"
import { Button } from "./button"
import Link from "next/link"
import { House, ShoppingBag, Heart, Search, User } from "lucide-react"
import { usePathname } from "next/navigation"
import path from "path"
const items = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Shop",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    label: "Search",
    href: "/search",
    icon: Search,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Account",
    href: "/account",
    icon: User,
  },
]

export default function MobileBottomNav() {
    const pathname = usePathname()
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t bg-background/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 py-3"
            >
              <Button variant={pathname === item.href ? "default" : "neutral"}>
                <Icon strokeWidth={pathname === item.href ? 3 : 2} className="h-5 w-5" />
              </Button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
