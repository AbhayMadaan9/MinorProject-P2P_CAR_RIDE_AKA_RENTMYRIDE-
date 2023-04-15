import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

const Main = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
`
const Sec1 = styled.div`
 flex: 1;

`
const Sec2 = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
`
const Img = styled.img``
const ContactForm = styled.div`
width: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
width: 230px;
`
const Icons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
`

export default function Contact() {
  return (
    <>
      <Main>
        <Sec1>
          <Img src='./contactPic.jpg' width="100%" />
        </Sec1>
        <Sec2>
          <ContactForm>
            <h3>Contact Us</h3>
              <TextField
                label="UserName"
                variant='standard'
                sx={{width: "100%"}}
              />
               <TextField
                label="Email"
                variant='standard'
                sx={{width: "100%"}}
              />
               <TextField
                label="Message"
                variant='standard'
                sx={{width: "100%"}}
              />
              <Button>Submit</Button>
              <h4>Or</h4>
              <Icons>
                <LocalPhoneRoundedIcon fontSize='large' sx={{color: "#00C9A7"}}/>
                <MailRoundedIcon fontSize='large' sx={{color: "#00C9A7"}}/>
                <FacebookRoundedIcon fontSize='large' sx={{color: "#00C9A7"}}/>
                <TwitterIcon fontSize='large' sx={{color: "#00C9A7"}}/>
              </Icons>
          </ContactForm>
        </Sec2>
      </Main>
    </>
  )
}
