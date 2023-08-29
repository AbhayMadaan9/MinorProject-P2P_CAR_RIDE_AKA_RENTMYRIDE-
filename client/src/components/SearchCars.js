import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useContext } from "react";
import { UserContext } from "../App";



const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
padding: 16px;
margin-top: 44px;
`
const First = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Second = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 100%;

`
const Headings = styled.div`
font-size: xx-large;
letter-spacing: 1px;
font-weight: 500;
font-family: 'Oswald', sans-serif;
`
const Button = styled.button`
background-color: #00C9A7;
color: white;
padding: 8px;
border: 0px;
font-size: large;
border-radius: 8px;
/* height: 44px; */
flex: 1;
letter-spacing: 1px;
`
const Textlight = styled.p`
font-weight: 200;
`
const InputField = styled(TextField)`width: 100%; flex: 1`

export default function SearchCars() {
  const { setCars, setLoctime, setLoc } = useContext(UserContext);
  const [inputs, setInputs] = useState({
    location: '',
    duration_start_date: '',
    duration_end_date: '',
    duration_start_time: '',
    duration_end_time: ''
  });
  const handleClick = async (e) => {
    e.preventDefault();
    setLoc(inputs);
    try {
      const res = await axios.get(`http://localhost:8800/car/listall?location=${inputs.location}&duration_start_date=${inputs.duration_start_date}&duration_end_date=${inputs.duration_end_date}&duration_start_time=${inputs.duration_start_time}&duration_end_time=${inputs.duration_end_time}`, { withCredentials: true })
      
    console.log(`http://localhost:8800/car/listall?location=${inputs.location}&duration_start_date=${inputs.duration_start_date}&duration_end_date=${inputs.duration_end_date}&duration_start_time=${inputs.duration_start_time}&duration_end_time=${inputs.duration_end_time}`)
      setCars(res.data)
      console.log(res.data)
      console.log(inputs)
    } catch (error) {
      console.log(error)
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  const [loc, setloc] = useState({
    latitude: '',
    longitude: ''
  })

  const [address, setaddress] = useState('')
  let resss;
  
  const handleLocation = () => {
    const success = (pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      setloc({
        latitude: latitude,
        longitude: longitude
      })
      inputs.location = address
      console.log(inputs)
    }
    const error = (er) => {
      console.log(er)
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
  useEffect(()=>{
    const getloc = async()=>{
      resss = await axios.get(`https://geocode.maps.co/reverse?lat=${loc.latitude}&lon=${loc.longitude}`);
      const {display_name} = resss.data;
      setaddress(display_name)
      console.log(address)
    }
    getloc();
  },[loc])
  
  return (
    <>
      <Main>
        <First><Headings>Find you perfect match</Headings>
          <Textlight>Set your location data time</Textlight></First>
          <form>
        <Second>
          <InputField
            label="PickUp Date"
            type="date"
            variant="outlined"
            name="duration_start_date"
            value={inputs.duration_start_date}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true
            }}
            required
          />
          <InputField
            label="Drop Date"
            type="date"
            variant="outlined"
            name="duration_end_date"
            value={inputs.duration_end_date}
            onChange={handleInputChange}
            required
            InputLabelProps={{
              shrink: true
            }}
          />
          <InputField
            label="PickUp Time"
            type="time"
            variant="outlined"
            name="duration_start_time"
            value={inputs.duration_start_time}
            onChange={handleInputChange}
            required
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
          <InputField
            label="Drop Time"
            type="time"
            variant="outlined"
            name="duration_end_time"
            value={inputs.duration_end_time}
            onChange={handleInputChange}
            required
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
          <Button onClick={handleClick}>Search Car</Button>
        </Second>
        </form>
      </Main>
    </>
  )
}
