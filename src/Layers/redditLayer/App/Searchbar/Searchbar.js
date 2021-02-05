import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { queryUpdated } from "../../features/reddit/RedditSlice";

import './Searchbar.css';

export function Searchbar() {
  const dispatch = useDispatch();
  const [localQuery, setLocalQuery] = useState('');

  const handleClick = () => {
    dispatch(queryUpdated(localQuery))
  }

  const handleChange = ({target}) => {
    setLocalQuery(target.value);
  }

  return (
        <React.Fragment>
          <div className="bar">
            <div className="inputGroup">
              <label htmlFor="input1">Relevant posts</label>
              <textarea placeholder="Type here" id="input1" className="input" onChange={handleChange} value={localQuery}/>
            </div>
            <div className="inputGroup">
              <label htmlFor="input1">Checkin</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
            </div>
            <div className="inputGroup">
              <label htmlFor="input1">Checkout</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
            </div>
            <div className="inputGroup">
              <label htmlFor="input1">Guests</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
            </div>
            <button className="searchButton" onClick={handleClick}>Search</button>
          </div>
        </React.Fragment>
  )
}
