import React from 'react';
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux'

import { onGroupNameModal } from '@/services/modalSlice';
const Header = ({ title }: { title: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-[63px] sticky top-0 items-center
         border-[#F3F3EE] justify-between flex w-full px-6'>

            <h4 className="text-lg gap-2 md:text-xl">
                <span className="family2">
                    {title}
                </span>
            </h4>
            <div onClick={() => dispatch(onGroupNameModal(""))} className="text-[#000] cursor-pointer w-12 h-[45px] 
            flex items-center hover:bg-[#eee] bg-[#F3F3EE] rounded-full justify-center text-lg">
                <MdEdit />
            </div>
        </div>
    )
}


export default Header;