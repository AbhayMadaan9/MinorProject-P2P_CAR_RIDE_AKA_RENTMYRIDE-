import React from 'react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Cars from './Cars';
import Login from './Login';
import Signup from './Signup'
import About from './About'
import Faqs from './Faqs';
import Contact from './Contact';
import Car from './Car';
import User from './User';
import { useContext } from 'react';
import { UserContext } from '../App';
import Logout from './Logout';
import AddCar from './AddCar'
import Comparison from './Comparison';
export default function () {
  const { Currentuser } = useContext(UserContext);
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
        {Currentuser ? <Redirect to="/" /> : <Login/>}
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/faqs">
          <Faqs/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route path="/show/:id">
          <Car/>
        </Route>
        <Route exact path="/user">
          <User/>
        </Route>
        <Route exact path="/logout">
          <Logout/>
        </Route>
        <Route exact path="/addcar">
          <AddCar/>
        </Route>
        <Route exact path="/comparison">
          <Comparison/>
        </Route>
      </Switch>
    </Router >
    </>
  )
}
