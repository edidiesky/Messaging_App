"use client"
import { MockMessageType } from "@/constants";
import Image from "next/image";

const MessageDetails = ({ message }: { message: MockMessageType }) => {

    return (

        <div className="flex w-full p-3 px-6 hover:bg-[#8c5a9b16] justify-start items-start gap-3">
            {message?.sender?.image ? (
                <Image
                    width={46}
                    height={46}
                    className='rounded-full w-[46px] h-[46px] object-cover'
                    src={message?.sender?.image}
                    alt="user_image"
                />
            ) : (
                <div className="w-10 h-10 rounded-full  flex items-center justify-center text-lg text-white bg-[#2f3336]">
                    {message?.sender?.name && message?.sender?.name[0]}
                </div>
            )}

            <div className="flex-1 flex items-start flex-col justify-start gap-1">
                <div className="flex w-full items-center gap-2">
                    <span className="text-sm md:text-lg family2 text-dark">{message?.sender?.name}</span>
                    <span className="text-xs md:text-sm text-dark">{message?.createdAt}</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <span className="max-w-[250px] md:max-w-[500px] text-sm md:text-base leading-[1.6] text-dark">
                        {message?.text}
                    </span>
                    {
                        message?.image && <div className="h-[280px] relative w-[250px] md:w-[450px]">
                            <Image
                                fill
                                className='rounded-lg  object-cover'
                                src={message?.image}
                                alt="message_image"
                            />
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}


export default MessageDetails;