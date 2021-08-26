import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import './styling/Search.css'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  // const [toggleFetch, setToggleFetch] = useState(false)
  const [book, setBook] = useState(null)
  const inputTerms = {
    title: 'title',
    author: 'author',
    subject: 'subject',
  }
  // const { id } = useParams()
  // console.log(props.item)
  // console.log(word)
  // const { title, author, subject } = item.fields

  useEffect(() => {
    const searchItem = props.items.find((item) => item.title === searchTerm 
    || item.author === searchTerm || item.subject === searchTerm)
    if (searchItem) {
      setSearchTerm(searchItem) 
    } 
  // }, [props.items, id])
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()  
    await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
      // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  }

    // await axios.put(`https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/${params.id}`, { fields: newMedia })

  return (
    <div className='search'>
      <div className='search-area'>
        <h2>Searching...</h2>
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
  </div>
  )
}

export default Search