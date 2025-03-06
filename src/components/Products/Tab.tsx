//components/Products/Tab.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Tab({
  subs,
  subcategory,
  setSubcategory,
}: {
  subs: any[];
  subcategory: string;
  setSubcategory: any;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState<File | null>(null);

  const handleAddCategory = () => {
    if (!categoryName || !categoryImage) {
      alert("Please enter a category name and select an image.");
      return;
    }

    console.log("New Category:", categoryName);
    console.log("Image:", categoryImage);

    // Reset and close modal
    setCategoryName("");
    setCategoryImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="my-3 py-3 px-5 flex flex-row gap-1 flex-wrap">
      <div
        className={`flex flex-row items-center text-center justify-center p-2 w-40 h-16 bg-gray-400 text-black
          hover:bg-green-600 hover:text-white rounded-xl 
          transition-all duration-200 ease-in cursor-pointer
          ${activeIndex === -1 ? "bg-green-600 text-white rounded-xl" : "bg-gray-400 text-green-700"}`}
        onClick={() => {
          setSubcategory("all");
          setActiveIndex(-1);
        }}
      >
        All
      </div>
      {subs.map((sub, i) => (
        <div
          key={i}
          className={`flex flex-row items-center text-center justify-start p-2 w-40 h-16 bg-gray-400 text-black
                      hover:bg-green-600 hover:text-white rounded 
                      transition-all duration-200 ease-in cursor-pointer
                      ${activeIndex === i ? "bg-green-600 text-white rounded-xl" : "bg-gray-400 text-green-700"}`}
          onClick={() => {
            setSubcategory(sub.name);
            setActiveIndex(i);
          }}
        >
          <Image
            src={sub.image || "/placeholder.png"}
            alt={sub.name}
            height={45}
            width={45}
            quality={90}
            className="object-cover rounded mb-2 items-center"
          />
          {sub.name}
        </div>
      ))}
      <button
        className="flex justify-center items-center p-2 w-40 h-16 bg-black text-white
                    hover:bg-gray-600 hover:text-white rounded-3xl 
                    transition-all duration-200 ease-in cursor-pointer font-bold"
        onClick={() => setIsModalOpen(true)}
      >
        ADD Category
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 backdrop-filter backdrop-blur-md">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-3">Add New Category</h2>

            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-2 border rounded mb-3"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCategoryImage(e.target.files?.[0] || null)}
              className="w-full p-2 border rounded mb-3"
            />

            <div className="flex justify-end space-x-2">
              <button
                className="p-2 bg-gray-500 text-white rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="p-2 bg-green-600 text-white rounded" onClick={handleAddCategory}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
