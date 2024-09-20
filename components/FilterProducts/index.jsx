"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import {
  ArrowDown01,
  ArrowDown10,
  ArrowUpAZ,
  ArrowUpDown,
  ArrowUpZA,
  DollarSign,
  Search,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function FilterProducts({ categoryId }) {

  const [categories, setCategories] = useState([]);
  const [inputSeach, setInputSeach] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        data.unshift({
          name: "All",
          url: "/",
          slug: "",
          active: true,
        });
        const list = data.slice(0, 4);

        setCategories(list);
      });
  }, []);

  const handleCategory = (category) => {
    router.push(`/products?categoryId=${category.slug}`, {
      scroll: false,
    });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      router.push(`/products?search=${inputSeach}`);
    }
  };

  const handleSort = (sortBy, order) => {
    router.push(`/products?sortBy=${sortBy}&order=${order}`);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center h-10">
        {categories.map((category, index) => {
          return (
            <>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="h-[80%] bg-primary-500/50"
                />
              )}
              <Button
                onClick={() => handleCategory(category)}
                key={index}
                size="sm"
                className="w-[177px]"
                variant={(category.slug === categoryId) ? "default" : "ghost"}
              >
                {category.name}
              </Button>
            </>
          );
        })}
      </div>
      <div className="flex items-center gap-10">
        <div className="relative">
          <Input
            type="text"
            value={inputSeach}
            onChange={(e) => setInputSeach(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search product..."
            className="pl-8"
          />
          <Search
            size={20}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="flex gap-2">
              Sort By <ArrowUpDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSort("price", "asc")}>
              <ArrowDown01 size={20} /> Giá thấp đến cao
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("price", "desc")}>
              <ArrowDown10 size={20} /> Giá cao đến thấp
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("title", "asc")}>
              <ArrowUpAZ size={20} />
              A-Z
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("title", "desc")}>
              <ArrowUpZA size={20} />
              Z-A
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
