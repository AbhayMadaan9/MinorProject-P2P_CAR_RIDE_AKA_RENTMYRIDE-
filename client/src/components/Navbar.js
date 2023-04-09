import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'



const Main = styled.div`
padding: 12px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: darkblue;
color: white;
`
const First = styled.div`
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
font-family: 'Oswald', sans-serif;
cursor: pointer;
`

export default function Navbar() {
  return (
    <>
    <Main>
        <First>Logo</First>
        <Second>
            <Headings><Link to="/" style={{textDecoration: "none", color: "white"}}><p>Home</p></Link></Headings>
            <Headings><Link to="/cars" style={{textDecoration: "none", color: "white"}}><p>Models</p> </Link></Headings>
            <Headings><Link to="/about" style={{textDecoration: "none", color: "white"}}><p>About Us</p></Link></Headings>
            <Headings><Link to="/contact" style={{textDecoration: "none", color: "white"}}><p>Contact Us</p></Link></Headings>
        </Second>
        <Third>
           <Headings><p>Login</p></Headings>
            <Headings><p>Sign Up</p></Headings>
        </Third>
    </Main>
    </>
  )
}
