"use client"

import Image from "next/image";
import { MockUserList } from "@/constants";
import { GoPlus } from "react-icons/go";
import { TbDotsVertical } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

import { PiDotsThreeCircleFill } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
const MessageHeader = ({ setActive, active }: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div style={{
            backdropFilter: "blur(54px)"
        }} className='bg-[rgba(255,255,255,0.2)] min-h-[80px] items-center sticky top-0 flex border-b border-[#F3F3EE] w-full px-4'>
            <div className="flex w-full items-center justify-between gap-4">
                {/* <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
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
                </div> */}
                <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
                  
                    <h4 className="text-xl">
                        <span className="family2">
                            # General Chat
                        </span>
                        <span className="text-sm block">10 Members Online</span>
                   </h4>
                </div>

                <div className="flex flex-1 justify-end items-center gap-6">
                    {/* <div className="p-2 text-sm border cursor-pointer rounded-full flex items-center gap-2">
                        <IoCheckmarkOutline />
                        Mark as Read
                    </div> */}

                    <div className="flex items-center">
                        {
                            MockUserList?.map((user, index) => {
                                return (
                                    <div key={index} className={`${index !== 0 ? "-ml-2 border-[#3e3aff] border-2 p-2" : "p-2"} rounded-full w-[40px] h-[40px] relative`}>
                                        <Image
                                            src={user?.image}
                                            fill
                                            className='rounded-full relative object-cover'
                                            alt='Avatar for user'
                                        />

                                    </div>
                                )
                            })
                        }
                        <span className="w-[40px] h-[40px] -ml-2 bg-[#3e3aff] text-white p-2 text-base border-2 border-[#fff] rounded-full flex items-center justify-center">
                            <GoPlus />
                        </span>
                    </div>
                    <span className="w-[40px] h-[40px] bg-[#fff] text-[#000] hover:bg-[#eee] text-base rounded-full flex items-center justify-center">
                        <TbDotsVertical />
                    </span>
                    <div onClick={() => setActive(!active)} className="w-[40px] h-[40px] bg-[#fff] text-[#000] hover:bg-[#eee] text-base rounded-full flex items-center justify-center">
                        <FiSettings fontSize={'30px'} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageHeader;