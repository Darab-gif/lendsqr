import { createSlice } from "@reduxjs/toolkit";
import { sidebarData } from "../data/data";

const initialState = sidebarData;
//console.log(sidebarData);
const SidebarSlice = createSlice({
  name: "side",
  initialState,
  reducers: {},
});

export const SideReducer = SidebarSlice.reducer;
