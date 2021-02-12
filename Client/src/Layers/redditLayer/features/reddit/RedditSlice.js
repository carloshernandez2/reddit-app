import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  queryString: {
    string: ''
  },
  body: [],
  status: 'idle',
  error: null,
  startSub: false
}

export const fetchReddits = createAsyncThunk('reddit/fetchReddits', async (param, {getState}) => {
  let {queryString} = getState().reddit;
  if (!queryString.string) return [];
  let url = `https://www.reddit.com/search.json?q=${queryString.string}&limit=10&sort=relevance&type=link`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const data = jsonResponse.data.children
  if(!data.length) throw new Error('no posts available');
  const finalArray = data.map(obj => ({
      id: obj.data.name,
      subreddit: obj.data.subreddit,
      title: obj.data.title, 
      thumbnail: obj.data.thumbnail,
      subreddit_name_prefixed: obj.data.subreddit_name_prefixed,
      subreddit_type: obj.data.subreddit_type,
      ups: obj.data.ups,
      selftext: obj.data.selftext
  }))
  return finalArray
})

const RedditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    queryUpdated(state, action) {
      state.queryString.string = action.payload
    }
  },
  extraReducers: {
    [fetchReddits.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchReddits.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.body = action.payload
      if (state.startSub) {state.startSub = false} else {state.startSub = true};
    },
    [fetchReddits.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const redditState = state => state.reddit.body

export const redditQuery = state => state.reddit.queryString;

export const redditStatus = state => state.reddit.status;

export const redditError = state => state.reddit.error;

export const redditStartSub = state => state.reddit.startSub;

export const SingleRedditState = (state, id) => state.reddit.body.find((post) => post.id === id)

export const { queryUpdated } = RedditSlice.actions

export default RedditSlice.reducer