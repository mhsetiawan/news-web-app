import { configureStore } from "@reduxjs/toolkit";
import {
  indonesiaNewsSlice,
  programmingNewsSlice,
  searchNewsSlice,
} from "../features/news/newsSlice";

export default configureStore({
  reducer: {
    indonesiaNews: indonesiaNewsSlice.reducer,
    programmingNews: programmingNewsSlice.reducer,
    searchNews: searchNewsSlice.reducer,
  },
});
