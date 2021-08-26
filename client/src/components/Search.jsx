import { useState, useEffect } from 'react'
import React from 'react'
import './styling/Search.css'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const { author, subject, status, type } = props.items

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchResults = props.items.filter((item) => {
      const {title, author, subject, type} = item.fields
      console.log(title, subject, type)
      return title.toLowerCase().includes(searchTerm.toLowerCase()) || author.toLowerCase().includes(searchTerm.toLowerCase()) || subject.toLowerCase().includes(searchTerm.toLowerCase()) || type.toLowerCase() === searchTerm.toLowerCase()
    });
    props.setFilteredBooks(searchResults)
  }

  return (
    <div className='search'>
      <div className='search-area'>
      <h3>Search...</h3>
      <form
        onSubmit={handleSubmit}
        className='search-form'>
        <input
          className='search-input'
          id='searchTerm'
          type='text'
          value={searchTerm}
          placeholder='author, subject, status, or type'
          onChange={(e) =>
            setSearchTerm(e.target.value)} />
        <button
          type='submit'
          className='search-button'>
        search
        </button>
      </form>    
    </div> 
  </div>
  )
}

export default Search