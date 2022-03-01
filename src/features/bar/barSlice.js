import { createSlice } from "@reduxjs/toolkit";

const initialState = { isExpanded: false };

const barSlice = createSlice({
  name: "bar",
  initialState,
  reducers: {
    setBarState: (state, action) => {
      state.isExpanded = action.payload;
    },
  },
});

export const { setBarState } = barSlice.actions;
export const useBarState = (state) => state.bar.isExpanded;
export default barSlice.reducer;
