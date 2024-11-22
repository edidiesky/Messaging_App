"use client"

import { MockUserList } from "@/constants";
import ChatList from "./ChatList";

const ConversationList = () => {
    return (
        <div style={{
            maxHeight: "calc(100% - 63px)",
            height: "calc(100% - 63px)",
        }} className='items-start flex flex-col gap-4 w-full'>

            <div className="w-full h-[100%] overflow-auto flex flex-col">
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