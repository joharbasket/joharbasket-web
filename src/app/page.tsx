import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Quick as a Click | Johar Basket',
  description: 'Buy groceries, cosmetics, stationaries.',
}



import { Button, Image } from '@chakra-ui/react'
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import NewLandingPage from '@/components/NewLandingPage';
export default function Home() {
  return (
    <>
    {/* <LandingPage/> */}
    <NewLandingPage/>
    </>
  )
}
/*
 <div className='p-5 flex flex-col md:flex-row gap-6'>


      <Image src='/landing.svg' height='auto' width={550} alt='' />
      <div className='w-full flex flex-col gap-5 justify-center items-center mt-10 md:mt-0 '>
        <h1 className='font-bold text-[4rem] text-black'>Welcome Let &apos;s Go</h1>
        <div className='flex flex-col gap-1 text-black'>
          <p className='text-xl'>
            Hey !! We currently do not accept orders from our website.
          </p>
          <p className='text-xl'>You can download our app.</p> 
          <Link href={applink} target='_blank'><Image alt='Get it on Google Play' width={200} src={imageSrc} /></Link>
         <div className='flex items-center text-[2.3rem]'>
         <hr className=" border-gray-300 w-full border-2" />
         <p className='text-gray-300 mx-5'>OR</p>
         <hr className=" border-gray-300 w-full border-2" />
         </div>
         <div className='text-3xl text-white  flex gap-5 items-center mt-6'>
          Continue as an admin  
          <Link className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-500"
              href={'/login'} >Login</Link>
         </div>

          {/* <Link href='/login'>
            <Button colorScheme='blue' className='w-32 p-2 '>Login</Button>
          </Link>
          <Link href='/users'>
            <Button colorScheme='blue' className='w-32 p-2 '>Users</Button>
          </Link>
          <Link href='/products'>
            <Button colorScheme='blue' className='w-32 p-2 '>Add product</Button>
          </Link>

          </div>
          </div>
        </div>
*/