import React from 'react'
import styled from 'styled-components'
import car from '../SampleCars.js'
import CarCard from './CarCard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";

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
  const {availableCars} = useContext(UserContext);
console.log(availableCars);
  return (
    <>
    <Main>
        <Headings>
            <Text>Our Rented Cars</Text>
            <Butt><Button><Link to="/cars" style={{textDecoration: "none", color: "white"}}>Explore More</Link></Button></Butt>
        </Headings>
        <Cars>
          {availableCars.length == 0 && "No car available. Search for different date or time"} 
            {availableCars.slice(0,4).map(ite=>(
               <CarCard car={ite}/>
            )  
            )}
        </Cars>
    </Main>
    </>
  )
}
