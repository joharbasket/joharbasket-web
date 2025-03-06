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
        <div className='static'>
            <Link href={`/products/${category}/${productId}`} className="c-card m-4 block bg-white text-black shadow-md hover:shadow-xl rounded-lg p-2 h-96 w-64 overflow-auto ">
                {condition && <div className=' relative left-32 top-10 rotate-45 bg-black h-5 flex '>
                    <div className='relative left-16 text-xl'>
                        <FcHighPriority />
                    </div>
                </div>}

                <div className='min-h-22 max-h-22 min-w-22 max-w-22 flex flex-row justify-center items-center p-1'>
                    <Image src={details.imageUrl} alt={details.name} boxSize={20} fit={'scale-down'} />
                </div>
                <div className="p-4">
                    <h2 className="mt-2 mb-2  font-bold">{name}</h2>
                    
                    <div className="mt-3 flex items-center gap-2">
                        <span className='text-sm font-bold'>Size</span>  <span className=" text-sm">{size}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                        <span className='text-sm font-bold'>Original Price</span>  <span className=" text-sm">₹{price}</span>
                    </div>
                    <div className="mt-3 flex items-center  gap-2">
                        <span className='text-sm font-bold'>Discounted Price</span> <span className="text-sm">₹{discountedPrice}</span>
                    </div>
                    <div className="mt-3 flex items-center  gap-2">
                        <span className='text-sm font-bold'>In Stock</span>    <span className="text-sm">{inStock}</span>
                    </div>
                    <p className="">{truncateString(description, 100)}</p>
                </div>
            </Link>
        </div>
    )
}
