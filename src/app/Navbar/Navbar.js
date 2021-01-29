import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css';
import logo from '../../Static/images/Reddit-social-media-icon.png'

export function Navbar() {
  return (
    <React.Fragment>
    <figure className="logo">
      <Link to="/" className="link"><img src={logo} alt="Logo"/></Link>
    </figure>
    <nav className="nav">
      <ul className="list">
        <Link to="/" className="link">FAQ</Link>
        <Link to="/" className="link">How</Link>
        <Link to="/" className="link">Blog</Link>
        <Link to="/" className="link">Reddits</Link>
        <Link to="/" className="link">SubReddits</Link>
      </ul>
    </nav>
    <div className="sign">
      <button>signIn</button>
      <button className="accentuated">SignUp</button>
    </div>
    </React.Fragment>
  )
}
