import { Route, Link } from 'react-router-dom'
import './styling/Catalog.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'

function Catalog(props) {
  const [searchTerm, setSearchTerm] = useState('')

  // const handleSubmit = async (e) => {
  //   e.preventDefault()  
  //   await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
  // }

  return (
    <>
      <div className='catalog'>
    <h1 className='AA'>Catalog</h1>
        <div className='filter'>
          <div className='filter'>
          {/* <Route path='/search'>
            <Search
              items={items}
              setFilteredBooks={setFilteredBooks}
            />
            {filteredBooks.length && <Catalog items={filteredBooks} />}
          </Route> */}
            {/* <form
              // onSubmit={handleSubmit}
            >
        <label
          className='filter-label'
        >
          Filter (items=items)
        </label>
      </form> */}
      {/* <Link> <button>Filter by Author</button> </Link>
      <Link>  <button>Filter by Subject</button>
      </Link>
      <Link>
        <button>Filter by Type</button>
      </Link>
      <Link>
        <button>Filter by Status with Links to /:id</button>
      </Link>  */}
    </div>
        </div> 
        <div className='list'>
          <div className='BB'>
          {props.items.map((item, index) => {
            return (
              <div className='CC'>
                <div className-indCC>
              <Link to={`/detail/${item.id}`} >
                {item.fields.title}
                </Link>
                </div>
                </div>
            )
          })}
          </div>
        </div>
        </div>
      </> 
  )
}

export default Catalog
