"use client"
import Link from 'next/link';
import React from 'react';
import { FiSettings } from "react-icons/fi";

// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const DashboardSidebar = ({ sidebarlinks }: { sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    const settingsLinkData = {
        id: 200,
        tab: {
            icon: <FiSettings fontSize={"20px"} />,
            title: "Settings",
            path: "/profile",
        }
    }
    return (
        <div className=' bg-[#fff] border-r lg:block hidden h-[100%] w-[100px] overflow-auto sticky top-0'>
            <div className="w-full h-full flex flex-col gap-3">
                <div className="h-[63px] px-4 w-full border-b flex justify-center items-center">
                    <h4 className="text-lg md:text-xl family2">NC</h4>
                    <span className="text-xl">
                        {/* <MdKeyboardDoubleArrowLeft /> */}
                    </span>
                </div>
                <div className="flex-1 flex items-start flex-col family2 text-base">
                    {
                        sidebarlinks?.map((link, index) => {
                            return (
                                <Link key={index} href={`/dashboard/user${link?.tab?.path}`} className='flex justify-center w-[90%] mx-auto rounded-full px-4 py-3 hover:bg-[#fafafa] items-center gap-4'>
                                    <span className="text-[#777]">{link.tab?.icon}</span>
                                    {/* {link?.tab?.title} */}
                                </Link>
                            )
                        })
                    }
                    <Link href={`/dashboard/user${settingsLinkData?.tab?.path}`} className='flex justify-center w-[90%] mx-auto rounded-full px-4 py-3 hover:bg-[#fafafa] items-center gap-4'>
                        <span className="text-[#777]">{settingsLinkData.tab?.icon}</span>
                        {/* {settingsLinkData?.tab?.title} */}
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default DashboardSidebar;