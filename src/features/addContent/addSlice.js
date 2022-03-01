import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    setAddContent: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setAddContent } = addSlice.actions;
export const isShowingContentModal = (state) => state.add.show;
export default addSlice.reducer;
