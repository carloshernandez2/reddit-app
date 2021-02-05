import React from 'react'
import { useSelector } from 'react-redux'
import { SingleRedditState } from "./RedditSlice";

export const SingleReddit = ({ match }) => {
  const { id } = match.params

  const reddit = useSelector(state => SingleRedditState(state, id))

  if (!reddit) {
    return (
        <main className="r-reddit">
            <section className="tendencies hotPosts">
                <h2>Sorry we could not find your post</h2>
            </section>
        </main>
      )
  }

  return (
    <main className="r-reddit">
        <div key={reddit.id} className="tendencies hotPosts">
            <header>
                <h2>{reddit.title}</h2>
            </header>
            {(reddit.thumbnail && reddit.thumbnail!=='self') &&
            <figure>
              <img src={reddit.thumbnail} alt="post"/>
            </figure>}
            <article>
              <br/><p>{reddit.selftext}</p><br/>
            </article>
            <aside>
                <p>{`This publication has ${reddit.ups} ups`}</p>
                <p>{`This Subreddit is ${reddit.subreddit_type}!!!`}</p>
                <a href={`https://www.reddit.com/${reddit.subreddit_name_prefixed}`} target="_blank" rel="noreferrer">{`Click to go to Subreddit ${reddit.subreddit}`}</a>
            </aside>
        </div>
      </main>
  )
}