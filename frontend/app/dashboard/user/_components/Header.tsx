import React from 'react';
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux'

import { onGroupNameModal } from '@/services/modalSlice';
const Header = ({ title }: { title: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-[63px] sticky top-0 items-center border-b justify-between flex w-full px-6'>

            <h4 className="text-lg md:text-xl">
                <span className="family2">
                    {title}
                </span>
                <span className="text-sm block">A workspace for development</span>
            </h4>
            <div onClick={() => dispatch(onGroupNameModal(""))} className="text-[#000] cursor-pointer w-10 h-[40px] 
            flex items-center hover:bg-[#eee] bg-[#F3F3EE] rounded-full justify-center text-base">
                <MdEdit />
            </div>
        </div>
    )
}


export default Header;