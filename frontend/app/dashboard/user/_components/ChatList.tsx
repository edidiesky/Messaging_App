import { MockChatType } from '@/constants';
import React from 'react';
import Image from "next/image";

const ChatList = ({ chat }: { chat: MockChatType }) => {
    return (
        <div className="w-full p-2 px-4 hover:bg-[#eee] cursor-pointer border-b flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <Image
                    src={chat?.image}
                    width={35}
                    height={35}
                    className='rounded-full w-[35px] h-[35px] object-cover'
                    alt='Avatar for user'
                />
                <h4 className="text-sm">
                    <span className="family2">
                        {chat?.name}
                    </span>
                </h4>
            </div>
            <h5 className="text-xs text-[#777]">
                {chat?.lastMessage}
            </h5>
        </div>
    )
}


export default ChatList;