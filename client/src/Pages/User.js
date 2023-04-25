import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 8px;
`
const Sec = styled.div`
cursor: pointer;
`
const Account = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 6px;
`

const Sec1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 8px;
`
const Content = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
gap: 8px;
`

const Heading = styled.p`
font-size: large;
font-weight: 500;
color: #71e5d8;
padding: 4px;
cursor: pointer;
` 
const Hr = styled.hr`
border: 1px solid black;
width: 100%;
`
const Sec2 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
padding: 16px;
`
const Left = styled.div`
width: 40%;
`
const Right = styled.div`
width: 60%;
`


export default function User() {
    const [CurSec, setCurSec] = React.useState("account")
    return (
        <>
            <Main>
                <Sec1>
                    <Content><Heading><Link to='/' style={{ textDecoration: "none", color: "#71e5d8" }} >RentMyRide</Link></Heading></Content>
                    <Content>
                        <AccountCircleIcon fontSize='large' />
                        <Heading>Abhay Madaan</Heading>
                    </Content>
                </Sec1>
                <Hr />
                <Sec2>
                    <Left>
                    <Main>
        <Account>
            <img src="" alt="accountPic" />
            <h3>Abhay Madaan</h3>
            <p>+91 9999467336</p>
            <p>madaanabhay9@gmail.com</p>
        </Account>
        <Hr/>
        <Sec onClick={()=>{setCurSec("booking")}}><h4>My Bookings</h4></Sec>
        <Hr/>
        <Sec onClick={()=>{setCurSec("account")}}><h4>Account</h4></Sec>
        <Hr/>
        <Sec onClick={()=>{setCurSec("verification")}}><h4>Vehicle Verification</h4></Sec>
     </Main>
                    </Left>
                </Sec2>
            </Main>
        </>
    )
}
