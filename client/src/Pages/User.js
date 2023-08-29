import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import axios from 'axios';



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
    const { Currentuser,CurCarInfo } = useContext(UserContext);
    const [CurSec, setCurSec] = React.useState("account");
    const BookingSection = () => {
      return (
        <Main>
          <h3>My Bookings</h3>
        </Main>
      );
    };
    
    const AccountSection = ({ user }) => {
      return (
        <Main>
          <h3>Account Details</h3>
          <Account>
          <img src={user.image} alt="accountPic" style={{width: "160px", borderRadius: "1rem", objectFit: "cover"}}/>
            <h4>Name: {user.name}</h4>
            <p>Mobile Number: {user.phone_number}</p>
            <p>Email: {user.email}</p>
            <Link to="/addCar" style={{ textDecoration: "none"}}>Add Car</Link>
          </Account>
        </Main>
      );
    };
    const VerificationSection = () => {
      return (
        <Main>
          <h3>Vehicle Information</h3>
      <b>Owner: </b> <p>{CurCarInfo.name}</p>  
      <b>Model: </b> <p>{CurCarInfo.model}</p>
      <b>transmission: </b> <p>{CurCarInfo.transmission}</p>
      <b>Number: </b> <p>{CurCarInfo.number}</p>
        </Main>
      );
    };
    let section;
    switch (CurSec) {
      case "booking":
        section = <BookingSection />;
        break;
      case "account":
        section = <AccountSection user={Currentuser} />;
        break;
      case "verification":
        section = <VerificationSection />;
        break;
      default:
        section = <AccountSection user={Currentuser} />;
    }
    const [bookedCars, setbookedCars] = useState(null)
    const [UserCar, setUserCar] = useState(null)
    useEffect(()=>{
        const getCars = async()=>{
            const res = await axios.get("http://localhost:8800/book/bookedCars", {withCredentials: true})
            
            setbookedCars(res.data)
        }
        getCars();
    })
    return (
      <>
        <Main>
          <Sec1>
            <Content>
              <Heading>
                <Link to="/" style={{ textDecoration: "none", color: "#71e5d8" }}>
                  RentMyRide
                </Link>
              </Heading>
            </Content>
            <Content>
              <AccountCircleIcon fontSize="large" />
              <Heading>{Currentuser.username}</Heading>
            </Content>
          </Sec1>
          <Hr />
          <Sec2>
            <Left>
              <Main>
                <Account>
                  <img src={Currentuser.image} alt="accountPic" style={{width: "80px", borderRadius: "1rem", objectFit: "cover"}}/>
                  <h3>{Currentuser.name}</h3>
                  <p>{Currentuser.phone_number}</p>
                </Account>
                <Hr />
                <Sec onClick={() => setCurSec("booking")}>
                  <h4>My Bookings</h4>
                </Sec>
                <Hr />
                <Sec onClick={() => setCurSec("account")}>
                  <h4>Account</h4>
                </Sec>
                <Hr />
                <Sec onClick={() => setCurSec("verification")}>
                  <h4>Vehicle Information</h4>
                </Sec>
              </Main>
            </Left>
            <Right>{section}</Right>
          </Sec2>
        </Main>
      </>
    );
  }
