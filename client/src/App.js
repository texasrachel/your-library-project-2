
import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
// import { baseURL, config } from './services'
import Edit from './components/Edit'
import Detail from './components/Detail'
import Catalog from './components/Catalog'
import Search from './components/Search'
import Filter from './components/Filter'


function App() {
  const [items, setItems] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getMedia = async () => {
      const res = await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ')
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
          <Link to='/edit'>Add books</Link>  * |  *   
          <Link to='/search'>Search</Link> * | *
          <Link to ='/catalog'>Catalog</Link>
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
            <button>Catalog </button>
            <button>Add </button>
            <button>Search </button>
        </Route>
        <Route path='/catalog'>
            <h3>catalog</h3>
            <Catalog items={ items }/>
          </Route>
          <Route path='/search'>
            <h3>search books</h3>
            <Search items={items} setToggleFetch={setToggleFetch} />
          </Route>
          <Route path='/edit'>
            <h3>Edit books</h3>
            <Edit items={ items }/>
          </Route>
          <Route path='/detail/:id' >
            <Detail items={items}  />
          </Route>
          <Route path='/filter'>
            <Filter items={items}/>
          </Route>
      </div>
    </div>
</>
  )
} 

export default App

