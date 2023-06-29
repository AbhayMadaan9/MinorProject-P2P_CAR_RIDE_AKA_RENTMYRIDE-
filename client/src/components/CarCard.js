import React from 'react'
import styled from 'styled-components'
 import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
 import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
 import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
 import { Link } from 'react-router-dom/cjs/react-router-dom.min'
 


const Main = styled.div`
padding: 24px;
width: fit-content;
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
font-family: 'Oswald', sans-serif;
cursor: pointer;
gap: 8px;
font-size: x-large;
border-radius: 8px;

`
const Img = styled.img`
width: 100%;
height: 120px;
object-fit: cover;
border-radius: 10px 10px 0px 0px;
`
// const Price = styled.div`
// width: 100%;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: space-between;
// padding: 4px;
// `
const Detail = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`
const Detailname = styled.div`
font-size: small;
`
const Name = styled.div``
const Pricename = styled.div``
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: x-large;
border-radius: 12px;
width: 100%;
`


export default function CarCard({car}) {

  const {name, image, transmission, seats, gear, price, id} = car;
  
  return (
    <>
    <Main>
        <Img src={image}/>
        <Name>{name}</Name>
        <Detail>
          <Detailname><LocalGasStationIcon/> 
           {transmission}</Detailname>
          <Detailname><AirlineSeatReclineNormalIcon/> {seats}</Detailname>
          <Detailname><PrecisionManufacturingIcon/> {gear}</Detailname>
        </Detail>
       <Pricename>Rs {price}</Pricename>
       <Button><Link to={`/show/${id}`} style={{ textDecoration: "none", color: "white" }}><p><Button>Book</Button></p></Link></Button>
    </Main>
    </>
  )
}
