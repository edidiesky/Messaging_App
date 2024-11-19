"use client"
import React from 'react';
import MessageHeader from './MessageHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const Message = () => {
    return (
        <div className='h-full flex flex-col gap-4 overflow-hidden'>
            <MessageHeader />
            <MessageList/>
            <MessageForm/>
        </div>
    )
}


export default Message;