//components/Orders/OrderDetailsCard.tsx

import type { Product } from '@/lib/types'
import { Image } from '@chakra-ui/react';
type Props = {
    details: Product
}
const Card = ({ details }: Props) => {
    const { name, imageUrl, price, discountedPrice, nos } = details;
    return (
        <div className='flex bg-white px-4 py-2 rounded-md'>
            <Image src={imageUrl} alt={name} boxSize='150px'
                objectFit='contain' />
            <div className='flex flex-col'>
                <div className='text-black font-bold'>
                    {name}
                </div>
                <div className=' text-green-500'>
                    &#x20B9;{price} x {nos}
                </div>
            </div>
        </div>
    )
}

export default Card;