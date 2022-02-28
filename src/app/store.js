import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import userReducer from "../features/user/userSlice";
import barReducer from "../features/bar/barSlice";
import addReducer from "../features/addContent/addSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
    bar: barReducer,
    add: addReducer,
  },
});
