"use client";
import { useState } from "react";
import Image from "next/image";
import { Download, Apple, Smartphone, X } from "lucide-react";
import { TbBrandApple } from "react-icons/tb";
import downloadBn1 from "../../../public/downloadBn1.webp"

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-auto flex flex-col lg:mt-10 justify-center items-center bg-gray-50 px-6">
      {/* Header Section */}

        <Image src={downloadBn1} alt="Download banner" height={600} quality={100} width={1200} className="md:mt-16 mt-32 " />

      <h1 className="text-4xl font-bold text-gray-800 mt-10">Get Our App</h1>
      <p className="text-lg text-gray-600 mt-2">Download our app for the best experience.</p>

      {/* Download Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 mb-10">
        {/* Android Download */}
        <a
          href="https://play.google.com/store/apps/details?id=com.johar.basketpvt&pcampaignid=web_share"
          target="_blank"
          className="flex items-center gap-3 bg-orange-500 text-white px-6 py-3 hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all ease-in-out duration-500 "
        >
          <Smartphone size={24} />
          <span>Download for Android</span>
        </a>

        {/* iOS Download - Triggers Modal */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-3 bg-black text-white px-6 py-3 hover:bg-white hover:text-black border-black border-2 transition duration-500"
        >
          <TbBrandApple size={24} />
          <span>Download for iOS</span>
        </button>
      </div>

      {/* iOS Coming Soon Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Coming Soon!</h2>
            <p className="text-gray-600 mt-2">The iOS version is currently in development. Stay tuned!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
