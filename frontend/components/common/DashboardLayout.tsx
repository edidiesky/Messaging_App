"use client"
import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Message from './message';
import ChatDetailsSidebar from './ChatDetailsSidebar';
import { AnimatePresence } from 'framer-motion';
const DashboardLayout = ({ children, sidebarlinks }: { children: React.ReactNode, sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    const [sidebaractive, setSidebarActive] = useState(false)
    return <div className="w-full h-[100vh] p-2 bg-[#571F6A] sticky flex top-0 overflow-hidden flex-col items-start">
        {/* Header */}
        {/* <DashboardHeader /> */}
        <div  className="w-full h-full flex items-start sticky top-0">
            <div className="flex lg:w-[550px] h-full items-start">
                {/* sidebar */}
                <DashboardSidebar sidebarlinks={sidebarlinks} />
                {/* outlet */}
                <div className="w-full bg-[#fff] border-r h-full rounded-l-2xl">{children}</div>
                
            </div>
            <div className="w-full h-full rounded-r-2xl overflow-hidden bg-[#fff] flex items-start">
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