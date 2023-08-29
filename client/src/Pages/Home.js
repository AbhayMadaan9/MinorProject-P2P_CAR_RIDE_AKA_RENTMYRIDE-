import React from 'react'
import Carousels from '../components/Carousels'
import FAQ from '../components/FAQ'
import HappyCustomers from '../components/HappyCustomers'
import ImgCover from '../components/ImgCover'
import Navbar from '../components/Navbar'
import RentalCars from '../components/RentalCars'
import SearchCars from '../components/SearchCars'
import Remainder from '../components/Remainder'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Working from '../components/Working'

const Main = styled.div`
position: relative;
`
const Nav = styled.div`
position: absolute;
width: 100%;
margin: 0;
padding: 0;
z-index: 2;
`
const Imgcover =  styled.div`
position: absolute;
width: 100%;
margin: 170px 0px 0px 0px;
padding: 0;
z-index: 2;
`

export default function Home() {
  return (
    <>
    <Main>
        <Navbar/>
      <Carousels/>
      <SearchCars/>
      <RentalCars/>
      <Working/>
      <HappyCustomers/>
      <FAQ/>
      <Remainder/>
      <Footer/>
    </Main>
    
    </>
  )
}
