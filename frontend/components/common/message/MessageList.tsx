"use client"

import { MockMessages } from "@/constants";
import MessageDetails from "./MessageDetails";

const MessageList = () => {
    const userInfo = { id: "ryrg34555dgdhfkfgogusga" }
    return (
        <div style={{
            maxHeight: "calc(100% - 75px - 100px)"
        }} className='items-start overflow-auto flex flex-col gap-4 w-full px-4'>
            {
                MockMessages?.map((message, index) => {
                    const isSender = userInfo?.id === message?.sender?.id
                    return <MessageDetails isSender={isSender} key={index} message={message} />
                })
            }
        </div>
    )
}


export default MessageList;