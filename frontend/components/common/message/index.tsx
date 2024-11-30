"use client"
import React from 'react';
import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const Message = ({ setActive, active }: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div className='h-full flex-1 flex flex-col overflow-hidden'>

            <MessageHeader active={active} setActive={setActive} />
            <MessageList />
            <MessageForm />
        </div>
    )
}


export default Message;