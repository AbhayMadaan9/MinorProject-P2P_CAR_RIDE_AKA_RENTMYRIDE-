import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import MainPage from './Pages/MainPage.js'

// const WebsiteTheme = {
//     pallete: {
//       primary: {
//         main: '#00C9A7'
//       },

//     }
// }

export default function App() {
  return (
    <>
    {/* <ThemeProvider theme={WebsiteTheme}>
    
    </ThemeProvider> */}
    <MainPage/>
    </>
  )
}
