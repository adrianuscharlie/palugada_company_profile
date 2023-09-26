'use client'
import Link from "next/link";
import React from "react";
import { useState } from "react";
const Contact = () => {

  return (
    <>
      <section className="w-full pt-36 flex py-20 px-10 ">
        <div className="container">
          <div className="w-full px-4">
            <div className=" mx-auto text-center">
              <h1 className="text-3xl font-bold text-primary mb-3">
                Contact Us
              </h1>
              <h6 className="text-xl font-semibold text-secondary mb-3">
                {
                  "Let's connect with us! Click the button to instantly connected with us, or you can fill up the form to send us email directly"
                }
              </h6>
              <div className="flex flex-wrap justify-center items-start py-10">
                <div className="w-full flex flex-wrap justify-center items-start lg:w-1/2 mb-10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl gap-5">
                    <Link
                      target="_blank"
                      href={"mailto:palugadasejahteragroup@gmail.com"}
                      className="group flex flex-wrap rounded-full text-white bg-primary hover:bg-secondary p-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width={25}
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                      <span class="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        palugadasejahteragroup@gmail.com
                      </span>
                    </Link>
                    <Link
                      target="_blank"
                      href={"tel:+6281229482042"}
                      className="group flex flex-wrap rounded-full text-white bg-primary hover:bg-secondary p-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width={25}
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span class="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        +6281229482042
                      </span>
                    </Link>
                    <Link
                      target="_blank"
                      href={"https:wa.me/6281229482042"}
                      className="group flex flex-wrap rounded-full text-white bg-primary hover:bg-secondary p-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width={25}
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span class="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        +6281229482042
                      </span>
                    </Link>
                    <Link
                      target="_blank"
                      href={"https:instagram.com/psgtrading"}
                      className="group flex flex-wrap rounded-full text-white bg-primary hover:bg-secondary p-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width={25}
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span class="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                        psgtrading
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="w-full justify-start items-center text-start  lg:w-1/2">
                  <form action="mailto:palugadasejahteragroup@gmail.com" className="space-y-8  " enctype="text/plain">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-md text-primary font-semibold"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-secondary block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="subject"
                        className="block mb-2 text-md text-primary font-semibold"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Business Inquiry"
                        required
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="message"
                        className="block mb-2 text-md text-primary font-semibold"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave a message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
