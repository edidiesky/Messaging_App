import React from 'react';
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux'
import Image from "next/image";

import { onGroupNameModal } from '@/services/modalSlice';
const Header = ({ title }: { title: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-[80px] sticky top-0 items-center border-b justify-between flex w-full px-4'>
            <div className="flex-1 flex items-center gap-2">
                <Image
                    width={45}
                    height={45}
                    className='w-[45px] h-[45px] rounded-full object-cover'
                    src={'/images/group_4.png'}
                    alt="message_image"
                />
                <h4 className="text-lg md:text-xl">
                    <span className="family2">
                        {title}
                    </span>
                    {/* <span className="text-sm block">A workspace for development</span> */}
                </h4>
            </div>

            <div onClick={() => dispatch(onGroupNameModal(""))} className="text-[#000] cursor-pointer w-[36px] h-[36px] 
            flex items-center hover:bg-[#eee] bg-[#F3F3EE] rounded-full justify-center text-sm">
                <MdEdit />
            </div>
        </div>
    )
}


export default Header;