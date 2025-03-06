"use client"
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { deleteCouponAction } from '@/app/actions'

export default function CouponAcc({ data }: { data: any[] }) {
    const handleDelete = (id : string)=>{
       deleteCouponAction(id);
    }
    return (
        <div className='w-1/2'>

            <Accordion allowToggle>
                {
                    data.map((c, i) => <AccordionItem key={i}>
                        <h2>
                            <AccordionButton>
                                <span className='text-lg font-bold flex flex-1'>
                                    {c.couponCode}
                                </span>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ul>
                                <li>Coupon Code : {c.couponCode}</li>
                                <li>Discount : {c.discount}</li>
                                <li>Flat off : {c.flatOff}</li>
                                <li>Minimum Purchase amount : {c.onOrderAbove}</li>
                                <li>Maximum discount (Upto) : {c.upto}</li>
                            </ul>

                            <button
                                className='bg-red-600 text-white px-3 py-1 rounded-md text-md h-10 mt-3'
                                onClick={e=> handleDelete(c.couponCode)}
                            >Delete</button>
                        </AccordionPanel>
                    </AccordionItem>)
                }

            </Accordion>
        </div>
    )
}


