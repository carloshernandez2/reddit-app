import { configureStore } from '@reduxjs/toolkit';
import RedditReducer from "../features/reddit/RedditSlice";
import SubRedditReducer from "../features/subReddit/SubRedditSlice";

export default configureStore({
  reducer: {
    reddit: RedditReducer,
    subreddit: SubRedditReducer
  },
});
