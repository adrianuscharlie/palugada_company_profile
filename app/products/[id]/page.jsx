"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { getProduct } from "@/utils/firebase";
import Image from "next/image";
const Product = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const split = pathname.split("/");
    const id = split[2];
    const fetchData = async (id) => {
      const product = await getProduct(id);
      await new Promise((resolve) => setTimeout(resolve, 150));
      setLoading(true);
      setProduct(product);
    };
    fetchData(id);
  }, []);
  return (
    <section className="w-full pt-36 flex py-20 px-10" >
      {loading && (
        <div className="container gap gap-y-10">
          <h1 className="lg:px-20 font-bold text-primary text-5xl">
            Product Details
          </h1>
          <p className="lg:px-20 font-bold text-secondary text-xl mb-10">
            Lets Discover our product quality and specifications
          </p>
          <div className="flex flex-wrap justify-center items-center px-5">
            <div className="flex w-full md:w-1/2 justify-center items-center">
              <Image
                className="object-cover self-center"
                src={product.image}
                width={400}
                height={400}
                alt={product.id}
              />
            </div>
            <div className="w-full md:w-1/2 justify-center items-center">
              <h1 className="text-4xl font-bold text-primary mb-5">
                {product.name}
              </h1>
              <p className="text-lg text-medium text-justify">{product.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
