import React from 'react'
import Suggestions from '../components/Suggestions'
import { useSelector } from 'react-redux'

const SearchBar = () => {
  const {search}=  useSelector((store)=> store)
  return (
    <Suggestions movies={search} />
  )
}

export default SearchBar