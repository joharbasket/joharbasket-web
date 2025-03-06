"use client";
import { deleteBannerAction } from "@/app/actions";
import { MdDeleteForever } from "react-icons/md";
import { useToast } from '@chakra-ui/react'

export default function DeleteButton({ index }: { index: number }) {
    const toast = useToast()
    const handleClick = async () => {
        const res = await deleteBannerAction(index);
        toast({
            title: res.message,
            status: res.success ? 'success' : 'error',
            duration: 5000,
            position: 'top',
        })

        setTimeout(() => { window.location.reload(); }, 3000)

    }
    return (
        <div className="text-xl text-red-600 hover:cursor-pointer  hover:scale-150  duration-150 ease-in-out"
            onClick={e => handleClick()}>
            <MdDeleteForever />
        </div>
    )
}
