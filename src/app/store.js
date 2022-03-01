import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { StoryArc_API } from "../services/storyarc";
import searchReducer from "../features/search/searchSlice";
import userReducer from "../features/user/userSlice";
import barReducer from "../features/bar/barSlice";
import addReducer from "../features/addContent/addSlice";

export const store = configureStore({
  reducer: {
    [StoryArc_API.reducerPath]: StoryArc_API.reducer,
    search: searchReducer,
    user: userReducer,
    bar: barReducer,
    add: addReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StoryArc_API.middleware),
});

setupListeners(store.dispatch);
