import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import './App.css'; 

import { Navbar } from "./app/Navbar/Navbar";
import { Searchbar } from "./app/Searchbar/Searchbar";
import { SubReddit } from "./features/subReddit/SubReddit";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <header className="header">
          <h1>Reddit app</h1>
          <h2>Your best choice</h2>
        </header>
        <Searchbar/>
        <div className="subred2">
          <div></div>
          <div className="highlight"></div>
        </div>
        <SubReddit />
        <footer className="footer">
        <a href='https://pngtree.com/so/social-icons'>social icons png from pngtree.com</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
