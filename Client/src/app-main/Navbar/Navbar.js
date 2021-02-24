import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './NavBar.css';
import logo from '../../Static/images/Reddit-social-media-icon.png'

import { sessionState, logout } from "../../Layers/sessionLayer/Features/SessionSlice";

export function Navbar() {

  const session = useSelector(sessionState)
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(logout())
  }

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
    {session.authorization === 'Unauthorized'?
    <React.Fragment>
      <Link to="/session/sign-in" className="link"><button>SignIn</button></Link>
      <Link to="/session/sign-up" className="link"><button className="accentuated">SignUp</button></Link> 
    </React.Fragment> :
    <React.Fragment>
      <p className="username">{session.authorization}</p>
      <button onClick={handleLogin} className="accentuated">Logout</button>
    </React.Fragment>
    }
    </div>
    </React.Fragment>
  )
}
