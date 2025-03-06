import React from 'react'
import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import { OrderDetails } from '@/lib/types';

const Card = ({ details }: any) => {
  const { name, imageUrl, price, count, discountedPrice } = details;


  return (
    <div className='flex bg-white px-4 py-2 rounded-md'>
      <Image src={imageUrl} alt={name} boxSize='150px'
        objectFit='contain' />
      <div className='flex flex-col'>
        <div className='text-black font-bold'>
          {name}

        </div>
        <div className=' text-green-500'>
          &#x20B9;{price} x {count}
        </div>
      </div>
    </div>
  )
}

export default function OrdersCard({ details }: { details: OrderDetails | null }) {
  const { userName, mobileNumber, address, pincode, amount, isAccepted, isDelivered, payment, products, orderId, time } = details ?? {};
  const time_ = details?.orderTime as Date;
  const date = new Date(time_)
  const month = date?.toLocaleString('default', { month: 'long' });
  const stringDate = `${date?.getDate()} ${month} ${date?.getFullYear()}`

  return (


    <div className='grid grid-cols-2 bg-blue-200 rounded-lg p-3 m-3'>
      <div className='text-semibold'>Order Id</div> <div className='text-sm  text-end '>{orderId}</div>
      <div className='text-semibold'>Total Amount</div> <div className='text-sm text-red text-end'> &#x20B9;{amount}</div>
      <div className='text-semibold'>Ordered By</div> <div className='text-sm font-semibold text-end'>{userName}</div>
      <div className='text-semibold'>Mobile Number</div> <div className='text-sm text-end'>{mobileNumber}</div>
      <div className='text-semibold'>Address</div> <div className='text-sm text-end '>{address}</div>
      <div className='text-semibold'>Pincode</div> <div className='text-sm text-end'>{pincode}</div>
      <div className='text-semibold'>Order Date</div> <div className='text-sm text-end'>{stringDate}</div>


    </div>


  )
}
/**
 *  <div onClick={e=>generateReceipt(e)}
          className='hover:text-blue-900 hover:cursor-pointer text-sm underline max-w-max'
        >View Receipt</div>
 */