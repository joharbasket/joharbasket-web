"use client";
import { useAppSelector } from '@/lib/hooks'
import React from 'react'
import type { Product } from '@/lib/types';
import { useState,useEffect } from 'react';
import { searchRegEx } from '@/lib/utils';
import SmallProductCard from '../Products/SmallProductCard';
import debounce from 'lodash/debounce';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Products from '@/app/products/page';

export default function SearchBox({ isOpen, onClose, onOpen }: { isOpen: boolean, onClose: () => void, onOpen: () => void }) {
  const sub = useAppSelector(state => state.productReducer.sub)
  const [inputVal, setInputVal] = useState<string>('');
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([])

const debouncedSearch = debounce((query: string) => {
  if (query.length >= 2) {
    const filteredProduct = searchRegEx(query, sub);
    setFilteredProduct(filteredProduct);
  } else {
    setFilteredProduct([]);
  }
}, 200); // Reduced from 300ms to 200ms for faster response

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const query = e.target.value;
  setInputVal(query);
  debouncedSearch(query);
};

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
              placeholder='enter atleast 3 letters'
              value={inputVal}
              onChange={e => handleChange(e)}
            />
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <div className='' onClick={onClose}>

              <hr />
              {
                filteredProduct.length > 0 && <div className='flex flex-col h-max-screen overflow-scroll gap-1'>
                  {
                    filteredProduct.map(product => <SmallProductCard key={product.productId} details={product} />)
                  }
                </div>
              }

            </div>
          </ModalBody>


        </ModalContent>
      </Modal>

    </>
  )
}