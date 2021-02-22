import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import './SessionApp.css'; 

import { Session } from "../Features/Session";

function AppSession() {

  let { path } = useRouteMatch();

  return (
      <div className="AppReddit">
        <Switch>
          <Route exact path={`${path}/sign-in`}> 
            <header className="r-header headtype">
              <h1>Welcome to my app!</h1>
              <h2>fill the form and get ready to use my app</h2>
            </header>
            <header className="r-subhead headtype">
              <h2>SignIn</h2>
            </header>
          </Route> 
          <Route exact path={`${path}/sign-up`}> 
            <header className="r-header headtype">
              <h1>Welcome to my app!</h1>
              <h2>Please fill the form to register and press signIn button in the navbar</h2>
            </header>
            <header className="r-subhead headtype">
              <h2>SignUp</h2>
            </header>
          </Route> 
        </Switch>
        <main className="r-reddit container">
          <Session />
        </main>
      </div>
  );
}

export default AppSession;
