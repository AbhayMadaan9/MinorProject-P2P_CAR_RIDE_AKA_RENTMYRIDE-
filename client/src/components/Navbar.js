import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'



const Main = styled.div`
padding: 12px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
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
export default function Navbar() {
  return (
    <>
    <Main>
        <First>
          <Logo src="./logo.jpg" alt="logo" />
        </First>
        <Second>
            <Headings><Link to="/" style={{textDecoration: "none", color: "white"}}><p>Home</p></Link></Headings>
            <Headings><Link to="/cars" style={{textDecoration: "none", color: "white"}}><p>Models</p> </Link></Headings>
            <Headings><Link to="/about" style={{textDecoration: "none", color: "white"}}><p>About Us</p></Link></Headings>
            <Headings><Link to="/contact" style={{textDecoration: "none", color: "white"}}><p>Contact Us</p></Link></Headings>
        </Second>
        <Third>
           <Headings><p>Login</p></Headings>
            <Headings><p><Button>Sign Up</Button></p></Headings>
        </Third>
    </Main>
    </>
  )
}
