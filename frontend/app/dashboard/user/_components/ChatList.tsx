import { MockChatType } from '@/constants';
import React from 'react';
import Image from "next/image";

const ChatList = ({ chat }: { chat: MockChatType }) => {
    // const chatLength = chat?.lastMessage?.substring(0, 35)
    const chatLength = chat?.lastMessage

    return (
        <div className="w-full p-3 px-4 lg:pl-6 hover:bg-[#fafafa] cursor-pointer border-b flex flex-col gap-3">
            <div className="w-full flex items-start justify-between">
                <div className="flex flex-1 items-center gap-2">
                    <Image
                        src={chat?.image}
                        width={35}
                        height={35}
                        className='rounded-full w-[35px] h-[35px] object-cover'
                        alt='Avatar for user'
                    />
                    <h4 className="text-sm flex-1 md:text-base">
                        <span className="family2">
                            {chat?.name}
                        </span>
                        <span className="text-sm block">
                            {chat?.email}
                        </span>
                    </h4>
                </div>
                <span className="text-xs">{chat?.createdAt}</span>
            </div>
            <h5 className="text-sm  text-[#3c3c3c]">
                {chatLength?.length > 34 ? `${chatLength}...` : chatLength}
            </h5>
        </div>
    )
}


export default ChatList;