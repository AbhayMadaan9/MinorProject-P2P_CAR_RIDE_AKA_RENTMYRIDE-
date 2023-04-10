import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
padding: 16px;
margin-top: 44px;
`
const First = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Second = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
`
const Headings = styled.div`
font-size: xx-large;
letter-spacing: 1px;
font-weight: 500;
font-family: 'Oswald', sans-serif;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
height: 44px;
letter-spacing: 1px;
`
const Textlight = styled.p`
font-weight: 200;
`
const Comp = styled.div``

export default function SearchCars() {
    const date = new Date();

  return (
    <>
    <Main>
        <First><Headings>Find you perfect match</Headings>
        <Textlight>Set your location data time</Textlight></First>
        <Second>
          <TextField label="PickUp Date"/>
           <TextField label='PickUp Date'/>
           <TextField label='PickUp Time'/>
           <TextField label='Drop date'/>
           <TextField label='Drop time'/>
           <Button>Search Car</Button>
        </Second>
    </Main>
    </>
  )
}
