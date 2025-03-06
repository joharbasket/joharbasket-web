//components/products/ProductForm.tsx

import { useRef, useState } from "react"
import { FiFile } from 'react-icons/fi';
import FileUpload from '../FileUpload'
import { FcUpload } from "react-icons/fc";
import axios from 'axios'
import { TiDelete } from "react-icons/ti";
import {
    Button,
    FormControl,
    Image,
    Toast,

} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { capitalizeFirstLetter } from "@/lib/utils";
import { useRouter } from "next/navigation";
const categories = [
    "cosmetics", "stationary", "grocery", "pooja"
]
export default function ProductForm() {

    const toast = useToast()
    const router = useRouter()
    const [isPosting, setIsPosting] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null);
    const formRef = useRef<HTMLFormElement>(null)
    const [stock, setStock] = useState<number>(0);
    const onSubmit = async (e: any) => {
        e.preventDefault()
        setIsPosting(true);
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            const isFeatured = (formData.get("isFeatured") === 'on') ? 'true' : 'false'
            const res = await axios.post(`/api/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            toast({
                title: 'Added New Product',
                status: 'success',
                duration: 5000,
                isClosable: true,
            },)
            setIsPosting(false);
            const category = formData.get('category')
            router.push(`/products/${category}`);
                
              
        }   
        

    };
    const inputs = [
        {
            id: "name",
            name: "Name",
            type: "text"
        },
        {
            id: "price",
            name: "Price",
            type: "number"
        },
        {
            id: "discountedPrice",
            name: "Discounted Price",
            type: "number"
        },
        {
            id: "gst",
            name: "GST",
            type: "number"
        },
        {
            id: "size",
            name: "Size",
            type: "text"
        }
    ]
    return (
        <div className="flex flex-col px-5">

            <form onSubmit={e => onSubmit(e)} ref={formRef} >

                <div className="flex gap-1 flex-col">
                    {
                        inputs.map((val) => (
                            <div className="flex flex-col md:grid md:grid-cols-5 md:items-center" key={val.id}>
                                <label htmlFor={val.id} className="">{val.name}</label>
                                <input type={val.type} id={val.id} name={val.id}
                                    required
                                    className="w-full px-4 py-1 col-span-4 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none "

                                />
                            </div>
                        )
                        )
                    }
                    <div className="flex flex-col md:grid md:grid-cols-5 md:items-center relative" >
                        <label htmlFor="inStock" className="">In Stock</label>
                        <input type="number" id="inStock" name="inStock" value={stock} onChange={e => {
                            setStock(parseInt(e.target.value))
                        }
                        }
                            className="w-full px-4 py-1 col-span-4 rounded-lg   mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none "

                        />
                        <div className="absolute  flex right-1 top-1"><div className="p-1 text-xl font-bold cursor-pointer" 
                        onClick={e => setStock(p => p + 1)}>+</div> <div className="p-1 text-xl font-bold cursor-pointer" onClick={e => setStock(p => p - 1)}>-</div></div>
                    </div>
                </div>
                <div className="mt-5">

                    <div className="flex justify-evenly items-baseline">
                        <label className="flex items-center relative w-max cursor-pointer select-none">
                            <span className=" mr-3">Is Featured</span>
                            <input type="checkbox"
                                name="isFeatured"
                                id="isFeatured"

                                className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500" />
                            <span className="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
                            <span className="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
                            <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-100" />
                        </label>
                        <div className="bg-pink-100 rounded-md p-2 gap-3 flex items-baseline">
                            <label htmlFor="category" className="font-bold"> Select Category</label>
                            <select id="category"

                                name="category"
                                className="px-3 py-2 bg-gray-100 rounded-lg ">
                                {
                                    categories.map(val => <option key={val} value={val}>{capitalizeFirstLetter(val)}</option>)
                                }

                            </select>
                        </div>
                    </div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        className="w-full px-4 py-1 col-span-2 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
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

                                Upload

                            </label>

                            <div className="relative">

                                {file ? <Image src={URL.createObjectURL(file)} height={'auto'} width={250} alt="" /> : <Image src={'/image-placeholder.jpg'} height={'auto'} width={150} alt="" />}
                                {file && <div className=" cursor-pointer absolute top-[-1rem] right-[-2rem] text-3xl"
                                    onClick={e => setFile(null)}> <TiDelete /> </div>
                                }
                            </div>
                        </div>



                        {/* <FileUpload
                                accept={'image/*'}
                                register={register('file')}
                            >

                            </FileUpload> */}


                        <Button bg={'#F2880C'} color={'white'} mr={3} type='submit' isLoading={isPosting} >
                            Submit
                        </Button>
                    </div>
                </div>




            </form>

        </div >
    )
}
