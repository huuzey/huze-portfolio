import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
  currentColor: "#03C9D7",
  themeset: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state) => {
      state.themeset = !state.themeset;
    },
    setColor: (state, action) => {
      state.currentColor = action.payload;
      state.themeset = false;
    },
  },
});
export const { setMode, setColor, setTheme } = globalSlice.actions;
export default globalSlice.reducer;
