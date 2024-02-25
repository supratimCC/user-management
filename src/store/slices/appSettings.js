import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorCode: "#ff80b3",
};

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState: initialState,
  reducers: {
    setcolor: (state, action) => {
      state.colorCode = action.payload.color;
    },
  },
});

export const { setcolor } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
