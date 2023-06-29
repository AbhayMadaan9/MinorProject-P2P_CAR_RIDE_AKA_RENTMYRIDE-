import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import MainPage from './Pages/MainPage.js'
import { createContext, useContext} from 'react';
import Lottery from "./contracts/CarRental.json";
import getWeb3 from "./getWeb3";

export const UserContext = createContext(null);

// const WebsiteTheme = {
//     pallete: {
//       primary: {
//         main: '#00C9A7'
//       },

//     }
// }


export default function App() {
  const [Currentuser, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [availableCars, setavailableCars] = useState([])
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
   const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const [Address, setAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Lottery.networks[networkId];

        setAddress(deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Lottery.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({ web3, contract: instance });
        console.log(Address);
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, [Address]);
  
  return (
    <>
        <UserContext.Provider value= {{Login, Currentuser, availableCars, setCars, setLoc, Loctime, state, Address}}>
        <MainPage/>
    </UserContext.Provider>
    {/* <ThemeProvider theme={WebsiteTheme}>
    
    </ThemeProvider> */}
    
    </>
  )
}
