"use client";
import { useToast } from '@chakra-ui/react';
import { useState } from "react";
import { Position } from '@/lib/constants'
import { changeOrderAction } from "@/app/actions";
export default function ChangeOrder({ n }: { n: number }) {
    const toast = useToast()
    const [indexF, setIndexF] = useState<string>('');
    const [indexL, setIndexL] = useState<string>('');
    const [error, setError] = useState<string>('');
    const handleClick = async (position: Position) => {
        if (position == Position.FIRST) {
            const index = Number(indexF);
            if (index > 0 && index <= n) {
                const res = await changeOrderAction(index - 1, Position.FIRST);
                toast({
                    title: res.message,
                    status: res.success ? 'success' : 'error',
                    duration: 5000,
                    position: 'top',
                })
        
                setTimeout(() => { window.location.reload(); }, 3000)
            }
        } else {
            const index = Number(indexL);
            if (index > 0 && index <= n) {
                const res = await changeOrderAction(index - 1, Position.LAST);
                toast({
                    title: res.message,
                    status: res.success ? 'success' : 'error',
                    duration: 5000,
                    position: 'top',
                })
        
                setTimeout(() => { window.location.reload(); }, 3000)
            }
        }
    }

    return (
        <>
            <hr />

            <h1 className='text-3xl font-bold'>
                Change Order of Banners
            </h1>
            <div className="flex flex-col gap-3 justify-baseline pb-3">
                <div className="flex gap-4 items-center">
                    <label>Move banner to first position.</label>
                    <input className='w-20 outline-none  bg-gray-200 rounded-md px-3 py-1'
                        type='number' value={indexF} onChange={e => {
                            setIndexF(e.target.value)
                            const indexN = Number(e.target.value);
                            if (indexN <= 0 || indexN > n) {
                                setError(`The banner should be less than ${n + 1} and greater than zero.`)
                            } else {
                                setError('');
                            }
                        }} />
                    <button
                        className=' bg-johar-orange text-white px-3 py-1 rounded-md text-md'
                        onClick={e => handleClick(Position.FIRST)}
                    >Change</button>
                </div>
                <div className="flex gap-4 items-center">
                    <label>Move banner to last position.</label>
                    <input className='w-20 outline-none  bg-gray-200 rounded-md px-3 py-1'
                        type='number' value={indexL} onChange={e => {
                            const indexN = Number(e.target.value);
                            if (indexN <= 0 || indexN > n) {
                                setError(`The banner should be less than ${n + 1} and greater than zero.`)
                            } else {
                                setError('');
                            }
                            setIndexL(e.target.value)
                        }} />
                    <button
                        className=' bg-johar-orange text-white px-3 py-1 rounded-md text-md'
                        onClick={e => handleClick(Position.LAST)}
                    >Change</button>
                </div>
                {
                    error && <div className='text-sm text-red-600 mb-3 '>{error}</div>
                }
            </div>
        </>
    )
}
