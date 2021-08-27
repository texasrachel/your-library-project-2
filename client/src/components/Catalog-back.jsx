import { Link, } from 'react-router-dom'
import './styling/Catalog.css'
import axios from 'axios'
import { baseURL, config } from './services'
// import Search from './Search'

function Catalog(props) {

  const handleSubmit = async (e) => {
    e.preventDefault()  
    await axios.get(baseURL, config)
  }
  // const handleSubmitAuthor = async (e) => {
  //   const authorResults = props.items.filter((item) => {
  //     const { title, author, subject, type } = item.fields
  //     return title.toLowerCase().includes(searchTerm.toLowerCase())
  //   e.preventDefault()  
  //   await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
    
  //   });
  //   props.setFilteredBooks(searchResults)
  // }
  // }

  return (
    <>
      <div className='catalog'>
        <div className='filter'>
          <div className='filter'>
      <form onSubmit={handleSubmit}>
        {/* <label
          className='filter-label'
        >
          Filter
        </label> */}

        {/* <select className='filter-label'>
          <option selected value='subject'>Subject</option>
          <option value='status'>Status</option>
        </select> */}
            </form>
{/*  https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?filterByFormula={type}="book" */}

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
        <button>Filter by Status</button>
      </Link>
    </div>
        </div>
        <div className='list-1'>
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

