"use client"

import { MockMessages } from "@/constants";
import MessageDetails from "./MessageDetails";

const MessageList = ({ setActiveThreadSidebar }:{
    setActiveThreadSidebar: React.Dispatch<React.SetStateAction<boolean>>

}) => {
    // const userInfo = { id: "ryrg34555dgdhfkfgogusga" }
    return (
        <div style={{
            maxHeight: "calc(100% - 80px - 60px)",
        }} className='items-start overflow-auto flex py-4 flex-col gap-2 w-full'>
            {
                MockMessages?.map((message, index) => {
                    // const isSender = userInfo?.id === message?.sender?.id
                    return <MessageDetails setActiveThreadSidebar={setActiveThreadSidebar} key={index} message={message} />
                })
            }
        </div>
    )
}


export default MessageList;