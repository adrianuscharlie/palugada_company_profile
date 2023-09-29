"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDownloadURL } from "firebase/storage";
const Card = ({ name, link, tag, desc, image }) => {
  console.log(link);
  return (
    <div className=" h-auto lg:w-75 transition ease-in-out rounded overflow-hidden shadow-lg p-1 md:p-3 mx-auto my-3 duration-300 hover:-translate-y-1 hover:scale-110">
      <Link href={`${link}`}>
        <div className="w-full max-w-sm flex flex-wrap justify-center items-center gap-3  md:p-4">
          <Image
            width={90}
            height={90}
            src={image}
            alt={name}
            className="rounded-md object-cover"
          />
          <p className=" w-28 lg:w-48 whitespace-pre-wrap text-lg font-semibold flex mb-4 ">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
