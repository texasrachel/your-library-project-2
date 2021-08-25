
import axios from 'axios'
import { useState, useEffect } from 'react'
import { baseURL, config } from '../services'

function Add(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState('')
  // const [newMedia, setNewMedia] = useState([])?????{}
  
  // yeah not quite
  useEffect(() => {
    const addToAirtable = async () => {
      const res = await axios.post(`baseURL`, config)
    }
  })

// not working - not adding to airtable
  const addToApi = () => {
    console.log(title)
    console.log(author)
    console.log(subject)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <div className='adding'>
    <p>Adding</p>
      <form className='add-books'
      onSubmit={handleSubmit}
      >
        <label htmlFor='title'>Title: </label>
        <input
          className='add-input'
          type='text'
          placeholder='title'
          value={title}
          id='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
      <label htmlFor='author'>Author: </label>
        <input 
          type='text'
          className='add-input'
          placeholder='author'
          value={author}
          id='author'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor='subject'>Subject: </label>
        <input 
          type='subject'
          className='add-input'
          placeholder='subject'
          value={subject}
          id='subject'
          onChange={(e) => setSubject(e.target.value)}
        />
          <br />
          <label htmlFor='type'>Type: </label>
        <input 
          type='type'
          className='add-input'
          placeholder='type'
          value={type}
          id='type'
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <button
          onClick={addToApi}
          className='add-button'
          type='submit'>Submit</button>
        </form>
        </div>
    </>
  )
}

export default Add



// const addMedia = {
// title,
// author,
// subject}
// setNewMedia([..newMedia, addMedia])}
//   -----or---------
// props.passedSearchFromApp({
// title,
// author,
// subject, 
// })
// setTitle('')
// setAuthor('')
// setSubject('')

// const addToApi = () => {
// axios.post(baseURL, config,{
// title,
// author,
// subject
// }) }