import React, { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import MainPage from './Pages/MainPage.js'
import { createContext, useContext } from 'react';
import axios from 'axios';


export const UserContext = createContext(null);


export default function App() {
  const [Currentuser, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [availableCars, setavailableCars] = useState([])
  const [CurCarInfo, setCurCarInfo] = useState({})
  const [Loctime, setLoctime] = useState({
    location: "",
    duration_start_date: "",
    duration_end_date: "",
    duration_start_time: "",
    duration_end_time: ""
  })
  const Login = async (inputs) => {
    setUser(inputs)
  };
  const setCars = async (inputs) => {
    setavailableCars(inputs)
  };
  const setLoc = async (inputs) => {
    setLoctime(inputs)
  };
  const getCarInfo = async (id) => {
    const res = await axios.get(`http://localhost:8800/car/show/${id}`, { withCredentials: true })
    setCurCarInfo(res.data[0])
  }


  return (
    <>
      <UserContext.Provider value={{ Login, Currentuser, availableCars, setCars, setLoc, Loctime, CurCarInfo, getCarInfo }}>
        <MainPage />
      </UserContext.Provider>
      {/* <ThemeProvider theme={WebsiteTheme}>
    
    </ThemeProvider> */}

    </>
  )
}
