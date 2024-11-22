"use client"
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
const UserInfo = () => {
    const userInfo = { id: "ryrg34555dgdhfkfgogusga", phone: "01733739933", email: "lexlieAlexander@gmail.com", name: " Lexlie Alexander", role: "CoFounder at UxCel" }
    return (
        <div style={{
            maxHeight: "calc(100% - 63px)",
        }} className='items-start overflow-auto flex py-4 flex-col w-full'>
            {/* top */}
            <div className="w-full flex py-4 border-b justify-center items-center flex-col gap-4">
                <Image
                    src={'/images/user_1.jpg'}
                    width={80}
                    height={80}
                    className='rounded-full w-[80px] h-[80px] object-cover'
                    alt='Avatar for user'
                />
                <h4>
                    <span className="family2 text-lg">
                        {userInfo?.name}
                    </span>
                    <span className="text-base block text-[#777]">
                        {userInfo?.role}
                    </span>
                </h4>
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
                </div>
               
            </div>
            {/* bottom */}
        </div>
    )
}


export default UserInfo;