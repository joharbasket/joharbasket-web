"use client"
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { addCouponAction } from '@/app/actions';


export default function AddNewCoupon() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [couponDetails, setCouponDetails] = useState({
        couponCode: "",
        discount: 0,
        flatOff: 0,
        onOrderAbove: 0,
        type: "",
        upto: 0
    });
    const handleSubmit = () => {
    

        addCouponAction(couponDetails)
        onClose();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setCouponDetails(p => {
            if (e.target.type === "number") {
                const num = Number.parseInt(e.target.value);
                return { ...p, [e.target.id]: num }
            }

            return { ...p, [e.target.id]: e.target.value }
        });

    }
    return (
        <div className='w-1/2 ml-10 flex justify-center'>
            <button
                className=' bg-johar-orange text-white px-3 py-1 rounded-md text-md h-10'
                onClick={onOpen}
            >Add New Coupon</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter coupon details</ModalHeader>
                    <ModalCloseButton />
                    <form className='mx-5 my-3 flex flex-col'>
                        <label htmlFor='couponCode'>Coupon Code</label>
                        <input type='text' id='couponCode' name='couponCode' className='outline-none  bg-gray-200 rounded-md px-3 py-1' onChange={handleChange} />
                        <label htmlFor='discount' >Discount</label>
                        <input type='number' id='discount' name='discount' className='outline-none  bg-gray-200 rounded-md px-3 py-1' onChange={handleChange} />
                        <label htmlFor='flatOff'>Flat Off</label>
                        <input type='number' id='flatOff' name='flatOff' className='outline-none  bg-gray-200 rounded-md px-3 py-1' onChange={handleChange} />
                        <label htmlFor='onOrderAbove'>Minimum Purchase Amount</label>
                        <input type='number' id='onOrderAbove' name='onOrderAbove' className='outline-none  bg-gray-200 rounded-md px-3 py-1' onChange={handleChange} />
                        <label htmlFor='type'>Type</label>
                        <input type='text' id='type' name='type' className='outline-none  bg-gray-200 rounded-md px-3 py-1' onChange={handleChange} />
                        <label htmlFor='upto'>Maximum dicount</label>
                        <input type='number' id='upto' name='upto' className='outline-none  bg-gray-200 rounded-md px-3 py-1' onChange={handleChange} />                    </form>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <button className=' bg-johar-orange text-white px-3 py-1 rounded-md text-md' type='submit' onClick={handleSubmit}>Submit</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}



// onOrderAbove
// :
// 499
// type
// :
// "flat off on order above"
// upto
// :
// 0