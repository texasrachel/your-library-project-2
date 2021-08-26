import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { baseURL, config } from '../services'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [toggleFetch, setToggleFetch] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputTerms = {
      title: 'title',
      author: 'author',
      subject: 'subject',
    }
    await axios.get(baseURL, { fields: inputTerms }, config)
      props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  }

  return (

    <div className='search-area'>
      <h3>Searching...</h3>
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
    </div>
  )
}

export default Search