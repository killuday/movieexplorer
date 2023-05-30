import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { searchMovies } from '../redux/search'

const Suggestions = () => {
  const dispatch=  useDispatch();

  const inputOnChange=(event)=>{
    if(!event.target.value){
        return;

    }
    dispatch(searchMovies(event.target.value))
  }
  return (
    <TextField id='search' placeholder='Search' fullWidth={true} sx={{mb:5}} varient="standard" inputProps={{onChange:inputOnChange}} />
  )
}

export default Suggestions