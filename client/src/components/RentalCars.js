import React from 'react'
import styled from 'styled-components'
import car from '../SampleCars.js'
import CarCard from './CarCard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 10px;
margin-top: 44px;
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
align-self: flex-start;
justify-content: center;
flex-wrap: wrap;
`
const Text = styled.div`
font-size: x-large;
letter-spacing: 1px;
font-weight: 500;
cursor: pointer;
`
const Butt = styled.div`

`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
`

export default function RentalCars() {
  return (
    <>
    <Main>
        <Headings>
            <Text>Our Rented Cars</Text>
            <Butt><Button><Link to="/cars" style={{textDecoration: "none", color: "white"}}>Explore More</Link></Button></Butt>
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
