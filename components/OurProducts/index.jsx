"use client";
import React, { useEffect, useState } from "react";
import Title from "../ui/title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardItem from "../CardItem";

const BUTTON = {
  BEST_SELLERS: "BEST_SELLERS",
  NEW_PRODUCTS: "NEW_PRODUCTS",
};

const products = [
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "Best-sellers",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "Best-sellers",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "Best-sellers",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "Best-sellers",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "Best-sellers",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "Best-sellers",
  },
];

const productsNew = [
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "New Products",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "New Products",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "New Products",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "New Products",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "New Products",
  },
  {
    title: "Product 1",
    price: 100,
    priceOld: 200,
    image: "/images/product1.png",
    description: "Description 1",
    category: "New Products",
  },
];

export default function OurProducts() {
  const [active, setActive] = useState(BUTTON.BEST_SELLERS);
  const [list, setList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=6&skip=0");
      const { products } = await data.json();
      setList(products);
    };

    init();
  }, []);

  useEffect(() => {
    setList(active === BUTTON.BEST_SELLERS ? products : productsNew);
  }, [active]);

  return (
    <div className="mt-24 max-w-7xl mx-auto">
      <Title title="Our Products" />

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant={active === BUTTON.BEST_SELLERS ? "default" : "ghost"}
          onClick={() => setActive(BUTTON.BEST_SELLERS)}
        >
          Best-sellers
        </Button>
        <Button
          variant={active === BUTTON.NEW_PRODUCTS ? "default" : "ghost"}
          onClick={() => setActive(BUTTON.NEW_PRODUCTS)}
        >
          New products
        </Button>
      </div>

      <div className="px-20 mt-10">
        <Carousel className="w-full ">
          <CarouselContent>
            {list.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <CardItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
