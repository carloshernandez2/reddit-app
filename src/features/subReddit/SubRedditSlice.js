import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  body: [],
  status: 'idle',
  error: null
}

export const fetchSubReddits = createAsyncThunk('subreddit/fetchSubReddits', async (param, {getState}) => {
  let {body} = getState().reddit;
  if (!body.length) return [];
  let subRedditNames = body.map(obj => obj.subreddit);
  let subReddits = subRedditNames.map(name => {
    let url = `https://www.reddit.com/r/${name}/about.json`;
    let response = fetch(url);
    return response;
  })
  let responseArray = await Promise.all(subReddits);
  let modifiedResponse = responseArray.map(response => response.json().then(response => response.data));
  let jsonResponseArray = await Promise.all(modifiedResponse);
  let finalResponse = [];
  jsonResponseArray.forEach(jsonResponse => {
    let finalObject = {
      display_name: jsonResponse.display_name,
      header_img: jsonResponse.header_img,
      id: jsonResponse.id,
      subscribers: jsonResponse.subscribers,
      public_description: jsonResponse.public_description,
      title: jsonResponse.title,
      icon_img: jsonResponse.icon_img,
      banner_img: jsonResponse.banner_img,
      description: jsonResponse.description
    }
    finalResponse.push(finalObject);
  })
  return finalResponse;
})

const SubRedditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchSubReddits.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchSubReddits.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.body = action.payload
    },
    [fetchSubReddits.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const subRedditState = state => state.subreddit.body

export const subRedditError = state => state.subreddit.error

export const subRedditStatus = state => state.subreddit.status

export default SubRedditSlice.reducer