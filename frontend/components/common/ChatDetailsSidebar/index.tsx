import React from 'react';
import ChatHeader from './ChatHeader';
import UserInfo from './UserInfo'

const ChatDetailsSidebar = () => {
    return (
        <div className='h-full w-[300px] flex flex-col border-l overflow-hidden'>
            <ChatHeader/>
            <UserInfo/>
        </div>
    )
}


export default ChatDetailsSidebar;