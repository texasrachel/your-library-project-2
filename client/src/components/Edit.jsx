import { useEffect, useState } from 'react'
import axios from 'axios'
import './styling/Edit.css'
import { useParams } from 'react-router-dom'
import { baseURL, config } from '../services'

function Edit(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [thoughts, setThoughts] = useState('')

  const params = useParams()

  useEffect(() => {

    if (params.id) {
      const itemToEdit = props.items.find(item => params.id === item.id)
      if (itemToEdit) {
        setTitle(itemToEdit.fields.title)
        setAuthor(itemToEdit.fields.author)
        setSubject(itemToEdit.fields.subject)
        setType(itemToEdit.fields.type)
        setStatus(itemToEdit.fields.status)
        setThoughts(itemToEdit.fields.thoughts)
      }
    }
  }, [params.id, props.items])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newMedia = {
      title,
      author,
      subject,
      type,
      status,
      thoughts
    }
    if (params.id) {
      //axios.put
      await axios.put(`baseURL/${params.id}`, { fields: newMedia }, config)
    } else {
      //axios.post
      await axios.post(baseURL, { fields: newMedia }, config)
    }
  }
  
  return (
    <div className='add-area' >
      <h1>Add media</h1>
      <form className='add-books'
      onSubmit={handleSubmit}
      >
        <div className='block1'>
          <label className='add-input-1'
            htmlFor='title'>Title:
          </label>
          <input
            className='add-input-2'
            type='text'
            placeholder='title: '
            value={title}
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label className='add-input-3'
              htmlFor='author'>Author:
          </label>
          <input 
            type='text'
            className='add-input-4'
            placeholder='author: '
            value={author}
            id='author'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <label className='add-input-5'
              htmlFor='subject'>Subject:
          </label>
          <input 
            type='subject'
            className='add-input-6'
            placeholder='subject: '
            value={subject}
            id='subject'
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />
          <label className='add-input-7'
              htmlFor='type'>Type:
          </label>
          <input 
            type='type'
            className='add-input-8'
            placeholder='type: '
            value={type}
            id='type'
            onChange={(e) => setType(e.target.value)}
          />
          <br />
        </div>
        <div className='block2'>
          <label className='add-input-9'
            htmlFor='type'>Status:
          </label>
          <input 
            type='type'
            className='add-input-10'
            placeholder='status: '
            value={status}
            id='status'
            onChange={(e) => setStatus(e.target.value)}
          />
          <br />
          <label  className='add-input-11'
            htmlFor='type'>thoughts:
          </label>
          <input 
            type='type'
            className='add-input-12'
            placeholder='thoughts: '
            value={thoughts}
            id='thoughts'
            onChange={(e) => setThoughts(e.target.value)}
          />
          <br />
          </div>
        <button
          // onClick={addToApi}
          className='add-button'
          type='submit'>Submit</button>
        </form>
    </div>
  )
}



export default Edit

