import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom/cjs/react-router-dom';


const Main = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Pic = styled.div`
flex: 1;
`
const Questions = styled.div`
flex: 1;
width: 100%;
height: 100%;
padding: 24px;
display: flex;
flex-direction: column;
align-content: center;
justify-content: left;
gap: 18px;
`
const Img = styled.img`
width: 100%;
`
const Heading = styled.div`
font-size: xx-large;
letter-spacing: 2px;
font-weight: 500;
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
`


export default function FAQ() {
  return (
    <>
    <Main>
        <Pic>
            <Img src='./FaqPic.jpg'/>
        </Pic>
        <Questions>
          <Heading>
            <p>FAQ</p>
            {/* <Button variant="contained" sx={{backgroundColor: "#00C9A7"}}>View all</Button> */}
            <Button><Link to="/faqs" style={{textDecoration: "none", color: "white"}}>View all</Link></Button>
            </Heading>
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
}
