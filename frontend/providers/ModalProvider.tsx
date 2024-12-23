"use client"
import React from 'react';
import { AnimatePresence } from "framer-motion";
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { useSelector } from 'react-redux'
import GroupNameModal from '@/components/modals/GroupNameModal';
import AddGroupMembersModal from '@/components/modals/AddGroupMembersModal';
import DeleteMessageModal from '@/components/modals/deleteModals/DeleteMessageModal';
const ModalProvider = () => {
    const { loginmodal, registermodal, deletemessagemodal, groupnamemodal, addgroupmembersmodal } = useSelector((store: { modal?: any }) => store.modal);

    return (
        <>
            {/* animating the login modal */}
            <AnimatePresence mode='wait' >
                {loginmodal && <LoginModal />}
            </AnimatePresence>
            {/* animating the register modal */}
            <AnimatePresence mode='wait' >
                {registermodal && <RegisterModal />}
            </AnimatePresence>
            <AnimatePresence mode='wait' >
                {groupnamemodal && <GroupNameModal />}
            </AnimatePresence>
            <AnimatePresence mode='wait' >
                {addgroupmembersmodal && <AddGroupMembersModal />}
            </AnimatePresence>

            {/* delete Message Modal */}
            <AnimatePresence mode='wait' >
                {deletemessagemodal && <DeleteMessageModal />}
            </AnimatePresence>
        </>
    );
}


export default ModalProvider;