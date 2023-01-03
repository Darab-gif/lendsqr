import { configureStore } from "@reduxjs/toolkit";
import { SideReducer } from "./sidebar";
import { SliceReducer } from "./slice";

const store = configureStore({
  reducer: {
    sub: SliceReducer,
    side: SideReducer,
  },
});

export default store;
