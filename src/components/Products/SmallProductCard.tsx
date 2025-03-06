import React from 'react'
import type { Product } from '@/lib/types'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getStringBetween } from '@/lib/utils'
type Props = {
  details: Product
}
export default function SmallProductCard({ details }: Props) {
  const pathname = usePathname();

  const collectionName = getStringBetween(pathname)[2];

  return (
    <Link href={`/products/${collectionName}/${details.productId}`}

    >
      <div className='flex gap-2  '>
        <div className='min-h-22 max-h-22 min-w-22 max-w-22 flex flex-row justify-center items-center border-2 border-red-400 p-2 rounded-lg'>
          <Image src={details.imageUrl} alt={details.name} boxSize={20} fit={'scale-down'} />
        </div>
        <div className='font-bold text-[#f2990c] w-full'>{details.name}</div>
      </div>
    </Link>
  )
}