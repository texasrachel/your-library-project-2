
import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
// import { baseURL, config } from './services'
import Edit from './components/Edit'
import Detail from './components/Detail'
import Catalog from './components/Catalog'
import Search from './components/Search'
// import Filter from './components/Filter'


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
          <ul className='nav'>
            {/* id: {media.records[0].id} */}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/edit'>Add books</Link>
            </li>
            <li>
          <Link to='/search'>Search</Link>
            </li>
            <li>
            <Link to='/catalog'>Catalog</Link>
            </li>
            </ul>
      </nav>
      <div className='home-box'>
        <div className='home-image'>    
          <div className='overlay'>
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
            <Catalog items={ items }/>
          </Route>
          <Route path='/search'>
            <Search
              items={items}
              // setToggleFetch={setToggleFetch}
            />
          </Route>
          <Route path='/edit'>
            <Edit items={ items }/>
          </Route>
          <Route path='/detail/:id' >
            <Detail items={items}  />
          </Route>
          <Route path='/filter'>
            {/* <Filter items={items}/> */}
          </Route>
      </div>
    </div>
</>
  )
} 

export default App

