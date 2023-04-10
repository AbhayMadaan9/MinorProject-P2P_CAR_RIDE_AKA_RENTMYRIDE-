import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cars from './Cars';
import Login from './Login';
import Signup from './Signup'


export default function () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/cars">
          <Cars/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
    </Router >
    </>
  )
}
