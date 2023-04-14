 import React, { useState } from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom/cjs/react-router-dom';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`
const Sec1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 12px;
`
const Heading = styled.p`
font-size: large;
font-weight: 500;
color: #71e5d8;
padding: 4px;
cursor: pointer;
&:hover{
  font-size: 20px;
  transition: font-size .5s ease-in-out;
}

`
const Content = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`
const Hr = styled.hr`
border: 1px solid black;
width: 100%;
`
const Head = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 8px;
 `
 const Line = styled.hr`
border: 2px solid darkblue;
height: 24px;
`
const Sec2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;
padding: 16px;
`
const Questions = styled.div`
flex: 1;
width: 100%;
height: 100%;
padding: 24px;
display: flex;
flex-direction: column;
align-content: flex-start;
justify-content: center;
gap: 18px;
`


export default function Faqs() {
  const [CurSec, setCurSec] = useState("us")
  
  if(CurSec == "us") return(
    <>
    <Main>
      <Sec1>
        <Content><Heading><Link to='/'style={{textDecoration: "none", color: "#71e5d8"}} >RentMyRide</Link></Heading></Content>
        <Content>
        <Heading onClick={()=>{setCurSec("us")}}>About RentMyRide</Heading>
        <Heading onClick={()=>{setCurSec("booking")}}>About Booking</Heading>
        <Heading onClick={()=>{setCurSec("prs")}}>Payments & refunds</Heading>
        </Content>
      </Sec1>
      <Hr/>

      <Questions>
      <Head>
          <Heading style={{fontSize: "x-large"}}><b>About RentMyRide</b></Heading>
        </Head>
        <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>What is RentMyRide?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          RentMyRide is a decentralized car rental platform that allows users to rent their vehicles to others. Our website is designed to provide a secure and convenient way for car owners to rent their vehicles and for renters to find affordable and reliable transportation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Booking criteria & documents?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for “Light Motor Vehicles”
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Do I have to bring the car back to the same location?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        Yes,On our website we allow users to pick up the rented vehicle from vehicle owners location only no others subtiute locations will be offered to them for now incase in any further updates you guys will be informed surely.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Can I book for any duration of time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, as long as the vehicle owner has provided availability for the requested duration, renters can book the vehicle for any duration of time that the owner has made available. It is important for renters to confirm with the owner the availability of the vehicle before booking to avoid any conflicts or misunderstandings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Is there any speed limit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        It depends on the owner of the vehicle it will be included on the contract.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Are there any restricted areas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take Revv cars. Customer will be fully liable for any damages incurred to the car in that region.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Is Revv 24/7?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we are accessible 24x7. Only if Owners want to rent their vehicle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Questions>
    </Main>
    </>
  )
  if(CurSec == "booking") return(
    <>
    <Main>
      <Sec1>
        <Content><Heading><Link to='/'style={{textDecoration: "none", color: "#71e5d8"}} >RentMyRide</Link></Heading></Content>
        <Content>
        <Heading onClick={()=>{setCurSec("us")}}>About RentMyRide</Heading>
        <Heading onClick={()=>{setCurSec("booking")}}>About Booking</Heading>
        <Heading onClick={()=>{setCurSec("prs")}}>Payments & refunds</Heading>
        </Content>
      </Sec1>
      <Hr/>

      <Questions>
      <Head>
          <Heading style={{fontSize: "x-large"}}><b>About Booking</b></Heading>
        </Head>
        <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>How do I make a booking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Booking with us is quick and easy.Just select your city, date and time of your trip, key in your location and choose the type of car you want. Then enter your payment details, confirm payment and you are ready to go!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Can I extend/ cancel/ modify?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>What happens if I return the car late?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We understand that sometimes there can be last-minute changes in your plans, and we will try our best to accommodate them. But in situations where it can cause trouble to the next user (ie, the person whose booking starts after your ends), we cannot allow late returns. Please refer to our Fee policy for more details on late fees and extension charges.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>If I return the car before the scheduled end time of my booking, do I get any refunds?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In case of shortening, we can try arranging an earlier pickup of the car, if you inform us at least 3 hours before your preferred pick-up time. However, no charges or refunds will be applicable on the base fare for the original trip.
          </Typography>
        </AccordionDetails>
      </Accordion> 
      </Questions>
    </Main>
    </>
  )
  if(CurSec == "prs") return(
    <>
    <Main>
      <Sec1>
        <Content><Heading><Link to='/' style={{textDecoration: "none", color: "#71e5d8"}}>RentMyRide</Link></Heading></Content>
        <Content>
        <Heading onClick={()=>{setCurSec("us")}}>About RentMyRide</Heading>
        <Heading onClick={()=>{setCurSec("booking")}}>About Booking</Heading>
        <Heading onClick={()=>{setCurSec("prs")}}>Payments & refunds</Heading>
        </Content>
      </Sec1>
      <Hr/>
      <Questions>
      <Head>
          <Heading style={{fontSize: "x-large"}}><b>Payments & refunds</b></Heading>
        </Head>
        <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>What modes of payments are accepted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>we use Metamask as the default payment gateway to receive and deduct money from both the car owners and renters. When a renter makes a booking request, they can authorize the payment using their Metamask wallet. The payment will be held in escrow until the rental period is over and the car is returned to the owner. Once the owner confirms the return of the car, the payment will be released to the owner's wallet minus the platform fee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Who pays for parking and tolls/inter-state entry taxes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The toll charges incurred during your trip will be taken care by the car renter only. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#00C9A7", borderRadius: "10px"}}
        >
          <Typography sx={{color: "white"}}>Do I need to pay the fines incurred during my booking, due to parking/traffic violations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        Yes
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Questions>
    </Main>
    </>
  )
}
