
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import React from 'react'
import Detail from './Detail'
import Add from './Add'

function App() {
  const [items, setItems] = useState([])
  // const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    const getMedia = async () => {
      const res = await axios.get("https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ")
      console.log(res.data)
      setItems(res.data.records)
    }
    getMedia()
  }, [])
  
  return (
<>
    <div className='App'>
      <nav>
        {/* id: {media.records[0].id} */}
        <Link to='/'>Home</Link>  * | * 
        <Link to='/add'> Add books</Link>
      </nav>
      <div className='home-box'>
        <div className='overlay'>
          <div className='home-image'>
              <h1>your library</h1>
          </div>
        </div>
      </div>
      <div className='home'>
        <Route path='/' exact>
            <h3>List books</h3>
            {items.map((item, index) => {
              const { title, author, subject, type, status } = item.fields
              return (
                <article key={index}>
                  <h3>{title}</h3>
                  <p>by {author}</p>
                  <p>subject: {subject}</p>
                  <Link to={`/add/${item.id}`}>Add thoughts</Link>
                </article>
              )
            })}
        </Route>
        <Route path='/add'>
            <h3>add new books</h3>
            <Add />
          </Route>
          <Route path='/add/:id'>
            <h3>Edit books</h3>
            <Add items={ items }/>
          </Route>
        <Route path='/detail/:id'>
            <h3>individual books</h3>
            <Detail
              // key={index}
            />
        </Route>
      </div>
    </div>
</>
  )
} 

export default App

// link to edit doesn't have prefilled in details