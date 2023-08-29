import { HealthAndSafety, Spa, Star } from '@mui/icons-material'
import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import CarImages from './CarImages';
import { useContext } from "react";
import { UserContext } from "../App";
import axios from 'axios';
import { useParams } from "react-router-dom"
import { WhatsApp } from 'react-whatsapp-component'



const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
padding: 16px;
width: 100%;
background-color: #D8EADD;
border-radius: 1rem;
color: black;
margin-top: 45rem;
`
const Sec1 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
width: 100%;
`
const Left1 = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
gap: 4px;
`
const Right1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`

const Sec2 = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;

gap: 8px;
width: 100%;
`
const Sec3 = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;

width: 100%;
gap: 8px;
`
const Sec4 = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: flex-start;
width: 100%;
`

const Text = styled.p`
font-size: medium;
font-weight: 500;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
`
const Span = styled.div`
font-size: medium;
font-weight: 100;
`
const Heading = styled.h4`
font-size: x-large;
font-weight: bold;
`
const List = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
gap: 8px;
flex-wrap: wrap;
`
const Hr = styled.hr`
border: 1px solid black;
width: 100%;
`
const Features = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
gap: 4px;
padding: 16px; 
`
const Feature = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

gap: 6px;
`
const Timings = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
flex-wrap: wrap;
`

export default function CarInfo() {
    const { Currentuser, Loctime, state, CurCarInfo, getCarInfo } = useContext(UserContext);
    const [CarOwner, setCarOwner] = useState({});
    let { id } = useParams();
  
    useEffect(() => {
      getCarInfo(id);
    }, [id]);
  
    const [isAdded, setisAdded] = useState(false);
    const inputs = {
      cost: CurCarInfo.price
    };
  
 
  const [isbooked, setisbooked] = useState(false)
    const handleBook = async () => {
      console.log(inputs);
      const res = await axios.post(`http://localhost:8800/book/${CurCarInfo.id}`, { inputs }, { withCredentials: true });
      alert("Car booked successfully")
      setisbooked(true)
    //   const delres = await axios.delete(`http://localhost:8800/book/${CurCarInfo.id}`, { inputs, withCredentials: true });
    //   console.log(delres)
    };
    if(isbooked)
    {
        const delres = async ()=>{
            await axios.delete(`http://localhost:8800/book/${CurCarInfo.id}`, { inputs, withCredentials: true });
        }
         
      delres();
    }
  
const {name, model, gear, transmission, seats, rating, username, duration_end_time, duration_start_time, location, type} = CurCarInfo;

    return (
        <>
            <Main>
                <Sec1>
                    <Left1>
                        <Heading>{name}</Heading>
                        <List>
                            <Span>{model}</Span>
                            <Span>{gear}</Span>
                            <Span>{transmission}</Span>
                            <Span>{seats} seats</Span>
                        </List>
                        <List>
                            <StarIcon sx={{ color: "gold" }} />
                            <Span>{rating}</Span>
                            <Span>23000km driven</Span>
                        </List>
                    </Left1>
                    <Right1>
                        <AccountCircleIcon fontSize='large' />
                        <Heading>{Currentuser.username}</Heading>
                    </Right1>
                </Sec1>
                <Hr />
                <Sec2>
                    <Heading>About the car</Heading>
                    <Text>This is {name} comes fully loaded with Music system. The smooth driving experience and powerful 1500 CC engine ensurel you have a great ride. You will find always my car extremely clean ready to welcome you. Comfortable cushion seats ensure you suprest dme comfort whibe bele driving. Trust me choosing this car will be best decision for your trip.</Text>
                    <Features>
                        <List>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>{transmission}</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>{type}</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>{seats}</Span>
                            </Feature>
                        </List>
                    </Features>
                </Sec2>
                <Hr/>
                <Sec3>
                    <Heading>Booking time</Heading>
                    <Timings>
                    <Left1>
                       <Span>Pickup</Span> 
                       <Text>{duration_start_time}</Text>
                    </Left1>
                    <ArrowRightAltIcon fontSize='large'/>
                    <Left1>
                        <Span>Drop</Span>
                        <Text>{duration_end_time}</Text>
                    </Left1>
                    </Timings>
                    {/* <Span>Total duration</Span> */}
                </Sec3>
                <Hr/>
                <Sec4>
                    <Heading>Car Location</Heading>
                    <Text>{location}</Text>
                </Sec4>
                <Sec4>
                    <Heading>Ratings & Reviews</Heading>
                    <StarIcon sx={{color: "gold"}}/> {rating}
                </Sec4>
                <Hr/>
                {/* <Sec4>
                    <ReviewCard/>
                </Sec4> */}
                <Sec4>
                    <Heading>Aggrement policy</Heading>
                    <Span>I hereby agree to the terms and conditions of the Lease Agreement with Host</Span>
                   
                    <Link to = '/aggrement'>See details</Link>
                    <WhatsApp phone="9999467336" text="Hi, Can I rent your car please confirm with yes or no?" />
                    <Button onClick={handleBook}>
                      Book Now
                    </Button>
                </Sec4>
            </Main>
        </>
    )
}
