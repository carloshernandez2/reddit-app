import { configureStore } from '@reduxjs/toolkit';
import RedditReducer from "../Layers/redditLayer/features/reddit/RedditSlice";
import SubRedditReducer from "../Layers/redditLayer/features/subReddit/SubRedditSlice";

export default configureStore({
  reducer: {
    reddit: RedditReducer,
    subreddit: SubRedditReducer
  },
});
