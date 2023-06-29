import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Body = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 588px;
`
const Main = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 16px;
box-shadow: 0px 10px 16px 0px rgba(255,255,255,0.7);
-webkit-box-shadow: 0px 10px 16px 0px rgba(255,255,255,0.7);
-moz-box-shadow: 0px 10px 16px 0px rgba(255,255,255,0.7);
width: 100%;
height: fit-content;
margin-right: 24px;
background-color: white;
`
const Left = styled.div`
width: 600px;
height: 500px;
`
const Right = styled.form`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
padding: 24px;
`
const Img = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
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
export default function Signup() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    dob: ""
  });
  const [err, setErr] = useState(null);
  const [isValid, setisValid] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputs)
    try {
      const res = await axios.post("http://localhost:8800/auth/register",
        inputs, {
        withCredentials: true,
      });
      setisValid(true);

    } catch (err) {
      setErr(err.data);
    }
  };

  return (
    <>
      <Body>
        <Main>
          <Left>
            <Img src='./signup_photo.jpg' />

          </Left>
          <Right>
            <TextField
              label="Username"
              sx={{ width: "230px" }}
              name="username"
              variant='standard'
              onChange={handleChange}
              required
            />

            <TextField
              label="Email"
              sx={{ width: "230px" }}
              type="email"
              name="email"
              variant='standard'
              onChange={handleChange}
              required
            />

            <TextField
              label="Password"
              sx={{ width: "230px" }}
              type="password"
              variant='standard'
              name="password"
              onChange={handleChange}
              required
            />

            <TextField
              label="Name"
              sx={{ width: "230px" }}
              name="name"
              variant='standard'
              onChange={handleChange}
              required
            />
            <TextField
              label="DOB"
              sx={{ width: "230px" }}
              type="date"
              variant="standard"
              name="dob"
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              required
            />
            {err != null && err}
            {isValid && "Registered Successfully"}
            <Button onClick={handleClick}>Register</Button>
            <Link to="/login" style={{ textDecoration: "none" }}><p>Login</p></Link>
          </Right>

        </Main>

      </Body>
    </>
  )
}
