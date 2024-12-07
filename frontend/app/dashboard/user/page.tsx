
"use client"

// import Image from "next/image";
import ConversationList from "./_components/ConversationList";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="w-full h-[100%] flex flex-col">
      {/* <div className='h-[63px] sticky top-0 items-center flex border-b w-full px-4'>
     
        <h4 className="text-xl flex items-end gap-2 md:text-2xl">
          <span className="family2">
            Messages
          </span>
          <span className="text-sm md:text-base text-[#3e3aff] family2">48 New</span>
        </h4>
      </div> */}
      <Header title="Development" />
      <ConversationList />
    </div>
  );
}
