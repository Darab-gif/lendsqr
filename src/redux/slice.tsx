import { createSlice } from "@reduxjs/toolkit";
import { objectData } from "../data/data";

const initialState = objectData;
console.log(initialState);
const Slice = createSlice({
  name: "person",
  initialState,
  reducers: {},
});

export const SliceReducer = Slice.reducer;
