import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CardItem({
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
  description,
  availabilityStatus,
}) {
  return (
    <Link
      href={`/products/${id}`}
      className="group hover:shadow-lg p-2 rounded-md"
    >
      <div className="relative h-[334px]">
        <Image src={thumbnail} alt="1" fill className="rounded-md" />
        <span className="absolute right-4 top-3 w-fit py-1 px-2 rounded-2xl bg-purple-700 text-white text-sm">
          {availabilityStatus}
        </span>
      </div>
      <div className="mt-2">
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-2  w-1/2">
          <span className="text-[32px] text-[#323743] font-bold">${price}</span>
          <span className="line-through text-gray-400">
            ${(price + (price * discountPercentage) / 100)?.toFixed(2)}
          </span>
        </div>
        <Button
          variant="ghost"
          className="border border-primary-500 rounded-full h-[44px] w-[44px] flex justify-center items-center"
        >
          <ShoppingCart size={48} className="min-w-[20px]" />
        </Button>
      </div>
    </Link>
  );
}
