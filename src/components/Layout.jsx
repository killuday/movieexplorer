import React from 'react'
import { ThemeProvider,createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import logomovie from "../logomovie.png";
import {styled} from "@mui/system"
import SearchBar from '../containers/SearchBar';

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
const LayoutWrapper=styled('div')(({theme})=>({
    margin:24,
    width:'auto',
    [theme.breakpoints.up("lg")]:{
        marginLeft:"auto",
        marginRight:"auto",
        width:theme.breakpoints.values.lg
    }
}));
const Layout = ({children}) => {
  return (
   <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <LayoutWrapper>
        <Link to="/">
        <Img src={logomovie} alt="The Movie" />
        </Link>
        <SearchBar />
    </LayoutWrapper>
    {children}

   </ThemeProvider>
  )
}

export default Layout