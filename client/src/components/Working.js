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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi possimus quia ipsa hic facilis, perferendis maxime nostrum voluptates accusamus repellendus beatae rem aut aperiam quasi consectetur optio deserunt cum?</p>
        </Section>
        <Section>
            <Icon><CalendarMonthIcon fontSize='large'/></Icon>
            <Text>Pick Up Date</Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi possimus quia ipsa hic facilis, perferendis maxime nostrum voluptates accusamus repellendus beatae rem aut aperiam quasi consectetur optio deserunt cum?</p>
        </Section>
        <Section>
            <Icon><DirectionsCarIcon fontSize='large'/></Icon>
            <Text>Book Your Car</Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi possimus quia ipsa hic facilis, perferendis maxime nostrum voluptates accusamus repellendus beatae rem aut aperiam quasi consectetur optio deserunt cum?</p>
        </Section>
        </Contents>
    </Main>
    </>
  )
}
