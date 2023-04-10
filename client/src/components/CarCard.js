import React from 'react'
import styled from 'styled-components'
 import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
 import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
 import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';



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


export default function CarCard(props) {
  console.log(props);
  return (
    <>
    <Main>
        <Img src="https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=740&t=st=1681039732~exp=1681040332~hmac=2531d5152f44ef082fe0242261dc117c7595c0e881c8afc1974e8e92dbbeafc5"/>
        <Name>Maruti</Name>
        <Detail>
          <Detailname><LocalGasStationIcon/> 
           Diseal</Detailname>
          <Detailname><AirlineSeatReclineNormalIcon/> 5</Detailname>
          <Detailname><PrecisionManufacturingIcon/> Automatic</Detailname>
        </Detail>
       <Pricename>$540</Pricename>
       <Button>Book</Button>
    </Main>
    </>
  )
}
