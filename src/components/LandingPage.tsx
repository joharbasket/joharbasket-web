import React, { useRef } from 'react'
import { APP_NAME, landing_page_text1 as text_1 } from '@/lib/constants'
import Link from 'next/link';
import { TiMessage } from "react-icons/ti";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaTwitch, FaDiscord, FaPinterest, FaPinterestP, FaLinkedin } from "react-icons/fa6";
export default function LandingPage() {
    const applink = 'https://play.google.com/store/apps/details?id=com.opxica.johar&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
    const imageSrc = 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png';
    return (
        <>

            <div className='w-svw divide-y-4 divide-cyan-600 '>
                <div className='text-center bg-white   py-2  '>
                    <h1 className='text-6xl font-Abril text-johar-orange'>
                        {APP_NAME}
                    </h1>
                </div>
                <div className=' bg-mall-image-3 bg-center pt-0 bg-cover h-[30rem] w-full'>
                    <div className='text-white pl-36 pt-40 w-[30rem]'>
                        <div className='text-xl'>
                            Get your groceries delivered fast and fresh with our reliable service
                        </div>
                        <div className='font-bold text-5xl'>
                            Fresh groceries delivered to your doorstep
                        </div>
                        <div className='mt-4'>
                            <Link href={applink} target='_blank'
                                className=' bg-johar-orange rounded-2xl text-black px-6 py-2'
                            >Download Now</Link>
                        </div>
                    </div>

                </div>
                <div className='flex h-96 '>
                    <div className='w-1/2 bg-mall-image-2 bg-center bg-cover'>.</div>
                    <div className='w-1/2 bg-white'>
                        <div className='pl-5 flex flex-col gap-4 mt-20 pr-2'>
                            <h6>Hello</h6>
                            <h3 className='font-bold text-orange-600 text-3xl'>Express Grocery Delivery</h3>
                            <div className=' border-2 border-transparent hover:border-indigo-500 duration-150 px-1 py-3 text-wrap'>
                                {text_1}
                            </div>
                            <div className=' underline'> <Link href="#">Find out more</Link></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 p-10 bg-johar-orange text-white'>
                    <div className='w-[300px] h-[500px] bg-left bg-cover flex justify-center items-center hover:scale-105  duration-300 ease-in-out'>
                        <span className='border-2 border-transparent hover:border-indigo-500 duration-150  font-bold text-3xl p-2  '>New Products</span>
                    </div>
                    <div className='w-[300px] h-[500px] bg-middle bg-cover flex justify-center items-center hover:scale-105  duration-300 ease-in-out'>
                        <span className='border-2 border-transparent hover:border-indigo-500 duration-150  font-bold text-3xl p-2  '>Most Popular</span>
                    </div>
                    <div className='w-[300px] h-[500px] bg-right bg-cover flex justify-center items-center hover:scale-105  duration-300 ease-in-out'>
                        <span className='border-2 border-transparent hover:border-indigo-500 duration-150  font-bold text-3xl p-2  '>Best Value</span>
                    </div>

                </div>
                <div className='bg-mall-image h-96 w-full bg-cover bg-center flex flex-col justify-center items-center py-60 px-80'>
                    <h1 className='text-5xl font-bold text-white border-2 border-transparent hover:border-indigo-500 duration-150  p-2'>Welcome to Johar Basket-Your Online Grocery Delivery Service</h1>
                    <Link href={applink} target='_blank'
                        className=' bg-johar-orange rounded-2xl text-black px-6 py-2 mt-5'
                    >Order Now</Link>
                </div>
                <div className='w-full bg-white h-40 flex flex-col items-center justify-center p-5 gap-5'>
                    <h1 className='text-3xl w-1/2 text-center font-bold text-johar-orange border-2 border-transparent hover:border-indigo-500 duration-150'>Connect With Us</h1>
                    <div className='flex justify-center items-center gap-10'>
                        <Link href='https://twitter.com/joharbasket' target='_blank'><FaXTwitter className='text-3xl' /></Link>
                        <Link href='https://www.instagram.com/joharbasket/' target='_blank'><FaInstagram className='text-3xl text-[#E4405F]' /></Link>
                        {/* <Link href='#' target='_blank'><FaYoutube className='text-3xl text-[#CD201F]' /></Link>
                        <Link href='#' target='_blank'><FaFacebookF className='text-3xl text-[#1773ea]' /></Link>
                        <Link href='#' target='_blank'><FaLinkedin className='text-3xl text-[#0b63bd]' /></Link>
                        <Link href='#' target='_blank'><FaTwitch className='text-3xl text-[#8e45f7]' /></Link>
                        <Link href='#' target='_blank'><FaDiscord className='text-3xl text-[#5865f2]' /></Link>
                        <Link href='#' target='_blank'><FaPinterestP className='text-3xl text-[#BD081C]' /></Link> */}
                    </div>
                </div>
                <div className=' bg-mall-image-4 bg-cover bg-center h-72 flex flex-col items-center justify-center px-10 gap-3'>
                    <h2 className='font-bold text-7xl text-white'>Subscribe</h2>
                    <p className='text-white'>Sign up to hear from us about special sales and events.</p>
                    <form>
                        <div className='grid grid-cols-4 gap-2 w-full'>
                            <input type='email' name='email' placeholder='Email' className='outline-none px-3 py-2 text-white bg-transparent border-b-2 border-white col-start-1 col-end-3' />
                            
                            <Link href='/login' className='rounded-2xl text-black font-semi-bold bg-johar-orange text-center pt-2'>SIGN UP</Link>
                        </div>
                    </form>
                </div>

                <div className='bg-white h-40 flex justify-center items-center gap-1'>
                    COPYRIGHT  <span> {String.fromCodePoint(0x000A9)} </span> <span> {(new Date()).getFullYear()} </span>
                    <span> JOHAR BASKET - ALL RIGHT RESERVED</span>
                </div>


            </div>
            <div className=' fixed bottom-5 right-5 bg-johar-orange rounded-full p-3'>
                <TiMessage className='text-2xl' />

            </div>

        </>
    )
}
