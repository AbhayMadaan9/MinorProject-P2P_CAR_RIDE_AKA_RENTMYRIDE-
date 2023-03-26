import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";



const Main = styled.div`
padding: 5px;
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
font-size: x-large;
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
            <Headings><p>Home</p></Headings>
            <Headings><p>Models</p></Headings>
            <Headings><p>About Us</p></Headings>
            <Headings><p>Contact Us</p></Headings>
        </Second>
        <Third>
           <Headings><p>Login</p></Headings>
            <Headings><p>Sign Up</p></Headings>
        </Third>
    </Main>
    </>
  )
}
