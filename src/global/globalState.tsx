import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  toggle: false,
  studentToggle: false,
  admin: {} || null,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggled: (state: any) => {
      state.toggle = true;
    },
    changedToggle: (state: any) => {
      state.toggle = false;
    },
    studentTogge: (state: any) => {
      state.studentToggle = true;
    },
    changedStudentToggle: (state: any) => {
      state.studentToggle = false;
    },
    mainUser: (state: any, { payload }) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
    logAdmin: (state: any, { payload }) => {
      state.admin = payload;
    },
    logOutAdmin: (state: any) => {
      state.admin = null;
    },
  },
});

export const {
  changedToggle,
  toggled,
  logOut,
  mainUser,
  logAdmin,
  logOutAdmin,
  changedStudentToggle,
  studentTogge,
} = globalState.actions;

export default globalState.reducer;
