import React from 'react'
import { ThemeProvider,createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import logomovie from "../logomovie.png";
import {styled} from "@mui/system"

const darkTheme= createTheme({
    palette:{
        mode:"dark"
    }
})

const Img=styled('img')({
    marginLeft:'auto',
    marginRight:'auto',
    display:"block",
    width:500,
    maxWidth:"100%"
})
const Layout = ({children}) => {
  return (
   <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
        <Link to="/">
        <Img src={logomovie} alt="The Movie" />
        </Link>
    </div>
    {children}

   </ThemeProvider>
  )
}

export default Layout