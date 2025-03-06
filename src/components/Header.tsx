"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../public/LogoOtr.png";
import logo2 from "../../public/brandmark.png";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="h-20 w-full flex items-center justify-between fixed inset-0 backdrop-filter backdrop-blur-lg lg:px-32 z-50 bg-white ">
      {/* Logo and link to home page */}
      <Link className="h-full flex items-center" href="/">
        <Image
          src={logo1}
          className="w-56 hidden lg:block"
          alt="Company Logo"
        />
        <Image
          src={logo2}
          className="w-16 mx-5 lg:hidden"
          alt="Mobile Brand Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="gap-10 flex items-center justify-between h-full font-Montserrat text-black">
        <Link href="/about" className="hidden lg:block">
          <p
            className={`h-full flex items-center transition-all ease-in-out text-lg hover:text-orange-500 ${
              pathname === "/about" ? "text-orange-400 underline" : "text-black"
            }`}
          >
            About Us
          </p>
        </Link>
        
        <Link href="/johar-basket-for-partner" className="hidden lg:block">
          <p className={`h-full flex items-center transition-all ease-in-out text-lg hover:text-orange-500 ${
              pathname === "/johar-basket-for-partner" ? "text-orange-400 underline " : "text-black"
            }`}>
            johar basket for partner
          </p>
        </Link>
        <Link href="/bussiness-with-johar-basket" className="hidden lg:block">
          <p className={`h-full flex items-center transition-all ease-in-out text-lg hover:text-orange-500 ${
              pathname === "/bussiness-with-johar-basket" ? "text-orange-400 underline hover:text-orange-400" : "text-black"
            }`}>
            Business with johar basket
          </p>
        </Link>
        <Link href="/Contact-Us" className="hidden lg:block">
          <p className={`h-full flex items-center transition-all ease-in-out text-lg hover:text-orange-500 ${
              pathname === "/Contact-Us" ? "text-orange-400 underline" : "text-black"
            }`}>
            Contact Us
          </p>
        </Link>
      </div>

      {/* App Download Button */}
      <div className="h-full flex items-center">
        <Link
          href="/download"
          className="px-10 py-4 bg-orange-500 hover:bg-white transition-all ease-in-out hover:border-orange-500 hover:text-orange-500 duration-500 border-solid border-[1px] text-white rounded-md shadow-sm text-nowrap hidden lg:block -mr-16"
        >
          Download App
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setVisible(!visible)}
          className="text-3xl -mr-10 z-100"
        >
          {visible ? <IoCloseCircleSharp /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <section className="transition-all ease-in-out duration-300">
        {visible && (
          <div
            // initial={{ y: "-100%", opacity: 0 }}
            // animate={{ y: "0%", opacity: 1 }}
            // exit={{ y: "-100%", opacity: 0 }}
            // transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-full flex flex-col items-center bg-gray-800 text-white rounded-b-2xl rounded-t-none font-Montserrat "
          >
            <Link
              href="/about"
              onClick={() => setVisible(false)}
              className=" bg-gray-800 w-full text-center py-1"
            >
              <p className="text-md font-light hover:text-orange-400 mt-2">
                About Us
              </p>
            </Link>
            
            <Link
              href="/johar-basket-for-partner"
              onClick={() => setVisible(false)}
              className=" bg-gray-800 w-full text-center py-1"
            >
              <p className="text-md font-light hover:text-orange-400">
                Johar Basket for Partner
              </p>
            </Link>
            <Link
              href="/bussiness-with-johar-basket"
              onClick={() => setVisible(false)}
              className=" bg-gray-800 w-full text-center"
            >
              <p className="text-md font-light hover:text-orange-400 mb-2">
                Business with Johar Basket
              </p>
            </Link>
            <Link
              href="/Contact-Us"
              onClick={() => setVisible(false)}
              className=" bg-gray-800 w-full text-center py-1"
            >
              <p className="text-md font-light hover:text-orange-400">
                Contact Us
              </p>
            </Link>
            <Link
              href="/download"
              onClick={() => setVisible(false)}
              className="bg-orange-500 p-2 rounded-lg hover:bg-transparent w-full text-center rounded-t-none"
            >
              <p className="text-md font-light hover:text-orange-400">
                Download App
              </p>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Header;
