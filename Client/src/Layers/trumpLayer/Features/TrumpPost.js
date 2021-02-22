import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { trumpState } from "./TrumpSlice";

export const TrumpPost = () => {

    const insults = useSelector(trumpState);

    const redditPosts = insults.length? insults.map((obj) => {
        return(
          <div key={obj.id} className="tendencies hotPosts">
            <header>
              <h2>{obj.insult}</h2>
            </header>
            <article>
              <br/><p>{obj.tweet || obj.tweet.substring(0, 100)}...</p><br/>
            </article>
            <aside>
              <p>{`This target was ${obj.target}`}</p>
              <p>{`Date: ${obj.date}`}</p>
            </aside>
            <Link to={`/trump`} className="button muted-button">
                <button>View Post</button>
            </Link>
          </div>
        )
      }) : <div className="tendencies hotPosts"><p>Look for the worst insults in the Whole world</p></div>

      return (
          redditPosts
          )
}