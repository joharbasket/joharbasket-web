"use client"
import {  gLogin } from '@/lib/features/auth/authSlice';
import { useAppDispatch } from '@/lib/store';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";


export default function Login() {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const [user, setUser] = useState({ email: '', password: '' })
    const handleSubmit = (e: any) => {
        e.preventDefault();


    }
    const handleGoogleSignIn = async () => {
        await dispatch(gLogin());
        router.push('/dashboard')
    }
    return (
        <div className='grid md:grid-cols-2 h-screen w-screen bg-slate-100'>
            <div className='bg-indigo-600 hidden md:block     bg-image-1 bg-no-repeat bg-cover'>
            </div>
            <div className="p-8 md:mx-14" >
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                    <form className="mt-6"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="email" placeholder="Enter Email Address"
                                onChange={(e) => {
                                    setUser(p => {
                                        return { ...p, email: e.target.value }
                                    })
                                }}
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="password" placeholder="Enter Password"
                                onChange={(e) => {
                                    setUser(p => {
                                        return { ...p, password: e.target.value }
                                    })
                                }}

                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <button type="button" onClick={handleGoogleSignIn} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <span className="ml-4 flex gap-2"> <FcGoogle className='text-3xl' /> Log in with Google</span>
                        </div>
                    </button>
                    <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                        account</a></p>
                </div>
            </div>
        </div>
    )
}

/*
*
*
*
   
<section classNameName="flex flex-col md:flex-row h-screen items-center">

  <div classNameName="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    {/* <img src="https://source.unsplash.com/random" alt="" classNameName="w-full h-full object-cover"/> 
    </div>

    <div classNameName="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div classNameName="w-full h-100">
  
  
        <h1 classNameName="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
        <input placeholder='naem' classNameName='p-3 bg-my' />
  
        <form classNameName="mt-6" action="#" method="POST">
        <div>
            <label classNameName="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address"
             classNameName="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required
             />
          </div>
  
          <div classNameName="mt-4">
            <label classNameName="block text-gray-700">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password" classNameName="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required
                  />
          </div>
  
          <div classNameName="text-right mt-2">
            <a href="#" classNameName="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
          <button type="submit" classNameName="w-full block bg-red  hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>
  
  
        <hr classNameName="my-6 border-gray-300 w-full"/>
  
        <button type="button" classNameName="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
              <div classNameName="flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" classNameName="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg> 
              <span classNameName="ml-4">
              Log in
              with
              Google</span>
              </div>
            </button>
  
        <p classNameName="mt-8">Need an account? <a href="#" classNameName="text-blue-500 hover:text-blue-700 font-semibold">Create an
                account</a></p>
  
  
      </div>
    </div>
  
  </section>
*/