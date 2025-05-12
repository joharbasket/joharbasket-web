"use client";
import React from 'react'

import Image from 'next/image';

import Link from 'next/link';
import { IoIosArrowDropdown } from "react-icons/io";
import { OrderDetails } from '@/lib/types';
import Tooltip from '../Tooltip';
import { format } from 'date-fns';
import { OrderAction } from '@/lib/constants';
import { useDisclosure } from '@chakra-ui/react'
import Dialog from '@/components/Orders/Dialog'
import { genrateReceipt } from '@/lib/utils';
export default function OrderCard({ details }: { details: any }) {
    const { userName, mobileNumber, address, pincode, amount, isAccepted, isDelivered, payment, products, orderId, time, userId, orderAcceptTime, deliveryTime, orderTime, houseNo, city, landmark } = details ?? { userName: '', address: '', orderId: '', userId: '' };
    const fullAddress = `
                House Number : ${houseNo}, \n
                Address : ${address}, \n
                City : ${city},\n
                Landmark : ${landmark} \n


    `;
  
    const isPending = (isAccepted) && (!isDelivered);
    const isNew = (!isAccepted) && (!isDelivered);
    const isPast = isAccepted && isDelivered
    let orderStatus = isPending ? OrderAction.CONFIRM_ORDER : OrderAction.ACCEPT_ORDER;
    const orderAcceptTimeF = orderAcceptTime 
    ? (isNaN(new Date(orderAcceptTime).getTime()) ? '' : format(new Date(orderAcceptTime), "PPp"))
    : '';
    const deliverTimeF = deliveryTime   ? format(deliveryTime, "PPp") : '';

    const orderTimeF = orderTime ? (isNaN(new Date(orderTime).getTime()) ? '' : format(new Date(orderTime), "PPp")) : '';
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenD, onOpen: onOpenD, onClose: onCloseD } = useDisclosure()

    return (
        <div className='flex flex-col bg-white rounded-lg shadow-md p-4 mb-4 w-full'>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col'>
                    {isNew && <><div className='font-bold'>ORDER PLACED</div><div>{orderTimeF}</div></>}
                    {isPending && <><div>ACCEPTED AT: {orderAcceptTimeF}</div><div>EXPECTED DELIVERY: {time}</div></>}
                    {isPast && <><div>DELIVERED AT: {deliverTimeF}</div></>}
                </div>
                <div className='flex flex-col items-end'>
                    <div className='text-lg font-semibold'>TOTAL</div>
                    <div className='text-xl font-bold'>&#x20B9; {amount}</div>
                    <div className='flex flex-col items-end'>
                    <Link href={`/orders/${orderId}`} className='px-5 py-2 rounded text-white bg-orange-400 hover:bg-orange-500 font-semibold *:'>View Order Details</Link>
                </div>
                </div>
                
            </div>
            <div className='flex flex-col mt-2'>
                <div className='font-semibold'>SHIP TO</div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium'>{userName}</span>
                    <Tooltip name={userName} address={fullAddress} />
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <div className='font-semibold'>ORDER # {orderId}</div>
                <div className='flex gap-2'>
                    {/* <Link href={`/orders/${orderId}`} className='text-blue-600 hover:underline'>View order details</Link> */}
                    <button className='text-blue-600 hover:underline' onClick={() => genrateReceipt(orderId)}>Invoice</button>
                </div>
            </div>
            <div className='mt-2'>
                <div className='font-semibold'>Products:</div>
                <div className='grid grid-cols-1 gap-2'>
                    {products.map((product: any) => (
                        <div key={product.productId} className='flex items-center border p-2 rounded-md shadow-sm'>
                            {product.imageUrl ? (
                                <Image 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    height={100} 
                                    width={100} 
                                    className='w-16 h-16 object-cover rounded-md mr-2' 
                                />
                            ) : (
                                <div className='w-16 h-16 bg-gray-200 rounded-md mr-2 flex items-center justify-center'>
                                    <span>No Image</span>
                                </div>
                            )}
                            <div className='flex flex-col justify-center'>
                                <span className='font-medium'>{product.name}</span>
                                <span className='text-sm text-gray-500'>Quantity: {product.quantity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {(isPending || isNew) && (
                <div className='flex justify-start gap-10 mt-4'>
                    <div className='py-1 px-2 text-white bg-green-500 rounded-lg cursor-pointer' onClick={onOpen}>
                        {orderStatus}
                    </div>
                    {orderStatus === OrderAction.ACCEPT_ORDER && (
                        <div className='py-1 px-2 text-white bg-red-500 rounded-lg cursor-pointer' onClick={onOpenD}>
                            Cancel
                        </div>
                    )}
                </div>
            )}
            {isOpen && <Dialog isOpen={isOpen} onOpen={onOpen} onClose={onClose} actionType={orderStatus} orderId={orderId} userId={userId} />}
            {isNew && isOpenD && <Dialog isOpen={isOpenD} onOpen={onOpenD} onClose={onCloseD} actionType={OrderAction.DELETE_ORDER} orderId={orderId} userId={userId} userName={userName} />}
        </div>
    )
}