import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { redditState } from "./RedditSlice";

export const RedditPost = () => {

    const reddits = useSelector(redditState);

    const redditPosts = reddits.length? reddits.map((obj) => {
        return(
          <div key={obj.id} className="tendencies hotPosts">
            <header>
              <h2>{obj.title}</h2>
            </header>
            {(obj.thumbnail && obj.thumbnail[0]==='h')? 
            <figure>
              <img src={obj.thumbnail} alt="post"/>
            </figure> : 
            <article>
              <br/><p>{obj.selftext.substring(0, 100)}...</p><br/>
            </article>}
            <aside>
              <p>{`This publication has ${obj.ups} ups`}</p>
              <p>{`This Subreddit is ${obj.subreddit_type}!!!`}</p>
              <a href={`https://www.reddit.com/${obj.subreddit_name_prefixed}`} target="_blank" rel="noreferrer">{`Click to go to Subreddit ${obj.subreddit}`}</a>
            </aside>
            <Link to={`/reddits/${obj.id}`} className="button muted-button">
                <button>View Post</button>
            </Link>
          </div>
        )
      }) : <div className="tendencies hotPosts"><p>Look for the trending posts of your favourite topics in the search bar</p></div>

      return (
          redditPosts
          )
}