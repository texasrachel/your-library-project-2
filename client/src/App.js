import axios from 'axios'
import { baseURL, config } from './services';
import './App.css'
import { useState, useEffect } from 'react'
import React from 'react';
import Catalog from './components/Catalog'
import Add from './components/Add'
import Search from './components/Search'
import Detail from './components/Detail'
import { Route, NavLink, Switch } from 'react-router-dom'

function App() {
  const [media, setMedia] = useState([])
  const [newSearch, setNewSearch] = useState('')
  // const mediaArray = { media.map(indivMedia, index)}

  useEffect(() => {
    const getMedia = async () => {
      const res = await axios.get(baseURL, config)
      setMedia(res.data.records)
      console.log(res.data.records)
    }
    getMedia()
    // console.log(setMedia)
  }, [])

  return (
    // do i need switch with the route? think so bc of indiv pages
    <div className='App'>
      <h1>your library</h1>
        <div className='A' >
        <Catalog media={media} />
        <Add media={media} />
        <Search media={media} />
        <Detail media={ media } />
        {/* <button>Catalog</button>
        <button>Search</button>
        <button>Add Media</button> */}
      </div>
    </div>
  )
} 

export default App

// unending api calls again.