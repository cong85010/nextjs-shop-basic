import Banner from "@/components/Banner";
import CardItem from "@/components/CardItem";
import FilterProducts from "@/components/FilterProducts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

const PAGE_SIZE = 12;

export const metadata = ({ searchParams }) => {
  return {
    title: "Products",
    description: "List of products",
  };
};

export default async function Page({ searchParams }) {
  const categoryId = searchParams?.categoryId ?? "";
  const search = searchParams?.search ?? "";
  const sortBy = searchParams?.sortBy ?? "";
  const order = searchParams?.order ?? "";
  const page = +(searchParams?.page ?? 1);

  console.log({ page });

  let urlAPI = "https://dummyjson.com/products";

  if (categoryId) {
    urlAPI = `https://dummyjson.com/products/category/${categoryId}`;
  } else if (search) {
    urlAPI = `https://dummyjson.com/products/search?q=${search}`;
  } else if (sortBy && order) {
    urlAPI = `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`;
  }

  if (page) {
    urlAPI += `?skip=${(page - 1) * PAGE_SIZE}&limit=${PAGE_SIZE}`;
  }

  const response = await fetch(urlAPI);
  const { products, total, skip, limit } = await response.json();

  console.log("page", page);

  return (
    <div className="my-10">
      <Banner imageUrl="/images/banner2.png" classColor="text-primary-500" />
      <div className=" mt-10 max-w-7xl mx-auto">
        <FilterProducts categoryId={categoryId} />
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-8">
          {products.map((item) => {
            return <CardItem key={item.id} {...item} />;
          })}
        </div>

        <Pagination className="mt-5">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {new Array(Math.ceil(total / limit)).fill(0).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`?page=${index + 1}`}
                  isActive={page === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
