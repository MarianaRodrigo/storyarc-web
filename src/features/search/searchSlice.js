import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearching: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
  },
});

export const { setIsSearching } = searchSlice.actions;
export const isSearchingState = (state) => state.search.isSearching;
export default searchSlice.reducer;
