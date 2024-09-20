"use client";
import React, { Fragment, useContext } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AuthContext } from "../Context";
import { useRouter } from "next/navigation";

export default function ProductOrder({ product }) {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = React.useState(1);
  const [size, setSize] = React.useState("50ml");
  const { toast } = useToast();
  const router = useRouter();
  const handleCheckout = () => {
    if (!user?.id) {
      toast({
        title: "Please login before checkout",
        description: "You need to login to checkout",
        variant: "destructive",
      });

      return;
    }

    if (quantity <= 0 || quantity > product.stock) {
      toast({
        title: "Quantity is not valid",
        description: "Quantity can sold out or less than 0",
        variant: "destructive",
      });
    }

    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user?.id,
        products: [
          {
            id: product.id,
            quantity,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          title: "Success",
          description: "Product added to cart",
          variant: "success",
        });

        localStorage.setItem("CHECKOUT", JSON.stringify(data));
        router.push("/checkout");
      });
  };

  return (
    <>
      <Select onValueChange={setSize} value={size}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a size" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="50ml">50ML</SelectItem>
            <SelectItem value="100ml">100ML</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Quantity Selector */}
      <div className="mb-4 flex items-center space-x-4 mt-2">
        <span>Quantity</span>
        <div className="flex items-center">
          <Button
            variant="outline"
            onClick={() => setQuantity((p) => Math.max(p - 1, 1))}
          >
            -
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.min(Math.max(e.target.value, 1), product?.stock))
            }
            className="w-16 text-center"
          />
          <Button
            variant="outline"
            onClick={() => setQuantity((p) => Math.min(p + 1, product?.stock))}
          >
            +
          </Button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Button variant="outline" className="w-1/2">
          Add to bag
        </Button>
        <Button variant="default" className="w-1/2" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </>
  );
}
