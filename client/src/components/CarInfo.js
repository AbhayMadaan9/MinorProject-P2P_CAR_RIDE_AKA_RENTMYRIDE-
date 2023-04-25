import { HealthAndSafety, Spa, Star } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import CarImages from './CarImages';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
padding: 16px;
width: 100%;
background-color: darkblue;
border-radius: 1rem;
color: white;
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
background-color: hotpink;
gap: 8px;
width: 100%;
`
const Sec3 = styled.div`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
background-color: hotpink;
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
background-color: hotpink;
gap: 4px;
padding: 16px;
width: 100%;
`
const Feature = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: hotpink;
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
    return (
        <>
            <Main>
                <CarImages/>
                <Sec1>
                    <Left1>
                        <Heading>CarName</Heading>
                        <List>
                            <Span>Seltos</Span>
                            <Span>Automatic</Span>
                            <Span>Petrol</Span>
                            <Span>5 seats</Span>
                        </List>
                        <List>
                            <StarIcon sx={{ color: "gold" }} />
                            <Span>4.5</Span>
                            <Span>23000km driven</Span>
                        </List>
                    </Left1>
                    <Right1>
                        <AccountCircleIcon fontSize='large' />
                        <Heading>UserName</Heading>
                    </Right1>
                </Sec1>
                <Hr />
                <Sec2>
                    <Heading>About the car</Heading>
                    <Text>This is Kia Seltos comes fully loaded with Music system. The smooth driving experience and powerful 1500 CC engine ensurel you have a great ride. You will find always my car extremely clean ready to welcome you. Comfortable cushion seats ensure you suprest dme comfort whibe bele driving. Trust me choosing this car will be best decision for your trip.</Text>
                    <Features>
                        <List>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>

                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
                            </Feature>
                            <Feature>
                                <HandymanIcon />
                                <Span>Power Steering</Span>
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
                       <Text>Time</Text>
                    </Left1>
                    <ArrowRightAltIcon fontSize='large'/>
                    <Left1>
                        <Span>Drop</Span>
                        <Text>Time</Text>
                    </Left1>
                    </Timings>
                    <Span>Total duration</Span>
                </Sec3>
                <Hr/>
                <Sec4>
                    <Heading>Car Location</Heading>
                    <Text>Address</Text>
                    <Text>Google Map</Text>
                    <Text>----km from your location</Text> 
                </Sec4>
                <Sec4>
                    <Heading>Ratings & Reviews</Heading>
                    <StarIcon sx={{color: "gold"}}/> 4.54(12 reviews)
                </Sec4>
                <Hr/>
                <Sec4>
                    <ReviewCard/>
                </Sec4>
                <Sec4>
                    <Heading>Aggrement policy</Heading>
                    <Span>I hereby agree to the terms and conditions of the Lease Agreement with Host</Span>
                    <Link to = '/aggrement'>See details</Link>
                </Sec4>
            </Main>
        </>
    )
}
