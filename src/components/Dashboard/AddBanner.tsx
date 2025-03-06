"use client";
import axios from 'axios'
import { FcUpload } from "react-icons/fc";
import { Button, Image } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { TiDelete } from "react-icons/ti";

import { useRouter } from "next/navigation";
import { useToast } from '@chakra-ui/react'
import { useAppSelector } from '@/lib/hooks';

export default function AddBanner() {
    const [file, setFile] = useState<File | null>(null);
    const toast = useToast()
    const user = useAppSelector(state => state.authReducer.user);
    const [isPosting, setIsPosting] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null)
    const router = useRouter();
    const onSubmit = async (e: any) => {
        e.preventDefault()
        setIsPosting(true);
        setIsPosting(false);

        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const res = await axios.post(`/api/banner`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: user?.token,
                },
            })
            const data = res.data;

            setIsPosting(false);
            toast({
                title: 'Added New Banner',
                status: 'success',
                duration: 5000,
                isClosable: true,
            },)
            setTimeout(() => { window.location.reload(); }, 3000)


        }




    };
    return (
        <>
            <hr />
            <h1 className='text-3xl font-bold'>
                Add new banner
            </h1>
            <form onSubmit={onSubmit} ref={formRef}
                className='mt-5'>
                <div className="flex justify-between items-baseline gap-4">
                    <div className="flex flex-col gap-2 justify-center items-baseline">
                        <input type="file" accept="image/*"
                            id="file"
                            hidden
                            name="file"
                            className="bg-red"
                            onChange={e => {
                                const files: any = e?.target?.files;
                                if (files) {
                                    setFile(files[0])
                                }

                            }}
                        />
                        <label htmlFor="file" className="flex bg-yellow-50 rounded-lg px-3 py-2 items-center gap-2 cursor-pointer ">
                            <FcUpload />

                            Pick an Image

                        </label>

                        <div className="relative">

                            {file ? <Image src={URL.createObjectURL(file)} height={'auto'} width={250} alt="" /> : <Image src={'/image-placeholder.jpg'} height={'auto'} width={150} alt="" />}
                            {file && <div className=" cursor-pointer absolute top-[-1rem] right-[-2rem] text-3xl"
                                onClick={e => setFile(null)}> <TiDelete /> </div>
                            }
                        </div>
                    </div>
                    <Button bg={'#F2880C'} color={'white'} mr={3} type='submit' isLoading={isPosting} isDisabled={file == null} >
                        Submit
                    </Button>
                </div>
            </form>
        </>

    )
}
