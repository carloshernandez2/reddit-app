import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import './App.css'; 

import { Navbar } from "./app-main/Navbar/Navbar";
import AppReddit from "./Layers/redditLayer/App/AppReddit";
import TrumpApp from "./Layers/trumpLayer/App/TrumpApp";
import SessionApp from "./Layers/sessionLayer/App/SessionApp";
import { fetchUser, sessionState } from "./Layers/sessionLayer/Features/SessionSlice";


function App() {

  const dispatch = useDispatch();
  const session = useSelector(sessionState)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path="/session/sign-in" component={SessionApp} />
            <Route path="/session/sign-up" component={SessionApp} />
            {session.authorization !== 'Unauthorized' &&
            <Route path="/trump" component={TrumpApp} />}
            <Route path="/reddit" component={AppReddit} /> 
            <Redirect to={session.authorization === 'Unauthorized'? '/session/sign-in' : '/reddit'}/>
        </Switch>
        <footer className="footer">
        <a href='https://pngtree.com/so/social-icons'>social icons png from pngtree.com</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
