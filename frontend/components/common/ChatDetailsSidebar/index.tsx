"use client"
import React from 'react';
import { motion } from 'framer-motion'
import ChatHeader from './ChatHeader';
import ChatInfo from './ChatInfo'
const chatSlideLeft = {
    initial: {
        right: "-100%",
        width:"0"
    },
    enter: {
        right: "0%",
        width: "300px",
        transition: {
            duration: .6,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        right: "-100%",
        width: "0",
        transition: {
            duration: .6,
            ease: [0.76, 0, 0.24, 1],

        },
    },
};
const ChatDetailsSidebar = ({ active, setActive }: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <motion.div
            variants={chatSlideLeft}
            initial='initial'
            exit='exit'
            animate={active ? "enter" : "exit"}
            className='h-full relative flex flex-col border-l overflow-hidden'>
            <ChatHeader
                setActive={setActive} 
            />
            <ChatInfo />
        </motion.div>
    )
}


export default ChatDetailsSidebar;