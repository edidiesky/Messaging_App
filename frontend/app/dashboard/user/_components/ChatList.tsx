import { MockChatType } from '@/constants';
import React from 'react';
;
import { BsSearch } from 'react-icons/bs';

const ChatList = ({ chat, type }: { chat: MockChatType, type?: string }) => {
    const chatLength = chat?.lastMessage?.substring(0, 40)
    // const chatLength = chat?.lastMessage
    if (type === "group") {
        return (
            <div className="w-full p-3 px-4 lg:pl-6 hover:bg-[#fafafa] cursor-pointer border-b flex flex-col gap-3">
                <div className="w-full flex items-start justify-between">
                    <div className="flex flex-1 items-center gap-2">
                      <div className="w-[55px] h-[55px] relative">
                            <Image
                                src={'/images/user_1.jpg'}
                                width={35}
                                height={35}
                                className='rounded-full w-[35px] h-[35px] absolute -left-1 top-1 object-cover'
                                alt='Avatar for user'
                            />
                            <Image
                                src={'/images/user_2.jpg'}
                                width={30}
                                height={30}
                                className='rounded-full w-[30px] h-[30px] absolute right-0 top-0 object-cover'
                                alt='Avatar for user'
                            />
                            <Image
                                src={'/images/user_3.jpg'}
                                width={25}
                                height={25}
                                className='rounded-full w-[25px] h-[25px] absolute right-2 bottom-2 object-cover'
                                alt='Avatar for user'
                            />
                      </div>
                        <h4 className="text-sm flex-1 md:text-base">
                            <div className="flex items-center justify-between flex-1">
                                <span className="family2">
                                    {/* {chat?.name} */}
                                    Dunica Team
                                </span>
                                <span className="text-xs">{chat?.createdAt}</span>
                            </div>
                            <span className="text-sm block">
                                <span className="text-sm  text-[#3c3c3c]">
                                    {/* {chatLength?.length > 31 ? `${chatLength}...` : chatLength} */}
                                    24 Team
                                </span>
                            </span>
                        </h4>

                    </div>

                </div>
            </div>
        )
    }
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
                        <div className="flex items-center justify-between flex-1">
                            <span className="family2">
                                {chat?.name}
                            </span>
                            <span className="text-xs">{chat?.createdAt}</span>
                        </div>
                        <span className="text-sm block">
                            <span className="text-sm  text-[#3c3c3c]">
                                {chatLength?.length > 31 ? `${chatLength}...` : chatLength}
                            </span>
                        </span>
                    </h4>

                </div>

            </div>
            {/* <h5 className="text-sm  text-[#3c3c3c]">
                {chatLength?.length > 34 ? `${chatLength}...` : chatLength}
            </h5> */}
        </div>
    )
}


export default ChatList;