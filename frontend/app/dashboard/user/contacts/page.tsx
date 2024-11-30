
"use client"
import ContactList from "../_components/ContactList";
import Header from "../_components/Header";

export default function Home() {
  return (
    <div className="w-full bg-white h-[100%] flex flex-col">
      <Header title="Archived Chats" />

      <ContactList />
    </div>
  );
}
