import { configureStore } from '@reduxjs/toolkit';
import RedditReducer from "../Layers/redditLayer/features/reddit/RedditSlice";
import SubRedditReducer from "../Layers/redditLayer/features/subReddit/SubRedditSlice";
import TrumpReducer from "../Layers/trumpLayer/Features/TrumpSlice";
import SessionReducer from "../Layers/sessionLayer/Features/SessionSlice";

export default configureStore({
  reducer: {
    reddit: RedditReducer,
    subreddit: SubRedditReducer,
    trump: TrumpReducer,
    session: SessionReducer
  }
});
