import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import styled from 'styled-components';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 24px;
gap: 24px;
margin-top: 44px;
`
const Section = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
`
const Icon = styled.div`
background-color: #00C9A7;
padding: 8px;
border-radius: 50%;
color: white;
`
 
const Text = styled.div`
font-weight: 500;
font-size: large;
`
const Heading = styled.div`
text-align: center;
`
const Contents = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export default function Working() {
  return (
    <>
    <Main>
        <Heading>
            <h2>How it works</h2>
            <h5>A better way to search for cars</h5>
        </Heading>
        <Contents>
        <Section>
            <Icon><LocationOnIcon fontSize='large' color='white'/></Icon>
            <Text>Choose Location</Text>
            <p>This could be implemented through a search bar or interactive map where users can input their preferred pick-up location. Additionally, you can provide suggestions or popular locations to facilitate the selection process.</p>
        </Section>
        <Section>
            <Icon><CalendarMonthIcon fontSize='large'/></Icon>
            <Text>Pick Up Date</Text>
            <p>A user-friendly interface with a calendar feature can allow them to select the desired dates easily. Ensure that the system considers minimum rental duration requirements, if any, and displays availability accordingly.</p>
        </Section>
        <Section>
            <Icon><DirectionsCarIcon fontSize='large'/></Icon>
            <Text>Book Your Car</Text>
            <p>Before finalizing the booking, display a summary of the selected vehicle, rental dates, additional services, and total cost. Allow users to review and make any necessary changes. Once confirmed, prompt them to accept the terms and conditions and proceed with payment.</p>
        </Section>
        </Contents>
    </Main>
    </>
  )
}
