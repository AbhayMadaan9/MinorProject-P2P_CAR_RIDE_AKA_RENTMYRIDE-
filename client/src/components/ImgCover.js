import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: gainsboro;
min-height: 650px;
color: white;
`
const Left = styled.div`
width: 30rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
text-align: center;
`
const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`
const Headings = styled.div`
font-size: xx-large;
letter-spacing: 1px;
font-weight: 700;
font-family: 'Oswald', sans-serif;
cursor: pointer;
`
const Button = styled.button`
width: fit-content;
border: 0;
background-color: #0d6efd;
font-size: x-large;
font-weight: 500;
color: white;
border-radius: 4px;
font-family: 'Oswald', sans-serif;
cursor: pointer;
letter-spacing: 2px;
word-spacing: 5px;
`
export default function ImgCover() {
  return (
    <>
    <Main>
        <Left>
            <Headings><p>Experience the Thrill of the Open Road with RentMyRide's Mustang GT</p></Headings>
            {/* <Headings><p>Cruise in Style with RentMyRide's Audi A5 Convertible</p></Headings>
            <Headings><p>Get Off the Beaten Path with RentMyRide's Jeep Wrangler</p></Headings>
            <Headings><p>Feel the Power of the Road with RentMyRide's Dodge Charger</p></Headings> */}
            <Button>Book Now</Button>

        </Left>
        <Right>
            <Headings><p>+2 Years</p></Headings>
            <Headings><p>+Sunroof</p></Headings>
            <Headings><p>22.35 kmpl</p></Headings>
            <Headings><p>+2 Years</p></Headings>

        </Right>
    </Main>
    </>
  )
}
