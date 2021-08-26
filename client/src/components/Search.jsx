import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import './styling/Search.css'

function Search(props) {
  console.log(props.items)
  const [inputTerm, setInputTerm] = useState('')
  const [result, setResult] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

    // const { title, author, subject, type, status, thoughts } = props.item.fields
  
  // need item/items?
  // const lowerCaseArray = props.items.toLowerCase().trim()
  // const lowerCaseInput = inputTerm.toLowerCase().trim()
    // if (lowerCaseInput === '') setResult(result)
    // else {
    // if (searchTerm !== 'subject') {
  
  useEffect(() => {
    const result = props.items.find(item => item.id === "rec1BL3DNK9xRFJ93")
  }, [props.items]);
  
  console.log( result)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
      // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  }

  return (
    <div className='search'>
      {inputTerm !== null ?
      <div className='search-area'>
        <form
        onSubmit={handleSubmit}
        className='search-form'>
        <input
          className='search-input'
          id='searchTerm'
          type='text'
          value={searchTerm}
          placeholder='author, title, or subject'
          autocomplete='off'
          onChange={(e) =>
            setSearchTerm(e.target.value)} />
        <button
          type='submit'
          className='search-button'>
        search
        </button>
      </form>    
    </div> :
      <h1>Searching...</h1>
    }
  </div>
  )
}

export default Search