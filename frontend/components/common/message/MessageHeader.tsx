"use client"

import Image from "next/image";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
const MessageHeader = () => {
    return (
        <div className='min-h-[63px] items-center sticky top-0 flex border-b w-full px-4'>
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
                    <Image
                        src={'/images/user_1.jpg'}
                        width={40}
                        height={40}
                        className='rounded-full w-[40px] h-[40px] object-cover'
                        alt='Avatar for user'
                    />
                    <h4 className="text-base">
                        <span className="family2">
                            Daniel Nguyen
                        </span>
                        <span className="text-sm block text-[#777]">Active Now</span>
                    </h4>
                </div>
                <div className="flex flex-1 justify-end items-center gap-2">
                    <div className="p-2 text-sm border cursor-pointer rounded-full flex items-center gap-2">
                        <IoCheckmarkOutline />
                        Mark as Read
                    </div>
                    <div className="text-2xl text-[#7D22FF] cursor-pointer flex items-center justify-center ">
                        <PiDotsThreeCircleFill fontSize={'30px'} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageHeader;