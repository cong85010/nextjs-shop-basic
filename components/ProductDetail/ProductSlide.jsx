"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductSlide({ product }) {
  const [selectedImage, setSelectedImage] = React.useState(
    product?.images?.[0]
  );
  return (
    <div className="flex h-[500px]">
      <div className="flex flex-col space-y-2 mt-10 h-full">
        {
          <Carousel orientation="vertical">
            <CarouselContent className="h-[400px]">
              {product.images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt={product.name}
                    className={cn({
                      "border-2 border-primary-500": selectedImage === image,
                    })}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        }
      </div>
      {/* Main Image */}
      <div className="ml-4 flex items-center justify-center w-full h-full relative">
        <Image
          fill
          src={selectedImage} // Update this with actual image path
          alt="Product Name"
          className=""
        />
      </div>
    </div>
  );
}
