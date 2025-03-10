//components/Orders/OrderDetailsCard.tsx

import type { Product } from '@/lib/types'
import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

type Props = {
    details: Product
}

const Card = ({ details }: Props) => {
    const { name, imageUrl, price, discountedPrice, nos } = details;

    return (
        <Box className='flex bg-white shadow-md rounded-md p-4'>
            <Image 
                src={imageUrl} 
                alt={name} 
                width={150} 
                height={150} 
                objectFit='contain' 
                className='rounded-md'
            />
            <Flex direction='column' justify='center' ml={4}>
                <Text className='text-black font-bold' fontSize='lg'>
                    {name}
                </Text>
                <Text className='text-green-500' fontSize='md'>
                    &#x20B9;{price} x {nos}
                </Text>
                {discountedPrice && (
                    <Text className='text-red-500' fontSize='md' textDecoration='line-through'>
                        &#x20B9;{discountedPrice}
                    </Text>
                )}
            </Flex>
        </Box>
    )
}

export default Card;