import { Link } from 'react-router-dom'
import './styling/Catalog.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import Search from './Search'

function Search2(props) {
  const [book, setBook] = useState(null)
  const { type } = useParams()
  // const { title, author, subject, type, status, thoughts } = book.fields
  
useEffect(() => {
  if (type && props.items.length) {
    const findBook = props.items.find((item) => item.type === type)
    if (findBook) {
      setBook(findBook)
    }
  }
}, [props.items, type])


  
  return (
  <article>
      {book !== null ?
  
        <div className='catalog'>
          <Link  >
            <button>Filter by Author</button>
          </Link>
          <Link>
            <button>Filter by Subject</button>
          </Link>
          <Link>
            <button
            // onClick={(e) =>
            //   setSearchTerm(props.items.type)}
            // onClick={() => showT()}
            >
              Filter by Type</button>
          </Link>
          <Link>
            <button>Filter by Status</button>
          </Link>

          <div className='list-1'>
            {props.items.map((item, index) => {
              return (
                <Link to={`/detail/${item.id}`} >
                  Title: {item.fields.title}
                </Link>
              )
            })}
          </div>
        </div> :
        <h1>Loading...</h1>
      }
    </article>
  )
}

export default Search2
