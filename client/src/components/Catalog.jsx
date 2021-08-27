import { Link } from 'react-router-dom'
import './styling/Catalog.css'
// import { useEffect } from 'react'
import axios from 'axios'

function Catalog(props) {

  const handleSubmit = async (e) => {
    e.preventDefault()  
    await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
  }

  return (
    <>
      <div className='catalog'>
        <div className='filter'>
          <div className='filter'>
      <form onSubmit={handleSubmit}>
        <label
          className='filter-label'
        >
          Filter (items=items)
        </label>
        {/* <select className='filter-label'>
          <option selected value='subject'>Subject</option>
          <option value='status'>Status</option>
        </select> */}
      </form>
      <Link>
        <button>Filter by Author</button>
      </Link>
      <Link>
        <button>Filter by Subject</button>
      </Link>
      <Link>
        <button>Filter by Type</button>
      </Link>
      <Link>
        <button>Filter by Status with Links to /:id</button>
      </Link>
    </div>
        </div>
        <div className='list'>
          {props.items.map((item, index) => {
            return (
              <Link to={`/detail/${item.id}`} >
                Title: {item.fields.title}
              </Link>
            )
          })}
        </div>
        </div>
      </> 
  )
}

export default Catalog
