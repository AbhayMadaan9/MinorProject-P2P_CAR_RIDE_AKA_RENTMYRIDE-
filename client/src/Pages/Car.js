import React from 'react'
import styled from 'styled-components'
import CarImages from '../components/CarImages'
import CarInfo from '../components/CarInfo'
import RentPrice from '../components/RentPrice'



const Main  = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`




export default function Car() {
  return (
    <>
    <Main>
      <CarInfo/>
    </Main>
    </>
  )
}
