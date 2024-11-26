
"use client"

// import Image from "next/image";
import ConversationList from "./_components/ConversationList";

export default function Home() {
  return (
    <div className="w-full bg-white h-[100%] flex flex-col">
      <div className='h-[63px] sticky top-0 items-center flex border-b w-full px-4'>
        {/* <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
          <Image
            src={'/images/user_2.jpg'}
            width={40}
            height={40}
            className='rounded-full w-[40px] h-[40px] object-cover'
            alt='Avatar for user'
          />
          <h4 className="text-base">
            <span className="family2">
              Daniel Nguyen
            </span>
          </h4>
        </div> */}
        <h4 className="text-xl flex items-end gap-2 md:text-2xl">
          <span className="family2">
            Messages
          </span>
          <span className="text-sm md:text-base text-[#3e3aff] family2">48 New</span>
        </h4>
      </div>
      <ConversationList />
    </div>
  );
}
