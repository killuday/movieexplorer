import { TextField, Paper,MenuItem, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/search";
import Downshift from "downshift";
import { Link } from "react-router-dom";

const Suggestions = (movies) => {
  const dispatch = useDispatch();

  const inputOnChange = (event) => {
    if (!event.target.value) {
      return;
    }
    dispatch(searchMovies(event.target.value));
  };
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <>
          <TextField
            id="search"
            placeholder="Search"
            fullWidth={true}
            sx={{ mb: 5 }}
            varient="standard"
            inputProps={{
              ...getInputProps({
                onChange: inputOnChange,
              }),
            }}
          />
          {isOpen ? 
          <Paper square={true} {...getMenuProps()}>
            {movies.results.slice(0,10).filter((item)=>
            !inputValue || item.title.toLowerCase().includes(inputValue.toLowerCase())).map((item,index)=>(
              <MenuItem {...getItemProps({
                item,
                key:item.id,
                selected:highlightedIndex === index,
                style:{
                  fontWeight:selectedItem ===item ? 500 :400
                }

              }
                
              
              )}>
                <Link to={`/movie/${item.id}`} >
                  <Grid container={true} spacing={8}> 
                  <Grid item={true}></Grid>
                  <Grid item={true}></Grid>

                  </Grid>
                </Link>
              </MenuItem>
            ))}

          </Paper> 
          : null}
        </>
      )}
    </Downshift>
  );
};

export default Suggestions;
