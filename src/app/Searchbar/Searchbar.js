import React from 'react'

import './Searchbar.css';

export function Searchbar() {
  return (
    <div className="search">
          <div className="bar">
            <div className="inputGroup">
              <label htmlFor="input1">Location</label>
              <textarea placeholder="Type here" id="input1" className="input"/>
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
            <button className="searchButton">Search</button>
          </div>
        </div>
  )
}
