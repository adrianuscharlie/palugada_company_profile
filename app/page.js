"use client";
import Image from "next/image";
import Hero from "@/assets/hero.jpg";
import Card from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/firebase.js";
import Link from "next/link";
export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data asynchronously
        const data = await getProducts();

        // Introduce a 10-second (10000 milliseconds) delay
        await new Promise((resolve) => setTimeout(resolve, 150));

        // Update the state with the fetched data
        setProducts(data.slice(0, 6));
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
      <section
        className="hero bg-cover bg-center  w-full px-10  flex lg:px-20 py-40  lg:py-48 gap-5 "
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="container">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full self-center px-4 lg:w-1/2 mb-20 lg:mb-0">
              <h1 className="text-4xl font-bold text-primary  lg:text-7xl lg:py-5">
                Palugada Sejahtera Group
              </h1>
              <p className="text-2xl font-semibold text-secondary mt-5 ">
                Trading Beyond Borders, Connecting the Globe.
              </p>
              <div className="max-w-xl pt-10">
                <Link
                  href={"/about"}
                  className="bg-primary py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full flex self-center justify-center lg:w-1/2 items-center">
              <Image
                src={Hero}
                width={500}
                height={200}
                alt="hero"
                className="object-contain rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex py-20 px-10  bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap justify-center items-start ">
            <div className="w-full self-center px-4 lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl font-bold text-primary mb-3">About Us</h1>
              <h3 className="text-5xl font-semibold text-secondary mb-3">
                Palugada Sejahtera Group
              </h3>
            </div>
            <div className="w-full self-center pt-5 px-4 lg:w-1/2 mb-20 lg:mb-0">
              <p className="text-xl font-semibold text-start text-slate-800">
                Palugada Sejahtera Group, based in the vibrant heart of Daerah
                Istimewa Yogyakarta, Indonesia, is an esteemed international
                trading company. We pride ourselves on cultivating robust
                relationships with both clients and suppliers, ensuring prompt,
                dependable, and transparent services. With our extensive
                experience in overseeing international ventures and promptly
                adapting to market demands, we serve as your prime avenue to
                seize global opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex py-20 px-10"  >
        <div className="container">
          <div className="w-full">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Our Product
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                Elevate your expectations and enjoy the finest in our product
                thats designed to exceed your every need.
              </h6>
            </div>
            <div className="w-full px-4 grid grid-grid-cols-1  md:grid-cols-3 justify-center xl:w-10/12 xl:mx-auto">
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
            <div className="transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 max-w-xl mx-auto text-center pt-10">
              <Link
                href={"/products"}
                className="bg-primary py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                See More Product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
