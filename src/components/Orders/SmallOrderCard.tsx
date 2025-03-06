//components/Orders/SmallProductCard

import Link from 'next/link'

import type { Order } from '@/lib/features/orders/orderSlice'
type Props = {
  details: Order
}
export default function SmallProductCard({ details }: Props) {


  return (
    <tr>
      <td>

        <div className='flex gap-2 '>

          <div className='font-bold text-johar-secondary w-full'>{details?.userName}</div>
        </div>

      </td>
      <td>

        <div className='flex gap-2 '>

          <div className='font-bold text-johar-secondary w-full'>{details?.orderId}</div>
        </div>

      </td>
      <td>

      <div className='flex'>
        <div className='font-bold text-johar-secondary w-full'> &#x20B9; {details?.amount}</div>
      </div>
      </td>
      <td>
      <div className='flex'>
        <Link href={`/orders/${details?.orderId}`}
        >  View Details </Link>
      </div>
      </td>
      {/* <div className='min-h-22 max-h-22 min-w-22 max-w-22 flex flex-row justify-center items-center border-2 border-red-400 p-2 rounded-lg'>
          <Image src={details.imageUrl} alt={details.name} boxSize={20} fit={'scale-down'} />
         
        </div> */}
    </tr >
  )
}
