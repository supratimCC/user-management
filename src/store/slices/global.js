import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  componentRefresh: true,
};

const globalSclice = createSlice({
  name: "globals",
  initialState: initialState,
  reducers: {
    resetComponent: (state, action) => {
      state.componentRefresh = !state.componentRefresh;
    },
  },
});

export const { resetComponent } = globalSclice.actions;

export default globalSclice.reducer;
