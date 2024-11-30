import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  groupnamemodal: false,
  addgroupmembersmodal: false,
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
  offGroupMemberModal
} = modalSlice.actions;

export default modalSlice.reducer;
