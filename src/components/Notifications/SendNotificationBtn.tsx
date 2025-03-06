"use client";
import { useAppSelector } from '@/lib/hooks';
import React, { useRef } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios';
import SendPushMessage from './sendPush';
const api = process.env.NEXT_PUBLIC_FIREBASE_funapi;

export default function SendNotificationBtn() {
    const user = useAppSelector(state => state.authReducer.user);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const formRef = useRef<HTMLFormElement>(null);
    const author = {
        name: user?.displayName,
        email: user?.email,
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const title = formData.get("title");
            const body = formData.get("body");
            axios.post(`${api}/v1/notification`, {
                title,
                body,
                author,
            },
                {
                    headers: {
                        Authorization: user?.token
                    },
                })
            // dispatch(pushLatestNotification({
            //     message: {
            //         title,
            //         body,
            //     },
            //     author,
            //     date: format(new Date(), "PPp")
            // }))
            onClose();
        }
    }
    const MyModal = () => (<>
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'} scrollBehavior='inside' >
            <ModalOverlay
                bg='blackAlpha.100'
                brightness={100}
                backdropFilter='blur(10px)' />
            <ModalContent>
                <ModalHeader>
                    Enter message
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div >
                        <form className="flex flex-col" onSubmit={handleSubmit} ref={formRef}>
                            <label htmlFor="title"> Title</label>
                            <input type="text" name="title" id="title"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required />
                            <label htmlFor="body"> Body</label>
                            <textarea name="body" id="body"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required />
                            <button type="submit" className="rounded-lg bg-blue-500 text-white py-1 px-3 max-w-max mt-8">Send</button>
                        </form>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>)
    const handleClick = () => {
        if (user?.isAdmin) {
            onOpen();
        }
    }
    return (
        <>
            <div className="py-2 text-white text-[3rem] font-bold rounded-xl transition duration-500"
                onClick={handleClick}
            ><IoIosNotificationsOutline className="text-3xl rounded-full bg-yellow-500 hover:animate-wiggle duration-150" />
                {isOpen && <MyModal />}

            </div>
            <SendPushMessage />
        </>
    )
}
