import React from 'react'
import styled from 'styled-components'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #00C9A7;
width: 100%;
gap: 16px;
color: white;
`
const First = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
const Second = styled.div``
const Section = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
color: white;
padding: 12px;
gap: 8px;
`
const Icons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 16px;
`
const Heading = styled.div`
font-size: xx-large;
letter-spacing: 2px;
font-weight: 500;
font-family: 'Oswald', sans-serif;
cursor: pointer;
`
const Icon = styled.div`
border: 1px solid white;
border-radius: 50%;
padding: 8px;
`
const Contact = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
gap: 12px;
width: 200px;
`
export default function Footer() {
  return (
    <>
    <Main>
       <First>
       <Section>
            <p>logo</p>
            <Heading>Rent My Ride</Heading>
            <p>Unlock the Ride of Your Dreams with RentMyRide</p>
            <Icons>
                <Icon>
                <FacebookRoundedIcon fontSize='large'/>
                </Icon>
                <Icon>
                <YouTubeIcon fontSize='large'/>
                </Icon>
                <Icon>
                <TwitterIcon fontSize='large'/>
                </Icon>
                <Icon>
                <InstagramIcon fontSize='large'/>
                </Icon>
            </Icons>
        </Section>
        <Section>
          <Link to="/home" style={{textDecoration: "none", color: "white"}}><h5>Home</h5></Link>
          <Link to="/faqs" style={{textDecoration: "none", color: "white"}}> <h5>FAQs</h5></Link>
          <Link to="/policy" style={{textDecoration: "none", color: "white"}}><h5>Policy</h5></Link>
          <Link to="/blog" style={{textDecoration: "none", color: "white"}}><h5>Blog</h5></Link>
        </Section>
        <Section>
          <h4>Contact</h4>
          <Contact>
            <LocalPhoneRoundedIcon fontSize='medium'/>
            <p>+91 9999467336</p>
          </Contact>
          <Contact>
            <EmailRoundedIcon fontSize='medium'/>
            <p><a href="mailto:madaanabhay9@gmail.com?subject=Query of User" >madaanabhay9@gmail.com</a></p>
            </Contact>
            <Contact>
            <FmdGoodRoundedIcon fontSize='medium'/>
            Guru Nanak Dev Engineering College,
Gill Park, Gill Road, Ludhiana, Punjab 141006 
            </Contact>
        </Section>
       </First>
       <Second>
        <p>Made with <FavoriteRoundedIcon style={{color: "Red"}}/> by <b>Raunak Raj</b>, <b>Ritesh Kumar</b>, <b>Abhay Madaan</b></p>
       </Second>
    </Main>
    </>
  )
}
