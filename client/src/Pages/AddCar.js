
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';
import LocationSearchBox from '../components/LocationSearchBox';
import moment from 'moment';


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
const InputField = styled(TextField) `width: 100%;`

const SubmitButton = styled(Button) `align-self: center;`

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

const handleSubmit = async (event) => {
event.preventDefault();

const startDateTime = moment(`${duration_start_date} ${duration_start_time}`);
const endDateTime = moment(`${duration_end_date} ${duration_end_time}`);
const durationInMinutes = endDateTime.diff(startDateTime, 'hours');
const Totalduration = durationInMinutes / 60;
inputs.duration = Totalduration;
console.log(Totalduration);
try {
const res = await axios.post("http://localhost:8800/car/add", inputs, {
withCredentials: true,
});
setisAdded(res.data)
} catch (err) {
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
setisAdded('')
};


const { name, model, location, image, duration_start_date, duration_end_date, duration_start_time, duration_end_time, number, seats, price, gear, transmission } = inputs;
const [isAdded, setisAdded] = useState(null)
const [isError, setisError] = useState(null)
const [loc, setloc] = useState({
  latitude: '',
  longitude: ''
})

const [address, setaddress] = useState('')
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
// const initializeAutocomplete = () => {
//   const input = document.getElementById("location");
//   const autocomplete = new google.maps.places.Autocomplete(input);
//   autocomplete.setFields(["address_components", "geometry", "name"]);
//   autocomplete.addListener("place_changed", onPlaceChanged);
// };

// const onPlaceChanged = () => {
//   // Handle the selected place here
// };

// // Call initializeAutocomplete when the component mounts
// useEffect(() => {
//   initializeAutocomplete();
// }, []);
return (
  <div style={{display: "flex", flexDirection: "column"}}>
    <Navbar textcolor= "black"/>
<Form>
<InputField
     label="Name"
     variant="outlined"
     name="name"
     value={name}
     onChange={handleChange}
     required
   />
<InputField
     label="Model"
     variant="outlined"
     name="model"
     value={model}
     onChange={handleChange}
     required
   />
  
 
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
  accept="image/*"
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
     label="Seats"
     variant="outlined"
     name="seats"
     value={seats}
     onChange={handleChange}
     required
   />
   <InputField
     label="Price(per hour)"
     variant="outlined"
     name="price"
     value={price}
     required
     onChange={handleChange}
   />
   <InputField
     label="Transmission"
     variant="outlined"
     name="transmission"
     value={transmission}
     required
     onChange={handleChange}
   />
   <InputField
     label="Gear"
     variant="outlined"
     name="gear"
     required
     value={gear}
     onChange={handleChange}
   />
    <Button onClick={handleLocation}>Click to get Location</Button>
   {isAdded != null && "Car added Successfully"}
   {isError != null && "Try again"}
<SubmitButton variant="contained" color="primary" type="submit" onClick={handleSubmit}>
Add Car
</SubmitButton>
</Form>
</div>  
)
};

export default AddCar;