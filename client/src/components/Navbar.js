import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";


const Main = styled.div`
padding: 12px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color: white;
width: 100%;
`

const First = styled.div`
font-size: x-large;
font-family: 'Oswald', sans-serif;
font-weight: 500;
`
const Second = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;


`
const Third = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
`
const Headings = styled.div`
font-size: large;
letter-spacing: 1px;
font-weight: 500;
cursor: pointer;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
`
const Logo = styled.img`
width: 200px;
height: 60px;
object-fit: cover;
background: none;
`
export default function Navbar({textcolor}) {
  const { Currentuser } = useContext(UserContext);
  if (Currentuser != null) {
    return (
      <>
        <Main>
          <First>
            <p style={{color: textcolor == "black"?"black": "white"}}>Rent My Ride</p>
            {/* <Logo src="./logo.jpg" alt="logo" /> */}
          </First>
          <Second>
            <Headings><Link to="/" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white" }}><p>Home</p></Link></Headings>
            <Headings><Link to="/cars" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>Models</p> </Link></Headings>
            <Headings><Link to="/about" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>About Us</p></Link></Headings>
            <Headings><Link to="/contact" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>Contact Us</p></Link></Headings>
          </Second>
          <Third>
            <Headings><Link to="/user" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>{Currentuser.username}</p></Link></Headings>
            <Headings><Link to="/Logout" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p><Button>Logout</Button></p></Link></Headings>

          </Third>
        </Main>
      </>
    )
  }
  else {
    return (
      <>
        <Main>
          <First>
            <p>Rent My Ride</p>
            {/* <Logo src="./logo.jpg" alt="logo" /> */}
          </First>
          <Second>
            <Headings><Link to="/" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>Home</p></Link></Headings>
            <Headings><Link to="/cars" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>Models</p> </Link></Headings>
            <Headings><Link to="/about" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>About Us</p></Link></Headings>
            <Headings><Link to="/contact" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>Contact Us</p></Link></Headings>
          </Second>
          <Third>
            <Headings><Link to="/login" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p>Login</p></Link></Headings>
            <Headings><Link to="/signup" style={{ textDecoration: "none", color: textcolor == "black"?"black": "white"}}><p><Button>Sign Up</Button></p></Link></Headings>
          </Third>
        </Main>
      </>
    )
  }

}
