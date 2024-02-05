import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  users: [],
  isEditClicked: false,
  editId: null,
};

export const actionSlice = createSlice({
  name: "userReducer",
  initialState: initialStates,
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },
    like: (state, action) => {
      state.users = action.payload;
    },
    edit: (state, action) => {
      state.isEditClicked = true;
      state.editId = action.payload;
    },
    cancel: (state, action) => {
      state.isEditClicked = false;
    },
    success: (state, action) => {
      state.users = action.payload;
      state.isEditClicked = false;
    },
    deleteCard: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, like, edit, deleteCard, cancel, success } =
  actionSlice.actions;

export default actionSlice.reducer;
