"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logoPalu.jpg";
import { useState } from "react";
const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <nav className="bg-transparent sticky top-0 z-10 navbar-fixed bg-slate-100 flex justify-between w-full mb-16 py-3 px-10 items-center">
      <Link href={"/"} className="flex gap-2 flex-center items-center">
        <Image
          src={Logo}
          className="object-contain"
          height={50}
          width={50}
          alt="logo"
        />
        <p className="text-primary text-xl font-bold">
          Palugada Sejahtera Group
        </p>
      </Link>
      <div className=" justify-between gap-5 sm:flex hidden mr-20 ">
        <Link
          href={"/"}
          className="text-lg  text-black hover:text-secondary"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="text-lg  text-black hover:text-secondary"
        >
          About Us
        </Link>
        <Link
          href={"/products"}
          className="text-lg  text-black hover:text-secondary"
        >
          Product
        </Link>
        <Link
          href={"/contact"}
          className="text-lg  text-black hover:text-secondary"
        >
          Contact
        </Link>
      </div>

      {/*Mobile Navbar */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            onClick={() => setDropDown(!dropdown)}
          >
            <path d="M4 7h22c1.105 0 2 .895 2 2s-.895 2-2 2H4c-1.105 0-2-.895-2-2s.895-2 2-2zM4 15h22c1.105 0 2 .895 2 2s-.895 2-2 2H4c-1.105 0-2-.895-2-2s.895-2 2-2zM4 23h22c1.105 0 2 .895 2 2s-.895 2-2 2H4c-1.105 0-2-.895-2-2s.895-2 2-2z" />
          </svg>
          {dropdown && (
            <div className="dropdown ">
            <Link href={"/"} className="dropdown_link">
                Home
              </Link>
              <Link href={"/about"} className="dropdown_link">
                About Us
              </Link>
              <Link href={"/products"} className="dropdown_link">
                Product
              </Link>
              <Link href={"/contact"} className="dropdown_link">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
