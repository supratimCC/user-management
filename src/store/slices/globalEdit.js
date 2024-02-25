import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: false,
};

const globalEdit = createSlice({
  name: "globalEdit",
  initialState: initialState,
  reducers: {
    setEditData: (state, action) => {
      state.data = action.payload;
    },
    reSetEditData: (state, action) => {
      state.data = false;
    },
  },
});

export const { setEditData, reSetEditData } = globalEdit.actions;

export default globalEdit.reducer;
