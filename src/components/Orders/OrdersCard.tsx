"use client";
import React from 'react'
import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import { OrderDetails } from '@/lib/types';
import { Box, Flex, Text } from '@chakra-ui/react';

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
    <Box className='bg-blue-200 rounded-lg p-4 m-3 shadow-md w-full'>
      <Flex direction="column" gap={2}>
        <Flex justify="space-between">
          <Text fontWeight="bold">Order ID:</Text>
          <Text>{orderId}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Total Amount:</Text>
          <Text color="red.500">&#x20B9;{amount}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Ordered By:</Text>
          <Text fontWeight="semibold">{userName}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Mobile Number:</Text>
          <Text>{mobileNumber}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Address:</Text>
          <Text>{address}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Pincode:</Text>
          <Text>{pincode}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Order Date:</Text>
          <Text>{stringDate}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
/**
 *  <div onClick={e=>generateReceipt(e)}
          className='hover:text-blue-900 hover:cursor-pointer text-sm underline max-w-max'
        >View Receipt</div>
 */