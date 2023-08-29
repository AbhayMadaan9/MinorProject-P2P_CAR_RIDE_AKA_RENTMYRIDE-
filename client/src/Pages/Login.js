import { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import axios from "axios";
import Home from "./Home";
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
flex-wrap: wrap;
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
gap: 16px;
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
export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  
  

  const { Login } = useContext(UserContext);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs) 
      const res = await axios.post("http://localhost:8800/auth/login", inputs, {
        withCredentials: true,
      });
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      setUser(null);
      setErr("Invalid User!!")
    }
    Login(user)
  }

  return (
    <>
    <Body>
    <Main>
        <Left>
        <Img src='./loginphoto.jpg'/>
        </Left>
        <Right>
        <TextField
              label="Username"
              name="username"
              variant='standard'
              sx={{width: "230px"}}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              sx={{width: "230px"}}
              variant='standard'
              onChange={handleChange}
            />
            {err != null && err}
            <Button onClick={handleLogin}>Login</Button>
            <Link to='/signup'><span>Forget Password?</span></Link>
               
        </Right>
        
    </Main>

    </Body>
    </>
  )
}
