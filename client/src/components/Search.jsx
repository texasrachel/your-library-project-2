import { useState, useEffect } from 'react'
import React from 'react'
import './styling/Search.css'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const { id, fields } = props.items

  console.log(props.items)
  console.log(props.items.fields)

  const results = props.items.filter(item => id)
  const returnResults = results.map((item) => {
    <p key={item}>{ item } </p>
    })
  

  return (
    <div className='search'>
      <div className='search-area'>
      <h3>Search...</h3>
      <h1>results: {returnResults} </h1>

      <form
        // onSubmit={handleSubmit}
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
    </div> 

  </div>
  )
}

export default Search