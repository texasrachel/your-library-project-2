import { useState, useEffect } from 'react'
import React from 'react'
import './styling/Search.css'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const { subject, title } = props.items

  console.log(props.items)

  useEffect(() => {
    const searchResults = props.items.filter(function (item) {
      // return item.id == 'rec1BL3DNK9xRFJ93';
      return item.fields.title == 'the grinch';
      // }).map(function({title}){
      //     return {title};
    });
    console.log(searchResults)
  },[])

  return (
    <div className='search'>
      <div className='search-area'>
      <h3>Search...</h3>

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