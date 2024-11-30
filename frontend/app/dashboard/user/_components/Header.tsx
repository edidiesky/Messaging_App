import React from 'react';
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux'

import { onGroupNameModal } from '@/services/modalSlice';
const Header = ({ title }: { title: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-[63px] sticky top-0 items-center justify-between flex border-b w-full px-4'>

            <h4 className="text-xl gap-2 md:text-2xl">
                <span className="family2">
                    {title}
                </span>
            </h4>
            <div onClick={() => dispatch(onGroupNameModal(""))} className="text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                <MdEdit />
            </div>
        </div>
    )
}


export default Header;