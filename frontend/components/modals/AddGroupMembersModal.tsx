"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { offGroupMemberModal } from '@/services/modalSlice';
import { slide } from '@/constants/framer';
import { MockUserList } from "@/constants";

const AddGroupMembersModal = () => {
    const { addgroupmembersmodal } = useSelector((store: { modal: { addgroupmembersmodal: boolean } }) => store.modal);
    const [formValue, setFormValue] = useState({
        name: "",
    })
    const dispatch = useDispatch()
    const noEntry = formValue.name === "";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleFormSubmision = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };
    const handleOnGroupMembersModal = () => {
        dispatch(offGroupMemberModal(""))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                },
            }}
            animate={{ opacity: 1 }}
            className='h-[100vh] bg-[#16161644] w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={addgroupmembersmodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[420px] md:max-w-[420px]  md:min-h-[550px] justify-between relative items-start md:rounded-[10px] flex flex-col bg-white">
                <div onClick={() => dispatch(offGroupMemberModal(""))} className="absolute top-4 right-4 text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                    <RxCross2 />
                </div>
                <div className="w-full py-6 px-4 border-b flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl family2">
                        Add  Group Members
                    </h3>
                   <div className="w-full flex items-center gap-2 flex-wrap">
                        <input
                            type={"text"}
                            value={formValue.name}
                            name={"name"}
                            onChange={(e) => onChange(e)}
                            placeholder={"Enter the Group Name"}
                            className="text-sm font-normal bg-white rounded-full flex-1 "

                        />
                   </div>
                </div>
                <div className="w-full h-[350px] overflow-auto flex items-center gap-4">
                   {
                        MockUserList?.map((user,index)=> {
                            return (
                                <div key={index} className="w-full p-3 px-4 lg:pl-6 hover:bg-[#fafafa] cursor-pointer border-b flex flex-col gap-3">
                                    <div className="w-full flex items-start justify-between">
                                        <div className="flex flex-1 items-center gap-2">
                                            <Image
                                                src={user?.image}
                                                width={35}
                                                height={35}
                                                className='rounded-full w-[35px] h-[35px] object-cover'
                                                alt='Avatar for user'
                                            />
                                            <h4 className="text-sm flex-1 md:text-base">
                                                <div className="flex items-center justify-between flex-1">
                                                    <span className="family2">
                                                        {user?.name}
                                                    </span>
                                                    <span className="text-xs">{user?.createdAt}</span>
                                                </div>
                                               
                                            </h4>

                                        </div>

                                    </div>
                                    {/* <h5 className="text-sm  text-[#3c3c3c]">
                {chatLength?.length > 34 ? `${chatLength}...` : chatLength}
            </h5> */}
                                </div>
                            )
                        })
                   }
                </div>

                <div className="w-full px-4 h-[70px] border-t text-sm flex items-center justify-end gap-3">
                    <button
                        data-test="GroupNameModal_button_1"
                        onClick={() => dispatch(offGroupMemberModal(""))}
                        className="p-3 px-6 hover:opacity-[.5] text-[#000] hover:text-[#fff] flex items-center justify-center cursor-pointer border hover:bg-[#000] rounded-full regular"
                    >
                        Cancel
                    </button>
                    <button
                        data-test="GroupNameModal_button_2"
                        disabled={noEntry}
                        onClick={handleOnGroupMembersModal}
                        className="p-3 px-6 hover:opacity-[.5] text-[#fff] flex items-center justify-center cursor-pointer  bg-[#3e3aff] rounded-full regular"
                    >
                        Create
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AddGroupMembersModal;