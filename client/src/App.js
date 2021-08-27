import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import { baseURL, config } from './services'
import Edit from './components/Edit'
import Detail from './components/Detail'
import Catalog from './components/Catalog'
import Search from './components/Search'
import Search2 from './components/Search2'

function App() {
  const [items, setItems] = useState([])
  // const [toggleFetch, setToggleFetch] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const getMedia = async () => {
      const res = await axios.get(baseURL, config)
      setItems(res.data.records)
    }
    getMedia()
  }, [])
  
  return (
<>
    <div className='App'>
        <nav>
          <ul className='nav'>
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
            <li>
            <h1 className='title'>your library</h1>
            </li>
            </ul>
      </nav>
      <div >
        <div className='home-image'>    
        </div>
      </div>
      <div className='home'>
          <Route path='/' exact>
            <Link to='/catalog'>
              <button type='button'>Catalog</button>
            </Link>
            <Link to='/edit'>
              <button type='button'>Add</button>
            </Link>
            <Link to='/search'>
              <button type='button'>Search</button>
            </Link>
        </Route>
        <Route path='/catalog'>
            <Catalog items={ items }/>
          </Route>
          <Route path='/search'>
            <Search
              items={items}
              setFilteredBooks={setFilteredBooks}
            />
            {filteredBooks.length && <Catalog items={filteredBooks} />}
          </Route>
          <Route path='/edit'>
            <Edit items={ items }/>
          </Route>
          <Route path='/detail/:id' >
            <Detail items={items}  />
          </Route>
          
          <Route path='/search2'>
            <Search2
              items={items}
              setFilteredBooks={setFilteredBooks}
            />
            {/* {filteredBooks.length && <Catalog items={filteredBooks} />} */}
          </Route>
      </div>
    </div>
</>
  )
} 

export default App

