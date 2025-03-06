"use client";
import React, { ReactEventHandler, useEffect, useState } from 'react'

export default function UsersTable2({ users }: { users: any }) {
  const usersCount = users.length;
  const [size, setSize] = useState(10);
  const [divisions, setDivisons] = useState(0);
  const [currentDivision, setCurrentDivison] = useState(1);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const startIndex = (currentDivision - 1) * size + 1;
  const endIndex = currentDivision * size;
  useEffect(() => {
    const divisions = Math.ceil(usersCount / size);
    setDivisons(divisions);
    setCurrentDivison(1);
  }, [size, usersCount])
  useEffect(()=>{
    const tmp = users.slice(startIndex-1, endIndex)
    setCurrentData(tmp);
  }, [startIndex, endIndex, users])

  const handleSelectChange = (e: any) => {
    setSize(e.target.value);
  };
  const UpperPortion = () => (
    <div className='flex justify-start items-center py-2'>
      <div className='pl-2 font-bold'>Show</div>
      <div className="w-max px-4">
        <select
          id="range"
          value={size}
          onChange={handleSelectChange}
          className="block appearance-none w-full font-bold bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={10}>10 entries</option>
          <option value={25}>25 entries</option>
          <option value={100}>100 entries</option>
        </select>
      </div>
    </div>
  )
  const LowerPortion = () => (
    <div className='bg-white flex justify-center items-center gap-5'>
      <div>Showing {startIndex} to {endIndex} of {usersCount} entries </div>
      <button className='pagination-btn' disabled={currentDivision === 1} onClick={(e) => {
        setCurrentDivison(p => p - 1)
      }}>Previous</button>
      <div >Current Page : {currentDivision}</div>
      <button className='pagination-btn' disabled={currentDivision === divisions} onClick={(e) => {
        setCurrentDivison(p => p + 1)
      }}>Next</button>
    </div>
  )
  const MainContent = () => (
    <div className="w-full rounded-md h-fit p-4  ">

            <table className="w-full   bg-johar-orange rounded-md">
                <thead>
                    <tr className="">
                        <th className="p-4 cursor-pointer text-left w-1/5 ">
                            <p className=" text-md text-amber-50 font-bold leading-none  "> Name</p>
                        </th>
                        <th className="p-4 cursor-pointer text-left w-1/5 ">
                            <p className=" text-md text-amber-50 font-bold leading-none  "> Email</p>
                        </th>
                        <th className="p-4 cursor-pointer text-left w-3/5  ">
                            <p className=" text-md text-amber-50 font-bold leading-none  "> Addresses</p>
                        </th>
                        <th className="p-4 cursor-pointer text-left w-3/5  ">
                            <p className=" text-md text-amber-50 font-bold leading-none  "> Mobile Number</p>
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {

                        currentData.reduce((filtered: any[], user: any) => {

                            if (user) {
                                const jsxE = (
                                    <tr key={user.productId} className="bg-indigo-100 cursor-pointer hover:bg-indigo-200  ">

                                        <td className="p-3 border-b border-blue-gray-50 ">
                                            {user.firstName}  {user.lastName}
                                        </td>
                                        <td className="p-3 border-b border-blue-gray-50">
                                            {user.email}
                                        </td>
                                        <td className="p-3 border-b border-blue-gray-50">
                                            <div>
                                                <ol>
                                                    {
                                                        user?.addressList?.map((address: any, index: any) => <li key={index}>
                                                         {index + 1} .   Address : {address.address}, city : {address.city}, House No. : {address.houseNo}, Landmark : {address.landmark},
                                                            Pincode : {address.pincode}
                                                        </li>)
                                                    }
                                                </ol>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.mobileNumber}
                                        </td>


                                    </tr>
                                )
                                filtered.push(jsxE)
                            }

                            return filtered;
                        }, [])
                    }

                </tbody>
            </table>
        </div>
  )
  return (
    <div className='bg-white h-fit border-2 border-black mt-5 mx-10 mb-4'>
      <UpperPortion />
      <MainContent/>
      <LowerPortion />

    </div>
  )
}
