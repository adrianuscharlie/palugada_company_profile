"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Card from "@/components/ProductCards";
import { getProducts } from "@/utils/firebase";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data asynchronously
        const data = await getProducts();

        // Introduce a 10-second (10000 milliseconds) delay
        await new Promise((resolve) => setTimeout(resolve, 250));

        // Update the state with the fetched data
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Note: You won't see the updated 'products' immediately after calling fetchData
    // because 'setProducts' is asynchronous. It will be updated in a later render.
  }, []);
  return (
    <>
      <section className="w-full pt-36 flex py-20 px-10 ">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Our Products
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {"Discover our high qualities product!"}
              </h6>
              <div className="flex flex-wrap justify-center items-center py-10">
                <div class="w-full px-4 grid grid-grid-cols-1 gap-y-10 gap-10  md:grid-cols-4 justify-center xl:w-10/12 xl:mx-auto">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      tag={product.tag}
                      desc={product.desc}
                      link={`products/${product.id}`}
                      image={product.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-36 flex py-20 px-10  bg-slate-100">
        <div className="container">
          <div className="w-full px-4 justify-center items-center">
            <div className="max-w-4xl mx-auto text-center mb-16 items-center justify-center">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Don’t find any suitable product?
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {"You can request to us to find your suitable product!"}
              </h6>
              <p className="text-xl text-center lg:text-justify">
                Absolutely no need to worry! We enthusiastically invite custom
                product requests tailored precisely to your unique requirements.
                Our diverse range of products, sourced directly from Indonesia,
                is here to fulfill your needs. Just send us your Letter of
                Intent, and we will provide you with the best possible deal for
                your desired product!
              </p>
              <div className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 max-w-xl mx-auto text-center pt-10">
              <Link
                href={"/contact"}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Contact Us
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
