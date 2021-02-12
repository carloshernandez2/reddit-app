import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  insultString: {
    string: ''
  },
  body: [],
  status: 'idle',
  error: null
}

export const fetchInsults = createAsyncThunk('insults/fetchInsults', async (param, {getState}) => {
  let {insultString} = getState().trump;
  if (!insultString) return [];
  let route = `/api/trump/insults?q=${insultString.string}`;
  const response = await fetch(route);
  const jsonResponse = await response.json();
  if(!jsonResponse.length) throw new Error('no posts available');
  const finalArray = jsonResponse.map(obj => ({
    id: obj.id,
    date: obj.date,
    target: obj.target,
    insult: obj.insult,
    tweet: obj.tweet
  }))
  return finalArray
})

const TrumpSlice = createSlice({
  name: 'trump',
  initialState,
  reducers: {
    insultUpdated(state, action) {
      state.insultString.string = action.payload
    }
  },
  extraReducers: {
    [fetchInsults.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchInsults.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.body = action.payload
    },
    [fetchInsults.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const trumpState = state => state.trump.body

export const trumpQuery = state => state.trump.insultString;

export const trumpStatus = state => state.trump.status;

export const trumpError = state => state.trump.error;

export const { insultUpdated } = TrumpSlice.actions

export default TrumpSlice.reducer