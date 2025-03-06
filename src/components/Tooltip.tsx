import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
export default function Tooltip({address, name} : {name:string, address : string}) {

    const Address = ()=>(
        <div className='md:w-96 px-2 pb-2 '>
        <h5 className='text-xl font-bold'>{name}</h5>
        <div className='mt-2'>{address}</div>
        </div>
    )
    return (
        <div className=''>


            <div className="relative flex flex-col items-center group ">
                <IoIosArrowDropdown />
                <div className="absolute top-0 flex-col items-center hidden mt-6 group-hover:flex transition-all ease-out duration-300">
                    <div className="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
                    <div className="relative z-10 p-2 leading-none  bg-white shadow-lg rounded-lg"><Address/></div>
                </div>
            </div>
        </div>
    )
}
