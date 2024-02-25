import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  page: 1,
  limit: 5,  
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialValues,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    nextPage: (state, action) => {
      // if (state.page > 0) {
        state.page = state.page + 1;
      // }
    },
    prevPage: (state, action) => {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    setRec: (state, action) => {
      state.page = 1;
      state.limit = action.payload
    },
    setInitial: (state) => {
      state.page = 1;
      state.limit = 5;
    },
  },
});

export const { setPage, nextPage, prevPage, setRec, setInitial } =
  paginationSlice.actions;

export default paginationSlice.reducer;
