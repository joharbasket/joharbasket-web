import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// Importing assets
import logo from "../assets/logwnobg.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-100 z-50  w-full ">

      <div className="flex justify-center flex-col lg:flex-row gap-5 lg:gap-10 font-Montserrat text-black px-[480px] mt-16">
        <Link href="/about" className="hidden lg:block">
          <p className="h-full flex items-center transition-all ease-in-out text-md hover:text-orange-400 text-nowrap">About Us</p>
        </Link>
        <Link href="/Contact-Us" className="hidden lg:block">
          <p className="h-full flex items-center transition-all ease-in-out text-md hover:text-orange-400 text-nowrap">Contact Us</p>
        </Link>
        <Link href="/johar-basket-for-partner" className="hidden lg:block">
          <p className="h-full flex items-center transition-all ease-in-out text-md hover:text-orange-400 text-nowrap">johar basket for partner</p>
        </Link>
        <Link href="/bussiness-with-johar-basket" className="hidden lg:block">
          <p className="h-full flex items-center transition-all ease-in-out text-md hover:text-orange-400 text-nowrap">Business with johar basket</p>
        </Link>
      </div>

      <div className="flex items-center right-0 left-0 justify-center gap-5 mt-10">
          {/* <Link href={`https://www.facebook.com/joharbasket`} className="text-black text-md font-bold p-1">
            <FaFacebook className="hover:text-orange-500 text-gray-900" />
          </Link> */}
          <Link href={`https://www.instagram.com/joharbasket?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`} className="text-black text-lg font-bold p-1">
            <FaInstagram className="hover:text-orange-500 text-gray-900" />
          </Link>
          <Link href={`https://x.com/joharbasket`} className="text-black text-md font-bold p-1">
            <BsTwitterX className="hover:text-orange-500 text-gray-900" />
          </Link>
          <Link href={`https://www.linkedin.com/company/johar-basket-private-limited/posts/?feedView=all`} className="text-black text-lg font-bold p-1">
            <FaLinkedin className="hover:text-orange-500 text-gray-900" />
          </Link>

        </div>
        
      <hr className=" mx-5 lg:mx-32 text-black border-black border-1 my-10" />

      {/* Footer Text */}
      <div className="flex justify-center flex-col lg:flex-row gap-5 lg:gap-20 pb-5">
        <div className="text-center text-black text-[16px] text-nowrap">
          © 2025 JoharBasket. All rights reserved.
        </div>
        <div className="text-center text-black text-[16px] text-nowrap hover:text-orange-400 cursor-pointer transition-all ease-in-out">
          Terms and conditions
        </div>
        <div className="text-center text-black text-[16px] text-nowrap hover:text-orange-400 cursor-pointer transition-all ease-in-out">
          Privacy Policy
        </div>
      </div>


      {/* Footer Login Link */}
      <div className="flex">
        <Link href="/login" className="font-Inconsolata text-black text-2xl font-bold opacity-20 p-5 left-0 text-nowrap">
          Johar Basket
        </Link>
      </div>
      
      
    </div>
  );
};

export default Footer;
