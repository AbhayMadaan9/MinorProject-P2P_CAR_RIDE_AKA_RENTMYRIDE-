import React from 'react'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
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
font-family: 'Oswald', sans-serif;
cursor: pointer;
`
export default function Remainder() {
  return (
    <>
    <Main>
        <Text>Save Time, Save Money </Text>
        <p>Sign up and send the best ideal for you</p>
        <First>
        <TextField label="Enter your email address" sx={{width: "18rem"}} type='email'/>
        <Button variant="contained" color='primary' sx={{height: "4rem", width: "8rem"}}> 
          Suscribe
        </Button>
        </First>
        
    </Main>
    </>
  )
}
