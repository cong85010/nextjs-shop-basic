import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductSlide from "@/components/ProductDetail/ProductSlide";
import Link from "next/link";
import ProductOrder from "@/components/ProductDetail/ProductOrder";

const ProductPage = async ({ params }) => {
  console.log("params", params);

  const { id } = params ?? {};

  const reponse = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await reponse.json();

  console.log("product", product);

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Image carousel */}
        <ProductSlide product={product} />

        {/* Product details */}
        <div>
          {/* Best Seller Badge */}
          <span className="bg-purple-200 text-purple-700 text-sm px-2 py-1 rounded-lg inline-block mb-2">
            {product?.category}
          </span>

          {/* Product name */}
          <h1 className="text-3xl font-bold">{product.title}</h1>

          {/* Price */}
          <div className="text-xl my-2">
            <span className="text-teal-500">${product.price}</span>
            <span className="line-through text-gray-500 ml-2">
              $
              {(
                product.price +
                (product.price * product.discountPercentage) / 100
              )?.toFixed(2)}
            </span>
          </div>

          {/* Product description */}
          <p className="text-gray-700 mb-4">{product?.description}</p>

          {/* Reviews and Sold */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-gray-500">
              ${product?.reviews?.length} reviews
            </span>
            <span className="text-gray-500">${product.stock} sold</span>
            <span className="text-yellow-500">★ {product.rating}</span>
          </div>

          {/* Benefits */}
          <ul className="list-none space-y-2 text-gray-700 mb-4">
            <li>✔ Free shipping on orders over $49USD</li>
            <li>✔ Free + easy returns</li>
          </ul>

          <ProductOrder product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
