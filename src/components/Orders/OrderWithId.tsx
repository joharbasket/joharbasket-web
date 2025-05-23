//components/Oreders/OrderWithId.tsx

"use client"
import { getOrder } from '@/lib/features/orders/orderSlice'
import { useAppSelector } from '@/lib/hooks'
import { useAppDispatch } from '@/lib/store'
import React, { useEffect } from 'react'
import Card from '@/components/Orders/OrderDetailsCard'
import OrdersCard from '@/components/Orders/OrdersCard'
import { useDisclosure } from '@chakra-ui/react'
import Dialog from '@/components/Orders/Dialog'
import Loading from '@/components/Loading'
import { genrateReceipt } from '@/lib/utils' 
import { OrderAction } from '@/lib/constants'

export default function Order({orderId} : {orderId : string}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenD, onOpen: onOpenD, onClose: onCloseD } = useDisclosure()
    const { single: order, loading } = useAppSelector(state => state.orderReducers)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getOrder(orderId))
    }, [orderId, dispatch])

    const isLoading =  loading;
    const userId = order.orderDetails?.userId as string
    const orderStatus = (order.orderDetails?.isAccepted === false) ? OrderAction.ACCEPT_ORDER : OrderAction.CONFIRM_ORDER;

    return (
        <div className='p-4 bg-white rounded-lg shadow-md'>
            {isLoading ? (
                <div className='mt-56'>
                    <Loading />
                </div>
            ) : (
                <>
                    <h2 className='text-xl font-bold mb-4'>Order Details</h2>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        {order?.products?.length > 0 && order.products.map((product, i) => {
                            return (
                                <div key={product.productId}>
                                    <Card details={product} />
                                    {i !== (order.products.length - 1) && <hr className='my-2 border-t border-dashed border-gray-300' />}
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-4'>
                        {order?.orderDetails && <OrdersCard details={order.orderDetails} />}
                    </div>
                    <div className='flex justify-center gap-5 mt-4'>
                        <button onClick={onOpen} className='bg-green-600 text-white rounded-lg p-2'>{orderStatus}</button>
                        <button onClick={onOpenD} className='bg-red-600 text-white rounded-lg p-2'>Cancel Order</button>
                        <button className='bg-white p-2 text-black rounded-lg hover:bg-gray-100' onClick={() => genrateReceipt(orderId)}>Invoice</button>
                    </div>
                </>
            )}
            {isOpen && <Dialog isOpen={isOpen} onOpen={onOpen} onClose={onClose} actionType={orderStatus} orderId={orderId} userId={userId} />}
            {orderStatus===OrderAction.ACCEPT_ORDER &&  isOpenD && <Dialog isOpen={isOpenD} onOpen={onOpenD} onClose={onCloseD} actionType={OrderAction.DELETE_ORDER} orderId={orderId} userId={userId} />}
        </div>
    )
}
