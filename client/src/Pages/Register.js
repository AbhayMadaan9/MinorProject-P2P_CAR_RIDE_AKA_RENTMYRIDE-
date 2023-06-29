import React, {useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';


export default function () {
    
    useEffect( ()=>{
        const lgot = async()=>{
                const res = await axios.post("http://localhost:8800/auth/signup", {
                  withCredentials: true,
                });
        }
        lgot();

    })
  return (
    <div style={{display: "flex", flexDirection: 'row', alignContent:'center', justifyContent: 'space-around'}}>
    <img src="./exit.jpg" alt="logout pic" width='50%' />
    <div style={{display: "flex", flexDirection: 'column', alignContent:'center', justifyContent: 'center', textAlign: 'center'}}>
    <div><h3>Logout Successfull. Please refresh the page</h3></div>
    <div>
    <Link to="/login" style={{ textDecoration: "none" }}><p>Login</p></Link></div>
    </div>
    </div>
  )
}
