import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Message from './message';
const DashboardLayout = ({ children, sidebarlinks }: { children: React.ReactNode, sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
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
            <div className="w-full h-full flex flex-col">
                {/* messages */}
                <Message />
            </div>
        </div>
    </div>
}


export default DashboardLayout;