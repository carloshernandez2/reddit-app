import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { subRedditState, fetchSubReddits, subRedditError, subRedditStatus } from "./SubRedditSlice";
import { redditStartSub } from "../reddit/RedditSlice";

import './SubReddit.css';

export function SubReddit() {

  const authors = useSelector(subRedditState);
  const status = useSelector(subRedditStatus);
  const error = useSelector(subRedditError);
  const startSub = useSelector(redditStartSub);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchSubReddits())
  }, [dispatch, startSub])

  let content;

  if (status === 'loading') {
    content = (
    <div className="tendencies hotPosts">
      <div className="loading">Loading...</div>
    </div>
    )
  } else if (status === 'succeeded') {
    let testArray = authors.length? authors.map((obj) => {
      return(
      <div className="tendencies" key={obj.id}>
        <figure>
          <img 
          src={obj.icon_img || obj.banner_img || obj.header_img || 'https://i.redd.it/snoovatar/snoovatars/8658e16c-55fa-486f-b7c7-00726de2e742.png'} 
          alt={obj.title}/>
        </figure>
        <p>{obj.display_name}</p>
        <p>{obj.subscribers} subscribers</p>
      </div>
      )
    }) : <p>The top subreddits will appear here</p>;
    if (Array.isArray(testArray)){
      let idArray = authors.map(obj => obj.id)
      let idIncluded = [];
      content = [];
      idArray.forEach((id,i) => {
        if (!idIncluded.includes(id)){
          content.push(testArray[i]);
          idIncluded.push(id);
        } 
      })
    } else {
      content = testArray;
    }
  } else if (status === 'failed') {
    content = (
      <div className="tendencies hotPosts">
        <div>{error}</div>
      </div>
      )
  }

  return (
  <aside className="container r-subred">
    {Array.isArray(content)? content.slice(0, 4) : content}
  </aside>
  )
}
