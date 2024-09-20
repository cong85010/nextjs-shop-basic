import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { MenuIcon, Search, ShoppingCart, User, User2 } from "lucide-react";
import UserButton from "./ui/userButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const menus = [
  {
    link: "/products",
    name: "Shop",
  },
  {
    link: "/offers",
    name: "Offers",
  },
  {
    link: "/out-story",
    name: "Out-Story",
  },
  {
    link: "/blog",
    name: "Blog",
  },
];
export default function Header() {
  return (
    <div className="flex items-center justify-between py-4 max-w-7xl mx-auto px-4 md:px-0">
      <div className="w-full md:w-1/3">
        <Link href="/">
          <Image src="/images/logo.png" width={128} height={42} />
        </Link>
      </div>
      <div className="relative md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="fixed z-50">
            <div className="flex flex-col items-start gap-4 justify-start">
              {menus.map((menu) => (
                <Link
                  key={menu.link}
                  href={menu.link}
                  className="hover:text-primary-500"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className=" hidden flex-1 justify-center md:flex items-center gap-6">
        {menus.map((menu) => (
          <Link
            key={menu.link}
            href={menu.link}
            className="hover:text-primary-500"
          >
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="hidden w-1/3 md:flex items-center justify-end gap-4">
        <div className="relative">
          <Input type="text" placeholder="Search product..." className="pl-8" />
          <Search
            size={20}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <span>Cart(0)</span>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
