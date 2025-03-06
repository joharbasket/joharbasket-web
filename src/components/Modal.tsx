"use client"
import React, { useState } from 'react'





import { IoMdClose } from "react-icons/io";
export default function Modal1({ setOpen, price, inStock, discountedPrice }: any) {
    const [details, setDetails] = useState({ price, inStock, discountedPrice })
    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        setOpen(false)


    }
    return (
        <div className="h-screen w-full fixed h-modal  p-5 inset-0 z-50 justify-center items-center">
            <div className="m-auto w-full bottom  px-4 h-full md:w-7/12 lg:w-1/2">
                <div className="bg-white rounded-lg w-full shadow  dark:bg-gray-700">
                    <div className="flex justify-end p-2">
                        <button type="button"
                            onClick={e => setOpen(false)}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <IoMdClose />
                        </button>
                    </div>
                    <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onClick={handleSubmit}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Enter Values </h3>

                        <div className='grid md:grid-cols-5 gap-2'>
                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Original Price</label>
                            <input type="number" name="original price"
                                value={price}
                                onChange={e => setDetails(p => {
                                    return { ...p, price: e.target.value }
                                })}

                                className="md:col-start-2 md:col-end-6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div className='grid md:grid-cols-5 gap-2'>
                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Discounted Price</label>
                            <input type="number" name="discounted price"
                                value={discountedPrice}
                                onChange={e => setDetails(p => {
                                    return { ...p, discountedPrice: e.target.value }
                                })}

                                className="md:col-start-2 md:col-end-6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        <div className='grid md:grid-cols-5 gap-2'>
                            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Stock</label>
                            <input type="number" name="stock"
                                value={inStock}
                                onChange={e => setDetails(p => {
                                    return { ...p, inStock: e.target.value }
                                })}
                                className="md:col-start-2 md:col-end-6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>


                        <button type="submit"
                            onClick={e => handleSubmit(e)}
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Update</button>

                    </form>
                </div>
            </div>
        </div>

    )
}
