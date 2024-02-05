import { configureStore } from "@reduxjs/toolkit";
import userActionReducer from "./actionSlice";

export default configureStore({
  reducer: {
    userReducer: userActionReducer,
  },
});
