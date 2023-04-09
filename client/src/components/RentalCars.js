//import Button  from '@mui/material/Button'
import React from 'react'
import styled from 'styled-components'
import car from '../SampleCars.js'
import CarCard from './CarCard'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 10px;
`
const Headings = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 35px;
`
const Cars = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Text = styled.div`
font-size: x-large;
letter-spacing: 1px;
font-weight: 500;
font-family: 'Oswald', sans-serif;
cursor: pointer;
`
const Butt = styled.div`

`

export default function RentalCars() {
  return (
    <>
    <Main>
        <Headings>
            <Text>Our Rented Cars</Text>
            {/* <Butt><Button variant="contained" >Explore More</Button></Butt> */}
        </Headings>
        <Cars>
            {car.map(ite=>(
               <CarCard car={ite}/>
            )  
            )}
        </Cars>
    </Main>
    </>
  )
}
