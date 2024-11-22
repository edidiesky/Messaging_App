import { MockChatType } from '@/constants';
import React from 'react';
import Image from "next/image";

const ChatList = ({ chat }: { chat: MockChatType }) => {
    // const chatLength = chat?.lastMessage?.substring(0, 35)
    const chatLength = chat?.lastMessage

    return (
        <div className="w-full p-2 px-4 lg:pl-8 hover:bg-[#eee] cursor-pointer border-b flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <Image
                    src={chat?.image}
                    width={35}
                    height={35}
                    className='rounded-full w-[35px] h-[35px] object-cover'
                    alt='Avatar for user'
                />
                <h4 className="text-sm md:text-base">
                    <span className="family2">
                        {chat?.name}
                    </span>
                </h4>
            </div>
            <h5 className="text-sm  text-[#777]">
                {chatLength?.length > 34 ? `${chatLength}...` : chatLength}
            </h5>
        </div>
    )
}


export default ChatList;