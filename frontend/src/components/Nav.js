import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Users from "./User";
import Welcome from "./Welcome";
import Games from "./Games";
function Nav() {
  return (
    <>
      <BrowserRouter>
        <Link to="/Welcome">Welcome </Link><br/><br/>
        <Link to="/User">User</Link><br/><br/>
        <Link to="/Games">Games</Link><br/><br/>
         <Switch>
          <Route path="/Welcome">
            <Welcome />
          </Route>
          <Route path="/User">
            <Users />
          </Route>
          <Route path="/Games">
            <Games />
          </Route> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Nav;
