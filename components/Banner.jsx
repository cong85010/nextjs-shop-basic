import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Banner({
  imageUrl = "/images/banner.png",
  classColor = "",
}) {
  return (
    <div
      className="relative w-full h-[602px] flex flex-col justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center ml-10 md:ml-[132px] gap-10">
        <h1
          className={cn(
            "text-xl md:text-[62px] font-bold text-[#323743]",
            classColor
          )}
        >
          Gift for your skin
        </h1>
        <p
          className={cn(
            "text-[#323743] text-sm md:text-xl w-full md:w-[450px]",
            classColor
          )}
        >
          Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore
          excepteur voluptate
        </p>
        <Button size="lg" className="w-[178px] mt-5">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
