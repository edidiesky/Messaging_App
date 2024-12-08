"use client"

import { MockMessages } from "@/constants";
import MessageDetails from "./MessageDetails";

const MessageList = () => {
    // const userInfo = { id: "ryrg34555dgdhfkfgogusga" }
    return (
        <div style={{
            maxHeight: "calc(100% - 80px - 60px)",
        }} className='items-start overflow-auto flex py-4 flex-col gap-2 w-full'>
            {
                MockMessages?.map((message, index) => {
                    // const isSender = userInfo?.id === message?.sender?.id
                    return <MessageDetails key={index} message={message} />
                })
            }
        </div>
    )
}


export default MessageList;