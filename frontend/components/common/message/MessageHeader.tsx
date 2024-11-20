"use client"

import Image from "next/image";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
const MessageHeader = () => {
    return (
        <div className='h-[75px] items-center  flex border-b w-full px-4'>
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Image
                        src={'/images/user_1.jpg'}
                        width={45}
                        height={45}
                        className='rounded-full w-[45px] h-[45px] object-cover'
                        alt='Avatar for user'
                    />
                    <h4 className="text-lg ">
                        <span className="family2">
                            Daniel Nguyen
                        </span>
                        <span className="text-sm block text-[#777]">Active Now</span>
                    </h4>
                </div>
                <div className="flex flex-1 justify-end items-center gap-4">
                    <div className="p-2 text-sm border rounded-full flex items-center gap-2">
                        <IoCheckmarkOutline />
                        Mark as Read
                    </div>
                    <div className="text-xl text-[#7D22FF] flex items-center justify-center ">
                        <PiDotsThreeCircleFill />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageHeader;