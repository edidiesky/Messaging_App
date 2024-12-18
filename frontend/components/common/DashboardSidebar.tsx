"use client"
import Link from 'next/link';
import React from 'react';
import { FiSettings } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const DashboardSidebar = ({ sidebarlinks }: { sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {

    return (
        <div className=' bg-[#571F6A] lg:block hidden h-[100%] w-[120px] px-2 overflow-auto sticky py-3 top-0'>
            <div className="w-full h-full flex justify-between flex-col gap-3">

                <div className="flex w-full flex-col gap-12">
                    <div className="w-full flex items-center justify-center">
                        <div className="w-[50px] h-[45px] rounded-lg flex bg-[#fff] items-center justify-center text-xl text-[#000]">
                            VE
                        </div>

                    </div>
                    <div className="flex-1 flex items-start flex-col text-xs gap-4">
                        {
                            sidebarlinks?.map((link, index) => {
                                return (
                                    <Link key={index} href={`/workspace/user${link?.tab?.path}`}
                                        className='flex justify-center w-full flex-col text-xs text-[#fff] items-center gap-1'>
                                        <div className="w-[50px] h-[45px] rounded-full flex
                                         bg-[#733590] hover:bg-[#9c48c3da] items-center justify-center text-xl text-[#fff]">
                                            {link.tab?.icon}
                                        </div>
                                        {link?.tab?.title}
                                    </Link>
                                )
                            })
                        }
                        <button
                            className='flex justify-center w-full flex-col text-xs text-[#fff] items-center gap-1'>
                            <div className="w-[50px] h-[45px] rounded-full flex bg-[#733590] hover:bg-[#9c48c3da] items-center justify-center text-xl text-[#fff]">
                                <FiPlus />
                            </div>
                            Add Channel
                        </button>
                    </div>
                </div>
                <div className="flex-1 pb-4 flex items-center justify-end flex-col text-xs gap-4">


                    <button
                        className='flex justify-center w-full flex-col text-xs text-[#fff] items-center gap-1'>
                        Account
                        <div className="w-[50px] h-[45px] rounded-full flex bg-[#2fff66] items-center
                         justify-center text-xl text-[#3E595E]">
                            V
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default DashboardSidebar;