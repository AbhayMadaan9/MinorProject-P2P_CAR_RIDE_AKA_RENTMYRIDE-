import React from 'react'
import styled from 'styled-components'
import CarImages from '../components/CarImages'
import CarInfo from '../components/CarInfo'
import RentPrice from '../components/RentPrice'
import Navbar from '../components/Navbar'



const Main  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;

`




export default function Car() {
  return (
    <>
    <Main>
      <Navbar textcolor="black"/>
      <CarImages/>
      <CarInfo/>
      
    </Main>
    </>
  )
}
