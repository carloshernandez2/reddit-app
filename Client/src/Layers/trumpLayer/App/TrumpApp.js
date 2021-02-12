import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import './TrumpApp.css'; 

import { Searchbar } from "../../redditLayer/App/Searchbar/Searchbar";
import { Trump } from "../Features/Trump";

function AppReddit() {

  let { path } = useRouteMatch();

  return (
      <div className="AppReddit">
        <header className="r-header headtype">
          <h1>Trump app</h1>
          <h2>The insults you want, right from our database!</h2>
        </header>
        <Switch>
          <Route exact path={`${path}`}> 
            <div className="r-search">
              <Searchbar />
            </div>
          </Route> 
        </Switch>
        <header className="r-subhead headtype">
          <h2>Insults zone</h2>
        </header>
        <Switch>
          <Route exact path={`${path}`} component={Trump}/>
        </Switch>
      </div>
  );
}

export default AppReddit;
