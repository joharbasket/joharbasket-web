"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisclosure } from '@chakra-ui/react';
import SearchBox from '@/components/Orders/SearchBox';
import { FcSearch } from "react-icons/fc";
import { getStringBetween } from '@/lib/utils';

const sub = [
    { name: "Cosmetics", href: '/products/cosmetics' },
    { name: "Grocery", href: '/products/grocery' },
    { name: "Stationary", href: '/products/stationary' },
    { name: "Pooja", href: '/products/pooja' },
];

const Tabmenu: React.FC = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const pathname = usePathname();
    const len = getStringBetween(pathname).length;

    return (
        <div>
            {len === 3 && (
                <main className="grid w-full place-items-center">
                    <div className="grid w-full md:w-[40rem] grid-cols-4 gap-2 rounded-full bg-gray-200 p-2">
                        {sub.map((val) => {
                            const isActive = pathname.startsWith(val.href);
                            return (
                                <div key={val.name}>
                                    <input
                                        type="radio"
                                        name="option"
                                        className="peer hidden"
                                        checked={isActive}
                                        readOnly
                                    />
                                    <label className={`block cursor-pointer select-none rounded-full p-2 text-center ${isActive ? 'bg-johar-orange font-bold text-white' : ''}`}>
                                        <Link href={val.href} className="w-full h-full">{val.name}</Link>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </main>
            )}
            {len === 3 && (
                <div className="flex w-full justify-around items-center gap-5 mt-5">
                    <Link
                        className="hidden md:inline-block py-2 px-6 bg-johar-orange/85 hover:bg-johar-orange text-sm text-white font-bold rounded-xl transition duration-200"
                        href={'/products'}
                    >
                        Add New
                    </Link>
                    <button onClick={onOpen} className='bg-white px-6 py-2 rounded-lg'>
                        <FcSearch className='text-3xl' />
                    </button>
                    <SearchBox onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
                </div>
            )}
        </div>
    );
};

export default Tabmenu;