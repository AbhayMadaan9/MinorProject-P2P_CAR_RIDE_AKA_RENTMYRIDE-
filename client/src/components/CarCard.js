import React from 'react'
import styled from 'styled-components'
 import Button from '@mui/material/Button'

const Main = styled.div`
padding: 24px;
width: fit-content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Oswald', sans-serif;
cursor: pointer;
gap: 6px;
font-size: x-large;
`
const Img = styled.img`
width: 100%;
height: 120px;
object-fit: cover;
border-radius: 10px 10px 0px 0px;
`
const Price = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

export default function CarCard(props) {
    
  return (
    <>
    <Main>
        <Img src={props.image}/>
        <p>{props.name}</p>
        <Price>
            <p>Per Day</p>
            <p>{props.price}</p>
        </Price>
        {/* <Button variant="contained" sx={{backgroundColor: "#00C9A7"}}>Reserve Deal</Button> */}
    </Main>
    </>
  )
}
