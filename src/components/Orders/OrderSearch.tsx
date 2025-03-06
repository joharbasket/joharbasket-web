//components/Oreders/OrdersSearch.tsx


import { useAppSelector } from '@/lib/hooks'
import React from 'react'
import type { Product } from '@/lib/types';
import { useState } from 'react';
import { searchRegEx, searchOrder } from '@/lib/utils';
import SmallOrderCard from './SmallOrderCard';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Order } from '@/lib/features/orders/orderSlice';

export default function OrderSearch({ isOpen, onClose, onOpen, sub }: { isOpen: boolean, onClose: () => void, onOpen: () => void, sub: any[] }) {
  //   const sub = useAppSelector(state => state.productReducer.sub)
  const [inputVal, setInputVal] = useState<string>('');
  const [filteredProduct, setFilteredProduct] = useState<Order[]>([]);
  const handleChange = (e: any) => {
    const query = e.target.value;

    setInputVal(query)
    if (inputVal.length >= 2) {
      const filteredProduct = searchOrder(query, sub)
      setFilteredProduct(filteredProduct)
    }
    if (!e.target.value) {
      setFilteredProduct([])
    }
  }

  return (

    <>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'} scrollBehavior='inside' >
        <ModalOverlay
          bg='blackAlpha.100'
          brightness={100}
          backdropFilter='blur(10px)' />
        <ModalContent>
          <ModalHeader>
            <input className='p-2 rounded-full outline-none w-full my-2'
              placeholder='enter name or order id'
              value={inputVal}
              onChange={e => handleChange(e)}
            />
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <div className='' onClick={e=>{
              setInputVal('')
              onClose()}}>

              <hr />
              {
                filteredProduct.length > 0 && <div className='flex flex-col h-max-screen overflow-scroll gap-1'>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Order Id</th>
                        <th>Amount</th>
                        <th>More</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        filteredProduct.map(order => <SmallOrderCard key={order?.orderId} details={order} />)
                      }
                    </tbody>
                  </table>
                </div>
              }

            </div>
          </ModalBody>


        </ModalContent>
      </Modal>

    </>
  )
}
