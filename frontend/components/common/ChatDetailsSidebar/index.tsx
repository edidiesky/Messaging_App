import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInfo from './ChatInfo'

const ChatDetailsSidebar = () => {
    return (
        <div className='h-full w-[300px] flex flex-col border-l overflow-hidden'>
            <ChatHeader/>
            <ChatInfo/>
        </div>
    )
}


export default ChatDetailsSidebar;