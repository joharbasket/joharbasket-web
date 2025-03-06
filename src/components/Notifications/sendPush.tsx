"use client";
import { sendPushMessageAction } from '@/app/actions';
import React, { useState } from 'react'

export default function SendPushMessage() {
    const [details, setDetails] = useState({
        userid: '',
        title: '',
        message: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        setDetails((prev: any) => {
            return {
                ...prev, [id]: e.target.value
            }
        })

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendPushMessageAction(details.userid, details.title, details.message)
    }

    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit}>
                <label>Enter user id</label>
                <input type='text' id='userid' value={details.userid} onChange={handleChange} />
                <label>Enter title</label>
                <input type='text' id='title' value={details.title} onChange={handleChange} />
                <label>Enter message</label>
                <input type='text' id='message' value={details.message} onChange={handleChange} />
                <button type='submit'>Send</button>
            </form>

        </div>
    )
}
