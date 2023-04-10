import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'



const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
padding: 24px;
margin-top: 24px;
`
const First = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 12px;
`
const Text = styled.div`
font-size: xx-large;
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
height: 44px;
`
const Textlight = styled.p`
font-weight: 200;
`
export default function Remainder() {
  return (
    <>
    <Main>
        <Text>Save Time, Save Money </Text>
        <Textlight>Sign up and send the best ideal for you</Textlight>
        <First>
        <TextField label="Enter your email address" sx={{width: "18rem"}} type='email'/>
       <Button>Subcribe</Button>
        </First>
        
    </Main>
    </>
  )
}
