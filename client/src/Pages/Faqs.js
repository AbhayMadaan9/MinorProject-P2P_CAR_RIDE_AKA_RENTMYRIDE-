 import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
const Sec1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%
`
const Heading = styled.p`
font-size: large;
font-weight: 500;
`
export default function Faqs() {
  return (
    <>
    <Main>
      <Sec1>
        <Heading>RentMyRide</Heading>
        <Heading>About RentMyRide</Heading>
        <Heading>About Booking</Heading>
        <Heading>Payments & refunds</Heading>
      </Sec1>
    </Main>
    </>
  )
}
