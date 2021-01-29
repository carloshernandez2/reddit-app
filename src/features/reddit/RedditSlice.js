import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = [
  { author_fullname: '1', 
    subreddit: 'pics',
    title: 'First Post!', 
    thumbnail: 'https://www.redditstatic.com/avatars/avatar_default_20_D4E815.png',
    subreddit_name_prefixed: 'r/pics',
    subreddit_type: 'public',
    ups: '100000',
    selftext: 'alakazam'
    },
  { author_fullname: '1', 
    subreddit: 'pics',
    title: 'First Post!', 
    thumbnail: 'https://www.redditstatic.com/avatars/avatar_default_20_D4E815.png',
    subreddit_name_prefixed: 'r/pics',
    subreddit_type: 'public',
    ups: '100000',
    selftext: ""
    },
  { author_fullname: '1', 
    subreddit: 'pics',
    title: 'First Post!', 
    thumbnail: 'https://www.redditstatic.com/avatars/avatar_default_20_D4E815.png',
    subreddit_name_prefixed: 'r/pics',
    subreddit_type: 'public',
    ups: '100000',
    selftext: ''
    },
]

const RedditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {}
})


export const redditState = state => state.posts


export default RedditSlice.reducer