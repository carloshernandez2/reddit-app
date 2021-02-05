import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import './AppReddit.css'; 

import { Searchbar } from "./Searchbar/Searchbar";
import { SubReddit } from "../features/subReddit/SubReddit";
import { Reddit } from "../features/reddit/Reddit";
import { SingleReddit } from "../features/reddit/SingleReddit";


function AppReddit() {

  let { path } = useRouteMatch();

  return (
      <div className="AppReddit">
        <header className="r-header headtype">
          <h1>Reddit app</h1>
          <h2>Your best choice</h2>
        </header>
        <Switch>
          <Route exact path={`${path}`}> 
            <div className="r-search">
              <Searchbar />
            </div>
          </Route> 
        </Switch>
        <div className="subred2">
          <div></div>
          <div className="highlight"></div>
        </div>
        <header className="r-subhead headtype">
          <h2>Info zone</h2>
        </header>
        <SubReddit />
        <Switch>
          <Route exact path={`${path}/posts/:id`} component={SingleReddit}/>
          <Route exact path={`${path}`} component={Reddit}/>
        </Switch>
      </div>
  );
}

export default AppReddit;
