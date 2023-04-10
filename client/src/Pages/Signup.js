import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Body = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 588px;
`
const Main = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 16px;
box-shadow: 0px 10px 16px 0px rgba(255,255,255,0.7);
-webkit-box-shadow: 0px 10px 16px 0px rgba(255,255,255,0.7);
-moz-box-shadow: 0px 10px 16px 0px rgba(255,255,255,0.7);
width: 100%;
height: fit-content;
margin-right: 24px;
background-color: white;
`
const Left = styled.div`
width: 600px;
height: 500px;
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 16px;
padding: 24px;
`
const Img = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
width: 230px;
`
export default function Signup() {
  return (
    <>
    <Body>
    <Main>
        <Left>
        <Img src='./signup_photo.jpg'/>

        </Left>
        <Right>
        <TextField
              label="Firstname"
              sx={{width: "230px"}}
            />
            <TextField
              label="Lastname"
              sx={{width: "230px"}}
            />
              <TextField
              label="Username"
              sx={{width: "230px"}}
            />
            <TextField
              label="Password"
              sx={{width: "230px"}}
            />
            <Button>Signup</Button>       
        </Right>
        
    </Main>

    </Body>
    </>
  )
}
