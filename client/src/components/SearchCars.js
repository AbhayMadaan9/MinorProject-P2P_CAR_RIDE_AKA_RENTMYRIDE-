import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
`
const Headings = styled.div`
font-size: xx-large;
letter-spacing: 1px;
font-weight: 500;
font-family: 'Oswald', sans-serif;
`
const Input = styled.input``
const Comp = styled.div``

export default function SearchCars() {
    const date = new Date();

  return (
    <>
    <Main>
        <First><Headings><p>Find you perfect match</p></Headings>
        <span>Set your location data time</span></First>
        <Second>
           <Input placeholder='PickUp Date'/>
           <Input placeholder='PickUp Time'/>
           <Input placeholder='Drop date'/>
           <Input placeholder='Drop time'/>
        </Second>
    </Main>
    </>
  )
}
