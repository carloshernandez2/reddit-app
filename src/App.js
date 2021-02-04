import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import './App.css'; 

import { Navbar } from "./app/Navbar/Navbar";
import { Searchbar } from "./app/Searchbar/Searchbar";
import { SubReddit } from "./features/subReddit/SubReddit";
import { Reddit } from "./features/reddit/Reddit";
import { SingleReddit } from "./features/reddit/SingleReddit";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <header className="header headtype">
          <h1>Reddit app</h1>
          <h2>Your best choice</h2>
        </header>
        <Switch>
          <Route exact path="/" component={Searchbar}/> 
        </Switch>
        <div className="subred2">
          <div></div>
          <div className="highlight"></div>
        </div>
        <header className="subhead headtype">
          <h2>Info zone</h2>
        </header>
        <SubReddit />
        <Switch>
          <Route exact path="/" component={Reddit}/>
          <Route exact path="/reddits/:id" component={SingleReddit}/>
          <Redirect to="/" />
        </Switch>
        <footer className="footer">
        <a href='https://pngtree.com/so/social-icons'>social icons png from pngtree.com</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
