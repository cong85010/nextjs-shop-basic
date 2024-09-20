"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function News() {
  const ref = useRef();
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(
        "https://dummyjson.com/posts?limit=4&skip=0"
      );
      const { posts } = await response.json();

      const formatData = posts.map((item) => ({
        ...item,
        image: `https://dummyimage.com/300x300/008080/ffffff&text=${item.title}`,
        createdAt: new Date(),
      }));
      setData(formatData);
    };

    init();
  }, []);

  const handleLeft = () => {
    ref.current.prev();
    setFlag(!flag);
  };

  const handleRight = () => {
    ref.current.next();
    setFlag(!flag);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 mt-20 gap-4 md:h-[400x]">
      <div className="flex flex-col justify-between col-span-2  py-10">
        <div className="flex flex-col gap-4 justify-center col-span-2">
          <h2 className="text-4xl font-bold">Read what's new</h2>
          <p className="">
            Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
            Veniam elit magna anim ipsum eiusmod eu
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="text-sm">
            Explore more
          </Button>
          <div className="flex items-center gap-2">
            <Button
              disabled={!ref.current?.canPrev}
              variant="link"
              className="text-sm"
              onClick={handleLeft}
            >
              <ArrowLeft size={20} className="text-primary-500" />
            </Button>

            <Button
              disabled={!ref.current?.canNext}
              variant="link"
              className="text-sm"
              onClick={handleRight}
            >
              <ArrowRight size={20} className="text-primary-500" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full col-span-3">
        <Carousel ref={ref} className="w-full">
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="flex flex-col justify-center gap-2 rounded-lg">
                  <div className="h-[300px] w-full relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="rounded-lg"
                    />
                  </div>

                  <div className="">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <span className="text-xs">
                      {new Date(item.createdAt).toDateString()}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
