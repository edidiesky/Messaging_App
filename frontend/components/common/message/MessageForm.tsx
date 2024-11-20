"use client"
import { CiImageOn } from "react-icons/ci";
import { FaFaceSmileWink } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";
import { BiSolidSend } from "react-icons/bi";
const MessageForm = () => {
    return (
        <div className="w-full px-8 py-4">
            <div className='h-[120px] w-full border rounded-lg p-2 flex flex-col gap-4 justify-between'>
                <textarea placeholder="Write your Message here..." className="h-[110px] p-4 bg-transparent resize-none outline-none"></textarea>
                <div className="w-full flex items-center gap-4 justify-between">
                    <div className="flex items-center">
                        <div className="w-10 text-lg rounded-full cursor-pointer hover:bg-[#eee] h-10 flex items-center justify-center">
                            <CiImageOn />
                        </div>
                        <div className="w-10 text-lg rounded-full cursor-pointer hover:bg-[#eee] h-10 flex items-center justify-center">
                            <FaFaceSmileWink />
                        </div> <div className="w-10 text-lg rounded-full cursor-pointer hover:bg-[#eee] h-10 flex items-center justify-center">
                            <HiLink />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                        <button className="p-2 bg-[#002b31] px-4 text-white flex items-center gap-2 text-sm justify-center rounded-lg">
                            <BiSolidSend />
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageForm;