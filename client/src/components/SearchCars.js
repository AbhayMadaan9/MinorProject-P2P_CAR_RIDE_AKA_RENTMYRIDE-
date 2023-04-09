import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
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

const Comp = styled.div``

export default function SearchCars() {
    const date = new Date();

  return (
    <>
    <Main>
        <First><Headings>Find you perfect match</Headings>
        <p>Set your location data time</p></First>
        <Second>
          <TextField label="PickUp Date"/>
           <TextField label='PickUp Date'/>
           <TextField label='PickUp Time'/>
           <TextField label='Drop date'/>
           <TextField label='Drop time'/>
        </Second>
    </Main>
    </>
  )
}
