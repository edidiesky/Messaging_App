"use client"
import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Message from './message';
import ChatDetailsSidebar from './ChatDetailsSidebar';
import { AnimatePresence } from 'framer-motion';
const DashboardLayout = ({ children, sidebarlinks }: { children: React.ReactNode, sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    const [sidebaractive, setSidebarActive] = useState(false)
    return <div className="w-full h-[100vh] sticky flex top-0 overflow-hidden flex-col items-start">
        {/* Header */}
        <DashboardHeader />
        <div style={{
            height: "calc(100vh - 80px)"
        }} className="w-full flex items-start sticky top-0">
            <div className="flex lg:w-[650px] border-r h-full items-start">
                {/* sidebar */}
                <DashboardSidebar sidebarlinks={sidebarlinks} />
                {/* outlet */}
                {children}
            </div>
            <div className="w-full h-full flex items-start">
                {/* messages */}
                <Message
                    active={sidebaractive}

                    setActive={setSidebarActive}
                />
                <ChatDetailsSidebar
                    active={sidebaractive}
                    setActive={setSidebarActive}
                />
                {/* <AnimatePresence mode='wait'>
                    {
                        sidebaractive &&
                        <ChatDetailsSidebar
                            active={sidebaractive}
                            setActive={setSidebarActive}
                        />
                    }
                </AnimatePresence> */}
            </div>
        </div>
    </div>
}


export default DashboardLayout;