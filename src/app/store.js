import { configureStore } from '@reduxjs/toolkit';
import redditReducer from "../features/reddit/RedditSlice";

export default configureStore({
  reducer: {
    reddit: redditReducer
  },
});
