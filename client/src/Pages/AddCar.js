
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';
import LocationSearchBox from '../components/LocationSearchBox';
import moment from 'moment';
import swal from 'sweetalert';


const Form = styled.form`
 display: flex; flex-direction: column; gap: 10px; margin-top: 20px;`
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
width: fit-content;
`
const InputField = styled(TextField)`width: 100%;`

const SubmitButton = styled(Button)`align-self: center;`

const AddCar = () => {
  const [inputs, setInputs] = useState({
    name: '',
    model: '',
    location: '',
    image: '',
    duration_start_date: '',
    duration_end_date: '',
    duration_start_time: '',
    duration_end_time: '',
    number: '',
    seats: '',
    transmission: '',
    gear: '',
    price: '',
    duration: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [present, setispresent] = useState(null)
  const [isvalid, setisvalid] = useState(false)
  const [isvaliddays, setisvaliddays] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    const startMoment = moment(duration_start_date, 'YYYY-MM-DD');
    const endMoment = moment(duration_end_date, 'YYYY-MM-DD');
    const duration = moment.duration(endMoment.diff(startMoment));
    
    if(duration._data.days > 1) {setisvaliddays(true)}
      inputs.duration = duration._data.days;

    const url = 'https://api.emptra.com/vehicleRegistrations';
    const options = {
      method: 'POST',
      headers: {
        clientId: '7198e74952b1f6513a8c7bddd7f6572f:9771d9650d4068b49d76f73e29412a32',
        secretKey: 'o0XFN002WjFMEcZCVhjlIsdr3IwEynHhlsx9OiRkeMQr2vedBZrYsK8Okg2A6fPMt',
        'content-type': 'application/json'
      },
      url,
      data: JSON.stringify({ blacklistCheck: true, vehicleNumber: number })
    };
   let vehicle_data = await axios(options);
   console.log(vehicle_data)
  const {code} = vehicle_data.data
  const {seats, model, name, vehicleManufacturerName, type} = vehicle_data.data.result;
  inputs.transmission = type;
   inputs.seats = seats;
   inputs.model = model
   inputs.name = vehicleManufacturerName;
   console.log(isvaliddays)
    try {
      if(code == 100){
      const res = await axios.post("http://localhost:8800/car/add", inputs, {
        withCredentials: true,
      });
      console.log(res.data);
      alert("Car added Successfully")
      setisvalid(true)
      setispresent(res.data)
    }
    } catch (err) {
      alert("Try again with valid inputs")
      setisError(err);
    }

    setInputs({
      name: '',
      model: '',
      location: '',
      image: '',
      duration_start_date: '',
      duration_end_date: '',
      duration_start_time: '',
      duration_end_time: '',
      number: '',
      seats: '',
      transmission: '',
      gear: '',
      price: ''
    })
    setispresent('')
  }

  const {duration_start_date,duration_start_time,duration_end_date, duration_end_time, image, price, number} = inputs;
 
  const [isError, setisError] = useState(null)
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
      console.log(address)
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
    <div style={{ display: "flex", flexDirection: "column", margin: "-10px 150px 0px 150px" }} >
      <Navbar textcolor="black" />
      <Button onClick={handleLocation}>Click to get Location</Button>
      <Form>
        <InputField
          label="Car Number"
          variant="outlined"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
        <InputField
          label="Image URL"
          variant="outlined"
          type="file"
          accept="png/jpg"
          name="image"
          value={image}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <InputField
          label="Start Date"
          type="date"
          variant="outlined"
          name="duration_start_date"
          value={duration_start_date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
          required
        />
        <InputField
          label="End Date"
          type="date"
          variant="outlined"
          name="duration_end_date"
          value={duration_end_date}
          onChange={handleChange}
          required
          InputLabelProps={{
            shrink: true
          }}
        />
        <InputField
          label="Start Time"
          type="time"
          variant="outlined"
          name="duration_start_time"
          value={duration_start_time}
          onChange={handleChange}
          required
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
        />
        <InputField
          label="End Time"
          type="time"
          variant="outlined"
          name="duration_end_time"
          value={duration_end_time}
          onChange={handleChange}
          required
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
        />

        <InputField
          label="Price(in rupees per hour)"
          variant="outlined"
          name="price"
          value={price}
          required
          onChange={handleChange}
        />
        {/* {isvalid && alert("Car added Successfully")} */}
        {/* {isError != null && alert("Try again with valid inputs")} */}
        <SubmitButton variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Add Car
        </SubmitButton>
      </Form>
    </div>
  )
};

export default AddCar;