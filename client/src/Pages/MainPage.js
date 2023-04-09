import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function () {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router >
    </>
  )
}
