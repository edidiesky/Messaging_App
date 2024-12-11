"use client"
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
const ChatInfo = () => {
    const userInfo = { id: "ryrg34555dgdhfkfgogusga", createdAt: "24th Set 2024", phone: "01733739933", email: "lexlieAlexander@gmail.com",
        name: " Development Channel", role: "CoFounder at UxCel" }
    return (
        <div style={{
            maxHeight: "calc(100% - 63px)",
        }} className='items-start overflow-auto flex flex-col w-full'>
            {/* top */}
            <div className="w-full  relative">
                <div className="w-full h-40 bg-[#eee]">
                </div>
                <div className="w-full flex py-4 -mt-16 px-4 border-b flex-col gap-2">
                    <div className="rounded-full w-[100px] h-[100px] border-[#fff] relative border-4 p-6 bg-white">
                        <Image
                            src={'/images/user_1.jpg'}
                            fill
                            className='rounded-full w-full h-full object-cover'
                            alt='Avatar for user'
                        />
                    </div>
                    <h4>
                        <span className="family2 text-lg lg:text-xl">
                            {userInfo?.name || "Development Channel"}
                        </span>
                        <span className="text-sm block text-[#777]">
                            This is a professional channel that is dedicated to fostering the development and speed of Nexchat brand. The main aim is to welcome innovative minds
                            
                        </span>
                    </h4>
                </div>
            </div>
            {/* center */}
            <div className="w-full flex py-6 flex-col gap-6">
                <h4 className="text-start px-4">
                    <span className="family2 text-lg">
                        Contact
                    </span>
                </h4>
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-4 px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><MdOutlineMailOutline /></span>

                            <span className="text-sm">Email</span>
                        </div>

                        <h4 className="text-start">
                            <span className="family2 text-sm">
                                {userInfo?.email}
                            </span>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4 px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><MdOutlinePhone /></span>

                            <span className="text-sm">Phone</span>
                        </div>

                        <h4 className="text-start">
                            <span className="family2 text-sm">
                                {userInfo?.phone}
                            </span>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4 px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><CiCalendarDate /></span>

                            <span className="text-sm">Created</span>
                        </div>

                        <h4 className="text-start">
                            <span className="family2 text-sm">
                                {userInfo?.createdAt}
                            </span>
                        </h4>
                    </div>
                </div>

            </div>
            {/* bottom */}
        </div>
    )
}


export default ChatInfo;