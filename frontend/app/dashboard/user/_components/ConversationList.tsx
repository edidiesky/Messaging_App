"use client"
import Link from 'next/link';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { GoChevronDown } from "react-icons/go";
import { MockUserList, sidebarLinksData } from "@/constants";
import ChatList from "./ChatList";
import { BsSearch } from 'react-icons/bs';

const ConversationList = ({ }) => {
    return (
        <div style={{
            maxHeight: "calc(100% - 63px)",
            height: "calc(100% - 63px)",
        }} className='items-start px-4 flex overflow-auto flex-col pt-4 w-full'>
            {/* search field
            <form action="" className='w-full h-[50px] px-3 flex items-center relative'>
                <span className="w-4 h-4 absolute left-8">
                    <BsSearch />
                </span>
                <input type="text" placeholder='Search anything' className="text-base pl-12 font-normal bg-white rounded-full w-full " />
            </form> */}
            {/* messages */}
            <div className="w-full flex flex-col">
                {
                    sidebarLinksData?.slice(0, 2).map((link, index) => {
                        return (
                            <Link key={index} href={`/workspace/user${link?.tab?.path}`}
                                className='flex w-full hover:bg-[#F3F3EE] rounded-lg px-4 py-3 items-center text-sm gap-4'>
                                {link.tab?.icon}
                                {link?.tab?.title}
                            </Link>
                        )
                    })
                }
            </div>
           <div className="w-full flex flex-col">
                {/* channels */}
                <div className="w-full px-2">
                    <Collapsible style={{ width: "100%" }}>
                        <CollapsibleTrigger style={{ width: "100%" }}>
                            <button className='flex w-full hover:bg-[#F3F3EE] rounded-lg px-4 py-3 items-center text-sm gap-4'>
                                <GoChevronDown /> <span className="text-sm">Channels</span>
                            </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {["General", 'Frontend Guys', 'Backend Guys', 'Dev Ops'].map((data, index) => {
                                return <div key={index} className="w-full px-4 text-sm">{data}</div>
                            })}
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {/* direct messages */}
                <div className="w-full px-2">
                    <Collapsible style={{ width: "100%" }}>
                        <CollapsibleTrigger style={{ width: "100%" }}>
                            <button className='flex w-full hover:bg-[#F3F3EE] rounded-lg px-4 py-3 items-center text-sm gap-4'>
                                <GoChevronDown /> <span className="text-sm">Direct Messages</span>
                            </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {["General", 'Frontend Guys', 'Backend Guys', 'Dev Ops'].map((data, index) => {
                                return <div key={index} className="w-full px-4 text-sm">{data}</div>
                            })}
                        </CollapsibleContent>
                    </Collapsible>
                </div>
           </div>
        </div>
    )
}


export default ConversationList;