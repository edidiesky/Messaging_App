"use client"
import { MockMessageType } from "@/constants";
import Image from "next/image";

const MessageDetails = ({ message, isSender }: { message: MockMessageType, isSender: boolean }) => {

    return (

        <div className="w-full flex px-2 flex-col gap-4">
            {/* first receiver Message */}
            {isSender ? (
                <div className="w-full flex items-center justify-end">
                    <div className="flex w-full justify-end items-start gap-3">
                        <div className="flex-1 flex items-end flex-col justify-end gap-1">
                            <span className="text-sm md:text-base family2  text-dark">Me</span>

                            <span className="max-w-[200px] md:max-w-[400px] rounded-[40px]  text-sm md:text-sm leading-[1.6]
                             text-white flex items-center bg-[#7D22FF] justify-center py-3 md:py-4 px-4 md:px-6">
                                {message?.text}
                            </span>
                            <span className="text-xs  text-dark">{message?.createdAt}</span>
                        </div>
                        {message?.sender?.image ? (
                            <Image
                                src={message?.sender?.image}
                                alt="user_image"
                                width={40}
                                height={40}
                                className='rounded-full w-[40px] h-[40px] object-cover'
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-lg text-white bg-[#2f3336]">
                                {message?.sender?.name && message?.sender?.name[0]}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="w-full flex items-center justify-start gap-3">
                    <div className="flex w-full justify-start items-start gap-3">
                        {message?.sender?.image ? (
                            <Image
                                width={40}
                                height={40}
                                className='rounded-full w-[40px] h-[40px] object-cover'
                                src={message?.sender?.image}
                                alt="user_image"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full  flex items-center justify-center text-lg text-white bg-[#2f3336]">
                                {message?.sender?.name && message?.sender?.name[0]}
                            </div>
                        )}

                        <div className="flex-1 flex items-start flex-col justify-start gap-1">
                            <span className="text-sm md:text-base family2  text-dark">{message?.sender?.name}</span>
                            <span className="max-w-[200px] md:max-w-[400px] rounded-[40px]  text-sm md:text-sm leading-[1.6] text-dark flex items-center bg-[#e9e9e9] justify-center p-3 md:py-4 px-4 md:px-6">
                                {message?.text}
                            </span>
                            <span className="text-xs  text-dark">{message?.createdAt}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default MessageDetails;