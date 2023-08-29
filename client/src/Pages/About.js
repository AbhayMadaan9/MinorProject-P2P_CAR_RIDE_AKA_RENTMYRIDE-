import React from 'react' 
import styled from 'styled-components'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Groups2Icon from '@mui/icons-material/Groups2';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Footer from '../components/Footer'
import Remainder from '../components/Remainder'
import Comparison from './Comparison';
import Navbar from '../components/Navbar';


const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
flex-wrap: wrap;
`
const Sec1 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding: 24px;
width: 100%;
flex-wrap: wrap;
`
const Img = styled.img`

`
const Info = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 12px;
gap: 12px;
width: 100%;
`
const Heading = styled.h2`
font-weight: bold;
color: #71e5d8;
`
const Text = styled.p`
color: #b12c7d;
font-size: large;
font-weight: 300;
`
 const Sec = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 24px;
padding: 24px;
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
const Card = styled.div`
box-shadow: 2px black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
border-radius: 2px;
padding: 16px;
`
const Cards = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
gap: 32px;
`
const Features = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;
`
const Feature = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 20%;
`
export default function About() {
  return (
    <>
    <Main>
      <Navbar textcolor="white"/>
      <Sec1>
      <Info>
      <Head>
          <Line/>
          <Heading>About Us</Heading>
        </Head>
        <Text>
        RentMyRide is a decentralized car rental platform that allows users to rent their vehicles to others. Our website is designed to provide a secure and convenient way for car owners to rent their vehicles and for renters to find affordable and reliable transportation. Using cutting-edge technologies such as blockchain and IPFS, RentMyRide offers a unique solution to the traditional car rental industry.
</Text>
<Text>
We believe in creating a sharing economy where people can share their resources and help each other out. Our platform provides a win-win situation for car owners and renters, as owners can earn extra income by renting out their vehicles and renters can save money by avoiding expensive car rental companies.
</Text>

<Text>
Join us today and be a part of the sharing economy revolution with RentMyRide!
        </Text>
      </Info>
      <Img src='./abtpto.jpg' width="50%"/>
      </Sec1>
      <Sec>
        <Head>
          <Line/>
          <Heading>Our Vision</Heading>
        </Head>
        <Cards>
        <Card>
          <Text>To revolutionize the car rental industry by providing a decentralized platform for car owners and renters, where they can easily and securely connect and transact without the need for intermediaries.</Text>
          <Text><b>Founder-Abhay Madaan</b></Text>
        </Card>
        <Card>
          <Text>To promote sustainable transportation by encouraging the sharing economy, reducing the number of cars on the road, and promoting the use of eco-friendly vehicles.</Text>
          <Text><b>Founder-Raunak Raj</b></Text>
        </Card>
        <Card>
          <Text>To create a trusted and transparent platform for car owners and renters, where they can safely share their personal and vehicle information, and build a community who share a passion for cars.</Text>
          <Text><b>Founder-Ritesh Kumar</b></Text>
        </Card>
        </Cards>
      </Sec>
      <Sec>
      <Head>
          <Line/>
          <Heading>Our Company Values</Heading>
        </Head>
        <Features>
          <Feature>
<ImportContactsIcon sx={{fontSize: "60px", color: "#71e5d8"}}/>
<Text><b>Transparent</b></Text>
<Text>We are committed to maintaining a transparent platform for all our users. All the vehicle and user information is publicly displayed on the website for users to make informed decisions while renting a vehicle.</Text>
          </Feature>
          <Feature>
<EmojiEventsIcon sx={{fontSize: "60px", color: "#71e5d8"}}/>
<Text><b>Self-Improvement</b></Text>
<Text> We constantly strive to improve our services to meet the evolving needs of our users. We are committed to incorporating the latest technologies and best practices to provide a seamless and hassle-free experience to our users.</Text>
          </Feature>
          <Feature>
<Groups2Icon sx={{fontSize: "60px", color: "#71e5d8"}}/>
<Text><b>Commitment</b></Text>
<Text>We are committed to providing our users with the best possible experience while using our platform. We strive to maintain a high level of customer satisfaction by ensuring that all the transactions on our platform are smooth and hassle-free.</Text>
          </Feature>
          <Feature>
<RocketLaunchIcon sx={{fontSize: "60px", color: "#71e5d8"}}/>
<Text><b>Security</b></Text>
<Text>We prioritize the security of our users' information and transactions. All the transactions on our platform are secure and encrypted to protect users' sensitive information from unauthorized access and potential cyber threats.</Text>
          </Feature>
        </Features>
      </Sec>
      <Sec>
      <Head>
          <Line/>
          <Heading>Comparison</Heading>
        </Head>
      
        <Comparison/>
      </Sec>
      <Sec>
      <Head>
          <Line/>
          <Heading>Professional Work Team</Heading>
        </Head>
       <Cards>
       <Card>
          <Img src='./abhaypic.png' width="100px"/>
          <Text>Raunak Raj</Text>
          <Text><b>Founder &CEO</b></Text>
        </Card>
        <Card>
          <Img src='./abhaypic.png' width="100px"/>
          <Text>Ritesh Kumar</Text>
          <Text><b>Founder &CEO</b></Text>
        </Card>
        <Card>
          <Img src='./abhaypic.png' width="100px"/>
          <Text>Abhay Madaan</Text>
          <Text><b>Founder &CEO</b></Text>
        </Card>
       </Cards>
      </Sec>
      <Remainder/>
      <Footer/>
    </Main>
    </>
  )
}
