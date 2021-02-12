import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from "react-router-dom";

import { queryUpdated } from "../../features/reddit/RedditSlice";
import { insultUpdated } from "../../../trumpLayer/Features/TrumpSlice";

import './Searchbar.css';

export function Searchbar() {

  let { path } = useRouteMatch();
  const dispatch = useDispatch();
  const [localQuery, setLocalQuery] = useState('');

  const handleClick = () => {
    switch (path) {
      case '/reddit':
        dispatch(queryUpdated(localQuery))
        break;

      case '/trump':
        dispatch(insultUpdated(localQuery))
        break;
    
      default:
        break;
    }
  }

  const handleChange = ({target}) => {
    setLocalQuery(target.value);
  }

  return (
        <React.Fragment>
          <div className="bar">
            <div className="inputGroup">
              <label htmlFor="input1">Search</label>
              <textarea placeholder="Type here" id="input1" className="input" onChange={handleChange} value={localQuery}/>
            </div>
            <div className="inputGroup">
              <label htmlFor="input1">Future use</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
            </div>
            <div className="inputGroup">
              <label htmlFor="input1">Future use</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
            </div>
            <div className="inputGroup">
              <label htmlFor="input1">Future use</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
            </div>
            <button className="searchButton" onClick={handleClick}>Search</button>
          </div>
        </React.Fragment>
  )
}
