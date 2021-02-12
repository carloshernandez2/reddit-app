import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { trumpStatus, trumpQuery, trumpError, fetchInsults } from "./TrumpSlice";
import { TrumpPost } from "./TrumpPost";

export function Trump() {

  const query = useSelector(trumpQuery);
  const status = useSelector(trumpStatus);
  const error = useSelector(trumpError);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchInsults())
  }, [dispatch, query])

  let content;

  if (status === 'loading') {
    content = (
    <div className="tendencies hotPosts">
      <div className="loading">Insulting...</div>
    </div>
    )
  } else if (status === 'succeeded') {
    content = (
    <TrumpPost />
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