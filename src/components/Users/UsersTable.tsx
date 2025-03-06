export default function UsersTable({ data }: { data: any }) {
    // const renderAddress = (address: any) => {
    //     return (
          
    //     )
    // }

    return (
        <div className="w-full rounded-md h-svh p-4  ">

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
                        data.reduce((filtered: any[], user: any) => {

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
}
