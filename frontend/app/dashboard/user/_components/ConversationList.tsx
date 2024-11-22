"use client"

import { MockUserList } from "@/constants";
import ChatList from "./ChatList";

const ConversationList = () => {
    return (
        <div style={{
            maxHeight: "calc(100% - 75px)"
        }} className='items-start overflow-auto flex flex-col gap-4 w-full'>

            <div className="w-full h-full overflow-auto flex flex-col">
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