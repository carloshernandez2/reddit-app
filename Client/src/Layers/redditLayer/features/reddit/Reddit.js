import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReddits, redditQuery, redditStatus, redditError } from "./RedditSlice";
import { RedditPost } from "./RedditPost";

import './Reddit.css';

export function Reddit() {

  const query = useSelector(redditQuery);
  const status = useSelector(redditStatus);
  const error = useSelector(redditError);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchReddits())
  }, [dispatch, query])

  let content;

  if (status === 'loading') {
    content = (
    <div className="tendencies hotPosts">
      <div className="loading">Loading...</div>
    </div>
    )
  } else if (status === 'succeeded') {
    content = (
    <RedditPost />
    )
  } else if (status === 'failed') {
    content = (
      <div className="tendencies hotPosts">
        <div>{error}</div>
      </div>
      )
  }

  return (
    <main className="r-reddit container">
        {content}
    </main>
  )
}