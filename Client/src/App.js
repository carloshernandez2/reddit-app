import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import './App.css'; 

import { Navbar } from "./app-main/Navbar/Navbar";
import AppReddit from "./Layers/redditLayer/App/AppReddit";
import TrumpApp from "./Layers/trumpLayer/App/TrumpApp";
import SessionApp from "./Layers/sessionLayer/App/SessionApp";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path="/reddit" component={AppReddit} />
            <Route path="/trump" component={TrumpApp} />
            <Route path="/session" component={SessionApp} />
            <Redirect to="/reddit"/>
        </Switch>
        <footer className="footer">
        <a href='https://pngtree.com/so/social-icons'>social icons png from pngtree.com</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
