"use client"
import Link from 'next/link';
import React from 'react';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const DashboardSidebar = ({ sidebarlinks }: { sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    return (
        <div className=' bg-[#fff] border-r lg:block hidden h-[100%] overflow-auto sticky top-0'>
            <div className="w-full h-full flex flex-col gap-2">
                <div className="h-[61px] px-4 w-full border-b flex justify-between items-center">
                    <h4 className="text-base md:text-lg family2">Conversations</h4>
                    <span className="text-xl">
                        <MdKeyboardDoubleArrowLeft />
                    </span>
                </div>
                <div className="flex-1 flex items-start flex-col family2 text-base text-[#777] gap-4">
                    <Link href={'/'} className='flex items-center gap-4'>Contacts</Link>
                    <Link href={'/'} className='flex items-center gap-4'>Conversations</Link>
                    <Link href={'/'} className='flex items-center gap-4'>Settings</Link>
                    <Link href={'/'} className='flex items-center gap-4'>Archived</Link>
                </div>
            </div>
        </div>
    );
}


export default DashboardSidebar;