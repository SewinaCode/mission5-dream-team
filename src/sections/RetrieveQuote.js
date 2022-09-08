import React from "react";
import "./header.css";
import Logo from "../assets/logo/turnerlogo-desktop.png";
import ImageSections from "../components/imageSec";
import { Link } from "react-router-dom"

export default function RetrieveQuote() {
  
  return (
    <>
    <div className="bg-gray-100">
      <div className="header-styling header-spacing drop-shadow-xl">
        <Link to="/">
        <ImageSections imageUrl={Logo} />
        </Link>
      </div>
      <div className="relative">
        <h2 className="text-black mont-font text-left font-semibold text-4xl pl-24 mt-24">Welcome Back</h2>
        <div className="drop-shadow-xl bg-white grid ml-40 max-w-4xl mt-12 flex py-8 px-12">
        <p className="font-medium text-3xl border-rose-800 border-b-4 pb-6">Retrieve your quote</p>
        <p className="mt-12 text-xl">Quote number</p>
        <p className="mt-6 text-xl">Date of birth</p>
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
    </div>
    </>
  );
} 