import React from 'react';
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux'
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { onGroupNameModal } from '@/redux/slices/modalSlice';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
const Header = ({ title }: { title: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-[80px] sticky top-0 items-center border-b border-[#bebebe3c] justify-between flex w-full px-4'>
            <div className="flex-1 flex items-center gap-2">
                <Popover>
                    <PopoverTrigger>
                        <h4 className="text-lg flex p-2 cursor-pointer text-[#ddd] rounded-lg hover:bg-[#35373ed5] justify-between items-center gap-1 md:text-lg">
                            <span className="family2">
                                {title}
                            </span>
                            <span className="text-lg">
                                <FiChevronDown />
                            </span>
                        </h4>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <div className="max-w-[450px] shadow-lg rounded-2xl bg-[#2B2D31] flex flex-col">
                            <div className="w-full max-h-[250px] overflow-auto flex flex-col">
                                <div className="w-full flex items-center gap-2 hover:bg-[#35373ed5] cursor-pointer border-b border-[#35373ed5] p-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-lg text-[#777] bg-[#000]">EV</div>
                                    <h4 className="text-base">
                                        <span className="family2">
                                            Victor WorkSpace
                                        </span>
                                        <span className="text-sm block">A workspace dedicated for development of clients apps</span>
                                    </h4>
                                </div>
                                <div className="w-full flex items-center gap-2 hover:bg-[#35373ed5] cursor-pointer border-b border-[#35373ed5] p-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-base text-[#777] bg-[#000]">EV</div>
                                    <h4 className="text-base">
                                        <span className="family2">
                                            Backend WorkSpace
                                        </span>
                                        <span className="text-sm block">A workspace dedicated for development of clients apps</span>
                                    </h4>
                                </div>
                                <div className="w-full flex items-center gap-2 hover:bg-[#35373ed5] cursor-pointer border-b border-[#35373ed5] p-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-base text-[#777] bg-[#000]">EV</div>
                                    <h4 className="text-base">
                                        <span className="family2">
                                            Devops WorkSpace
                                        </span>
                                        <span className="text-sm block">A workspace dedicated for development of clients apps</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-2 hover:bg-[#35373ed5] cursor-pointer border-b border-[#35373ed5] p-4">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-base text-[#777] bg-[#000]"><LuPlus/></div>
                                <h4 className="text-base">
                                    <span className="family2">
                                        Add a Workspace
                                    </span>
                               </h4>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

            </div>

            <div onClick={() => dispatch(onGroupNameModal(""))} className="text-[#fff] cursor-pointer w-[36px] h-[36px] 
            flex items-center hover:bg-[#35373ed5] bg-[#35373ed5] rounded-full justify-center text-sm">
                <MdEdit />
            </div>
        </div>
    )
}


export default Header;