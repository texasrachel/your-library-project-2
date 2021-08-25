import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

function Detail(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // axios post
    const newMedia = {
      title,
      author,
      subject,
      type,
      status
    }
    await axios.post("https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ")
  }

  return (
    <div className='detail' >
      <p>Detail</p>
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
        <label htmlFor='type'>Status: </label>
        <input 
          type='type'
          className='add-input'
          placeholder='status'
          value={status}
          id='status'
          onChange={(e) => setStatus(e.target.value)}
        />
        <br />
        <button
          // onClick={addToApi}
          className='add-button'
          type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Detail

// //li key={index}>
// {/* <Link to={`/detail/${props.media[index].id}`} media={media}> */}
//   {/* Title: {props.media[index].fields.title} */}

      {/* <div className='info'> 
      <h2>Title: {props.media.title}</h2>
      <h3>by Author: {props.author}</h3>
      <p>Subject: {props.subject}</p>
      <p>Type: {props.type}</p>
      </div>
      <div className="thoughts">
      <p>{props.thoughts}</p>
      </div> */}

           