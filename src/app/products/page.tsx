"use client";
import ProductForm from '@/components/Products/ProductForm';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation'
import React from 'react'




type IFormInput = {
    name: string,
    description: string,
    inStock: number,
    price: number,
    discountedPrice: number,
    isFeatured: boolean,
    file: FileList

}
export default function Products() {
    const user = useAppSelector(state=>state.authReducer.user)
    const router = useRouter()
    const isAdmin = user && user!.isAdmin;
    if (!isAdmin) {
            setTimeout(() => {
                router.back()
            }, 5000)
            return (
                <div className='flex flex-col justify-center items-center h-80svh p-6'>
                    <h1 className='text-3xl text-blue-500 '>Hey your are not an admin! You cannot view this page</h1>
                    <p>Redirecting in 5s</p>
                </div>
            )
        }

    return (
        <div className='flex flex-col w-full rounded-xl mt-5 gap-2 items-center h-screen'>
            <div className='backdrop-blur w-full md:w-1/2'>
                <ProductForm/>
            </div>
        </div>
    )
}
