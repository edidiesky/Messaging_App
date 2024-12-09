"use client"
import Link from 'next/link';
import { HiUserGroup } from "react-icons/hi2";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { FaHome } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { MockUserList, channelListsData } from "@/constants";
import ChatList from "./ChatList";
import Image from "next/image";
// import { IoMdSettings } from "react-icons/io";
import { BiLink, BiPlus } from "react-icons/bi";
const ConversationList = ({ }) => {
    return (
        <div style={{
            maxHeight: "calc(100% - 80px)",
            height: "calc(100% - 80px)",
        }} className='items-start px-4 flex overflow-auto flex-col pt-4 w-full'>
            {/* search field
            <form action="" className='w-full h-[50px] px-3 flex items-center relative'>
                <span className="w-4 h-4 absolute left-8">
                    <BsSearch />
                </span>
                <input type="text" placeholder='Search anything' className="text-base pl-12 font-normal bg-white rounded-full w-full " />
            </form> */}
            {/* messages */}
            {/* <div className="w-full flex flex-col">
                {
                    sidebarLinksData?.slice(0, 2).map((link, index) => {
                        return (
                            <Link key={index} href={`/workspace/user${link?.tab?.path}`}
                                className='flex w-full hover:bg-[#8c5a9b16] rounded-full family2 px-4 py-3 items-center text-sm gap-4'>
                                {link.tab?.icon}
                                {link?.tab?.title}
                            </Link>
                        )
                    })
                }
            </div> */}
            <div className="w-full flex flex-col gap-[5px]">
                <div className="flex flex-col gap-2 w-full">
                    <span className='flex w-full rounded-full px-4 py-[6px] items-center justify-between text-sm gap-4'>
                        <div className="flex items-center gap-2">
                            <span className="text-base">Getting Started</span>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                            <GoChevronDown fontSize={'16px'} />
                            <span className="cursor-pointer flex items-center justify-center">
                                <BiPlus fontSize={'16px'} />
                            </span>
                        </div>
                    </span>
                    <div className="w-full flex flex-col gap-1">
                        {[{ name: "Home", icon: <FaHome /> }, { name: "Members", icon: <HiUserGroup /> }].map((data, index) => {
                            return (
                                <div key={index} className="w-[90%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#8c5a9b16] px-3 gap-3 text-sm">
                                    <div className="flex items-center justify-center">
                                        {data?.icon}
                                    </div>
                                    {data.name}</div>
                            )
                        })}
                    </div>
                </div>
                {/* channels */}
                <div className="w-full">
                    <Collapsible className='space-y-2' style={{ width: "100%" }}>
                        <CollapsibleTrigger style={{ width: "100%" }}>
                            <span className='flex w-full rounded-full px-4 py-[6.5px] items-center justify-between text-sm gap-4'>
                                <div className="flex items-center gap-2">
                                    <span className="text-base">Channels</span>
                                </div>
                                <div className="flex items-center justify-end gap-1">
                                    <GoChevronDown fontSize={'16px'} />
                                    <span className="cursor-pointer flex items-center justify-center">
                                        <BiPlus fontSize={'16px'} />
                                    </span>
                                </div>
                            </span>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {channelListsData.slice(0, 5).map((data, index) => {
                                return (
                                    <div key={index} className="w-[90%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#8c5a9b16] px-3 gap-3 text-sm">
                                        <div className="w-6 h-6 bg-[#8c5a9b16] rounded-full flex items-center justify-center">
                                            <BiLink fontSize={'14px'} />
                                        </div>
                                        {data.name}</div>
                                )
                            })}
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {/* direct messages */}
                <div className="w-full">
                    <Collapsible className='space-y-2' style={{ width: "100%" }}>
                        <CollapsibleTrigger style={{ width: "100%" }}>
                            <span className='flex w-full rounded-full px-4 py-[6.5px] items-center justify-between text-sm gap-4'>
                                <div className="flex items-center gap-2">
                                    <span className="text-base">Direct Messages</span>
                                </div>
                                <div className="flex items-center justify-end gap-1">
                                    <GoChevronDown fontSize={'16px'} />
                                    <span className="w-6 h-6 rounded-full hover:bg-[#eee] cursor-pointer flex items-center justify-center">
                                        <BiPlus fontSize={'14px'} />
                                    </span>
                                </div>
                            </span>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {MockUserList.map((data, index) => {
                                return (
                                    <div key={index} className="w-[95%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#8c5a9b16] px-3 gap-3 text-sm">
                                        <Image
                                            width={30}
                                            height={30}
                                            className='w-[30px] h-[30px] rounded-full object-cover'
                                            src={data?.image}
                                            alt="message_image"
                                        />
                                        {data.name}</div>
                                )
                            })}
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </div>
    )
}


export default ConversationList;