import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  welcome: {
    string: 'signUp'
  },
  body: {
    authorization : 'Unauthorized',
    message: ""
  },
  status: 'idle',
  error: null
}

export const fetchSession = createAsyncThunk('session/fetchSession', async (param) => {
  const {username, password, type} = param;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
                          username: username, 
                          password: password,
                          type: type
                        })
};

  const response = await fetch("/api/session/login", requestOptions);
  const data = await response.json();
  return data;
})

export const fetchUser = createAsyncThunk('session/fetchUser', async () => {

  const response = await fetch("/api/session/user");
  const data = await response.json();
  return data;

})

export const logout = createAsyncThunk('session/logout', async () => {

  const response = await fetch("/api/session/logout");
  const data = await response.json();
  return data;

})

const SessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    welcomeUpdated(state, action) {
      state.welcome.string = action.payload
    }
  },
  extraReducers: {
    [fetchSession.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.body = action.payload
      state.error = null;
      state.welcome.string = 'signUp';
    },
    [fetchSession.rejected]: (state, action) => {
      state.status = 'failed'
      state.body = action.error.message
      state.error = action.error.message
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.body = action.payload
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [logout.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.body = action.payload
    },
    [logout.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const sessionState = state => state.session.body

export const welcomeString = state => state.session.welcome.string;

export const sessionStatus = state => state.session.status;

export const sessionError = state => state.session.error;

export const { welcomeUpdated } = SessionSlice.actions

export default SessionSlice.reducer