import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  groupnamemodal: false,
  addgroupmembersmodal: false,
  deletemessagemodal: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, _action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, _action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, _action) => {
      state.registermodal = true;
    },
    offRegisterModal: (state, _action) => {
      state.registermodal = false;
    },
    onGroupNameModal: (state, _action) => {
      state.groupnamemodal = true;
    },
    offGroupNameModal: (state, _action) => {
      state.groupnamemodal = false;
    },
    onGroupMemberModal: (state, _action) => {
      state.addgroupmembersmodal = true;
    },
    offGroupMemberModal: (state, _action) => {
      state.addgroupmembersmodal = false;
    },
    onDeleteMessageModal: (state, _action) => {
      state.deletemessagemodal = true;
    },
    offDeleteMessageModal: (state, _action) => {
      state.deletemessagemodal = false;
    },
  },
});

export const {
  onLoginModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
  onGroupNameModal,
  offGroupNameModal,
  onGroupMemberModal,
  offGroupMemberModal,
  onDeleteMessageModal,
  offDeleteMessageModal
} = modalSlice.actions;

export default modalSlice.reducer;
