"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { offDeleteMessageModal } from '@/services/modalSlice';
import Image from "next/image";
import { slide } from '@/constants/framer';
import { useLoginMutation } from '@/services/userApi';
import toast from "react-hot-toast";
import Loader from '../../common/loader';
const DeleteMessageModal = () => {
    const dispatch = useDispatch()
    const { deletemessagemodal } = useSelector((store: { modal: { deletemessagemodal: boolean } }) => store.modal);
    const [login, { isLoading, isSuccess }] = useLoginMutation();
    const handleoffDeleteMessageModal = () => {
        dispatch(offDeleteMessageModal(""))
    }
    const data = {
        text: "Absolutely consistency is key for usability. We'll ensure that the layout is uniform across..",
        createdAt: "20th November 2024",
        image: "",
        senderid: "ryrg34555dgdhfkfgogusga",
        sender: {
            name: "Kristin Watson",
            image: "/images/user_2.jpg",
            id: "ryrg34555dgdhfkfgogusga"
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1.2,
                },
            }}
            animate={{ opacity: 1 }}
            className='h-[100vh] bg-[#16161663] w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={deletemessagemodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[570px] md:max-w-[750px]  md:min-h-[280px] justify-center relative items-start md:rounded-[10px] flex flex-col gap-4 p-6 bg-white">

                <div className="w-full flex items-center justify-between gap-1">
                    <h3 className="text-3xl md:text-3xl family2">
                        Delete Message
                    </h3>
                    <div onClick={() => dispatch(offDeleteMessageModal(""))} className="text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                        <RxCross2 />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-4">
                        <span className="text-sm md:text-base">
                          Are you sure you want to delete this message? This cannot be undone!
                        </span>
                        <div className="w-full border rounded-lg p-4 flex items-center gap-4">
                            {data?.sender?.image ? (
                                <Image
                                    width={46}
                                    height={46}
                                    className='rounded-full w-[46px] h-[46px] object-cover'
                                    src={data?.sender?.image}
                                    alt="user_image"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full  flex items-center justify-center text-lg text-white bg-[#571F6A]">
                                    {data?.sender?.name && data?.sender?.name[0]}
                                </div>
                            )}

                            <div className="flex-1 flex items-start flex-col justify-start gap-1">
                                <div className="flex w-full items-center gap-2">
                                    <span className="text-sm md:text-base family2 text-dark">{data?.sender?.name}</span>
                                    <span className="text-xs md:text-sm text-dark">{data?.createdAt}</span>
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <span className="max-w-[250px] md:max-w-[500px] text-sm md:text-base leading-[1.6] text-dark">
                                        {data?.text}
                                    </span>
                                    {
                                        data?.image && <div className="h-[280px] relative w-[250px] md:w-[450px]">
                                            <Image
                                                fill
                                                className='rounded-lg  object-cover'
                                                src={data?.image}
                                                alt="message_image"
                                            />
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-full text-sm flex items-center justify-end gap-3">
                        <button
                            data-test="GroupNameModal_button_1"
                            onClick={handleoffDeleteMessageModal}
                            className="p-3 px-6 hover:opacity-[.5] text-[#000] hover:text-[#fff] flex items-center justify-center cursor-pointer border hover:bg-[#000] rounded-full regular"
                        >
                            Cancel
                        </button>
                        <button
                            data-test="GroupNameModal_button_2"
                            onClick={handleoffDeleteMessageModal}
                            className="p-3 px-6 hover:opacity-[.5] text-[#fff] flex items-center justify-center cursor-pointer  bg-[#f73760] rounded-full regular"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}



export default DeleteMessageModal;