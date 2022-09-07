import React from "react";
import Header from "./header";

export default function RetrieveQuote() {
  
  return (
    <>
        <Header />
      <div className="relative">
       <h2 className="text-black">hello world</h2>
       <div className="bg-amber-600">

       </div>
       <footer class="pt-24 fixed w-full inset-x-0 bottom-0 pb-12 px-6 shadow md:flex md:items-center md:justify-between bg-sky-600">
        <span class="text-sm text-white sm:text-center">© Copyright 2022 Company Name.
        </span>
        <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
                <p class="mr-4 text-sm text-white hover:underline md:mr-6">Privacy Policy</p>
            </li>
            <li>
                <p class="mr-4 text-sm text-white hover:underline md:mr-6">Terms & Conditions</p>
            </li>
            <li>
                <p class="mr-4 text-sm text-white hover:underline md:mr-6">Cookie Policy</p>
            </li>
            <li>
                <p class="text-sm text-white hover:underline">Contact</p>
            </li>
        </ul>
       </footer>
      </div>
    </>
  );
} 