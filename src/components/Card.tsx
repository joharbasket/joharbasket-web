//components/Card.tsx
import { Image } from '@chakra-ui/react';
import Link from 'next/link'
import React from 'react'

import { FcHighPriority } from "react-icons/fc";

function truncateString(str: string, num: number) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }   
}

export default function Card({ details, category }: any) {
    const { imageUrl = null, price = 0, discountedPrice = 0, description = '', inStock = 0, name = '', productId = '', size='' } = details;
    const condition = true;

    return (
        <div className='flex justify-center'>
            <Link href={`/products/${category}/${productId}`} className="c-card m-4 block bg-white text-black shadow-lg hover:shadow-2xl rounded-lg transition-transform transform hover:scale-105 p-4 h-96 w-64 overflow-scroll">
                {condition && (
                    <div className='absolute top-2 right-2 bg-red-500 text-white text-md font-bold px-1 py-1 rounded-md'>
                        <FcHighPriority />
                    </div>
                )}

                <div className='flex justify-center items-center p-2'>
                    <Image src={imageUrl} alt={name} boxSize={40} fit={'contain'} borderRadius="md" />
                </div>
                <div className="p-4">
                    <h2 className="mt-2 mb-2 text-lg font-semibold">{name}</h2>
                    <div className="mt-2 flex items-center justify-between">
                        <span className='text-sm font-medium'>Category:</span>  
                        <span className="text-sm">{details.category}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <span className='text-sm font-medium'>Subcategory:</span>  
                        <span className="text-sm">{details.subCategory}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <span className='text-sm font-medium'>Price:</span>  
                        <span className="text-sm text-gray-600 line-through">₹{price}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <span className='text-sm font-medium'>Discounted:</span> 
                        <span className="text-sm text-red-500 font-bold">₹{discountedPrice}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <span className='text-sm font-medium'>In Stock:</span>    
                        <span className="text-sm">{inStock}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{truncateString(description, 100)}</p>
                </div>
            </Link>
        </div>
    )
}
