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
        <Link to="/reddit" className="link">Reddits</Link>
        <Link to="/trump" className="link">Trump</Link>
        <Link to="/" className="link">Blog</Link>
        <Link to="/" className="link">People</Link>
        <Link to="/" className="link">SubReddits</Link>
      </ul>
    </nav>
    <div className="sign">
    <Link to="/session/sign-in" className="link"><button>signIn</button></Link>
    <Link to="/session/sign-up" className="link"><button className="accentuated">SignUp</button></Link>
    </div>
    </React.Fragment>
  )
}
