//orders/layout.tsx


"use client";
import { getStringBetween } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from '@/components/Navbar';


enum SubSection {
    NEW = "New",
    PAST = "Past",
    PENDING = "Pending",
    CHILD = "Children"
}

const tabs = [
    { name: "New ", href: SubSection.NEW },
    { name: "Pending", href: SubSection.PENDING },
    { name: "Past ", href: SubSection.PAST },
]
export default function RootLayout({
    children,
    past,
    pending,
    neworder,
}: Readonly<{
    children: React.ReactNode;
    neworder: React.ReactNode;
    past: React.ReactNode;
    pending: React.ReactNode;


}>) {
    const [sub, setSub] = useState<SubSection>(SubSection.NEW)
    const pathname = usePathname()
    const router = useRouter()
    const arr = getStringBetween(pathname)
    return (
        <div className=''>
            {/* <Navbar/> */}
            <div className="my-2 w-full">
            <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1 mx-4">
                {
                    tabs.map((tab, i) => {
                        const isActive = sub === tab.href;
                        return (
                            isActive ? <li key={i}>
                                <div className="flex justify-center bg-johar-orange rounded-full shadow py-4 text-sm text-white font-bold mr-5 cursor-pointer"
                                    onClick={(e) => setSub(tab.href)}
                                >{tab.name}</div>
                            </li> : <li key={i}>
                                <div className="flex justify-center py-4 text-sm text-gray-600 hover:text-gray-700 mr-5 cursor-pointer"
                                    onClick={(e) => {
                                        setSub(tab.href)
                                        router.push('/orders')

                                    }}
                                >{tab.name}</div>
                            </li>
                        )
                    })
                }
            </ul>
            { children}
            {sub === SubSection.PAST && arr.length === 2 && past}
            {sub === SubSection.PENDING && arr.length === 2 && pending}
            {sub === SubSection.NEW && arr.length === 2 && neworder}

        </div>
        </div>
    );
}
