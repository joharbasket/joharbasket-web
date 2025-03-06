"use client";
import { useAppSelector } from '@/lib/hooks';
import React from 'react'

export default function Greetings() {
    const user = useAppSelector(state => state.authReducer.user);
  return (
    <div className=" p-4">
         <h1 className="font-bold text-5xl "> Welcome {user?.displayName}</h1>
    </div>
  )
}
