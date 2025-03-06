"use client";
import React, { useState } from 'react'
import { deleteBannerAction } from '@/app/actions';

export default function DeleteBanner({ n }: { n: number }) {
    const handleFormAction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const indx = Number(index);
        if (indx >= 1 && indx <= n) {
            deleteBannerAction(indx - 1);
            window.location.reload();
        }

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIndex(e.target.value);
        const indexN = Number(e.target.value);
        if (indexN <= 0 || indexN > n) {
            setError(`The banner should be less than ${n + 1} and greater than zero.`)
        } else {
            setError('');
        }

    }
    const [index, setIndex] = useState<string>('');
    const [error, setError] = useState<string>('')
    return (
        <>
            <hr />
            <h1 className='text-3xl font-bold'>
                Delete a Banner
            </h1>

            <form onSubmit={e => handleFormAction(e)}>

                <div className='flex gap-5  items-center pt-4 pb-2'>

                    <label >Enter banner number</label>
                    <input type='number'
                        value={index}
                        onChange={handleChange}

                        className='w-20 outline-none  bg-gray-200 rounded-md px-3 py-1' />
                    <button type='submit'
                        className=' bg-johar-orange text-white px-3 py-1 rounded-md text-md'
                    >Delete</button>
                </div>
                {
                    error && <div className='text-sm text-red-600 mb-3 '>{error}</div>
                }


            </form>
        </>
    )
}
