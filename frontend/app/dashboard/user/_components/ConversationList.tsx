"use client"

import { MockUserList } from "@/constants";
import ChatList from "./ChatList";
import { BsSearch } from 'react-icons/bs';

const ConversationList = () => {
    return (
        <div style={{
            maxHeight: "calc(100% - 63px)",
            height: "calc(100% - 63px)",
        }} className='items-start flex overflow-auto flex-col pt-4 gap-4 w-full'>
            {/* search field */}
            <form action="" className='w-full h-[50px] px-3 flex items-center relative'>
                <span className="w-4 h-4 absolute left-8">
                    <BsSearch />
                </span>
                <input type="text" placeholder='Search anything' className="text-base pl-12 font-normal bg-white rounded-full w-full " />
            </form>
            {/* messages */}
            <div className="w-full flex flex-col">
                <h4 className="text-sm text-[#3c3c3c] p-1 px-4 lg:pl-6">GROUPS & CHANNELS</h4>
                {
                    MockUserList?.slice(0, 2).map((chat, index) => {
                        return <ChatList type={'group'} key={index} chat={chat} />
                    })
                }
            </div>
            {/* messages */}
            <div className="w-full flex flex-col">
                <h4 className="text-sm text-[#3c3c3c] uppercase p-1 px-4 lg:pl-6">All Messages</h4>
                {
                    MockUserList?.map((chat, index) => {
                        return <ChatList key={index} chat={chat} />
                    })
                }
            </div>
        </div>
    )
}


export default ConversationList;