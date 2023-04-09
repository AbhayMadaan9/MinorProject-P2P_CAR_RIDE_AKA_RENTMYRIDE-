import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cars from './Cars';
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
      </Switch>
    </Router >
    </>
  )
}
