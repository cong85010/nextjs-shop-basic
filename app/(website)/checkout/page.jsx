"use client";
import { Edit3, SaveIcon, ShoppingCart, Trash, XIcon } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckOutPage() {
  const [checkout, setCheckout] = useState({
    products: [],
  });
  const [editRow, setEditRow] = useState(null);
  const [inputEdit, setInputEdit] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("CHECKOUT") || "[]");

    setCheckout(data);
  }, []);

  const handleRemove = (product) => {
    const newProducts = checkout.products.filter(
      (item) => item.product !== product.product
    );

    const newCheckout = {
      ...checkout,
      products: newProducts,
      total: getTotal(newProducts),
    };

    setCheckout(newCheckout);

    localStorage.setItem("CHECKOUT", JSON.stringify(newCheckout));
  };

  const getTotal = useCallback(
    (products) =>
      products
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2),
    []
  );

  const handleEdit = () => {
    // deepclone
    const tempCheckout = JSON.parse(JSON.stringify(checkout));

    const product = tempCheckout.products[editRow];

    if (product) {
      product.quantity = +inputEdit;
    }

    tempCheckout.products[editRow] = product;

    setCheckout({
      ...tempCheckout,
      total: getTotal(tempCheckout.products),
    });

    localStorage.setItem("CHECKOUT", JSON.stringify(tempCheckout));

    setEditRow(null);

  };

  return (
    <div className="max-w-7xl mx-auto mt-10 ">
      <h1 className="text-3xl text-center font-bold">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        <div className="border border-gray-200 rounded-md p-4">
          <div className="flex items-center gap-4">
            <ShoppingCart size={20} />{" "}
            <h2 className="text-lg font-bold">Order summary</h2>
          </div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checkout?.products.map((product, index) => (
                <TableRow key={product.product}>
                  <TableCell className="font-medium">
                    <Image
                      src={product.thumbnail}
                      width={50}
                      height={50}
                      alt={product.title}
                    />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>
                    {editRow === index ? (
                      <div className="flex items-center space-x-2">
                        <Input
                          value={inputEdit}
                          className="w-16 text-center"
                          type="number"
                          onChange={(e) => setInputEdit(e.target.value)}
                        />
                        <Button variant="outline" onClick={() => handleEdit()}>
                          <SaveIcon size={16} />
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => setEditRow(null)}
                        >
                          <XIcon size={16} />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        {product.quantity}

                        <Edit3
                          size={16}
                          onClick={() => {
                            setEditRow(index);
                            setInputEdit(product.quantity);
                          }}
                        />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">{product.price}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      onClick={() => handleRemove(product)}
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">${checkout.total}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
