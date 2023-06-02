import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
  currentColor: "#03C9D7",
  themeset: false,
  image: "",
  me: "https://res.cloudinary.com/dfanahqm3/image/upload/v1685038858/traveler/pvntgf1cu3r8gdjejvdp.png",
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
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setColor: (state, action) => {
      state.currentColor = action.payload;
      state.themeset = false;
    },
  },
});
export const { setMode, setColor, setTheme, setImage } = globalSlice.actions;
export default globalSlice.reducer;
