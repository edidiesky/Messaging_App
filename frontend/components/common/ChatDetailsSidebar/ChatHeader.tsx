"use client"

import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
const ChatHeader = () => {
    return (
        <div className='min-h-[63px] items-center sticky top-0 flex border-b w-full px-4'>
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
                    {/* <Image
                        src={'/images/user_1.jpg'}
                        width={40}
                        height={40}
                        className='rounded-full w-[40px] h-[40px] object-cover'
                        alt='Avatar for user'
                    /> */}
                    <h4 className="text-lg">
                        <span className="family2">
                           Details
                        </span>
                    </h4>
                </div>
                <div className="flex flex-1 justify-end items-center gap-2">
                  
                    <div className="text-xl h-10 w-10 rounded-full hover:bg-[#fafafa] cursor-pointer flex items-center justify-center ">
                        <RxCross1/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChatHeader;