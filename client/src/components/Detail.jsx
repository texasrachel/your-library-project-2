import { Link } from 'react-router-dom'
import './styling/Detail.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Detail(props) {
  const [book, setBook] = useState(null)
  const { id } = useParams()
  // console.log(props.item)
  console.log(id)
  
  useEffect(() => {
    if (id && props.items.length) {
      const findBook = props.items.find((item) => item.id === id)
      if (findBook) {
        setBook(findBook)
        // const { title, author, subject, type, status, thoughts } = book.fields
      }
    }
  }, [props.items, id])

  return (
    <article>
      {book !== null ? 
      (<div className='detail'>
        <div className='listing'>
          <h3 className='title'>{book.fields.title}</h3>
        </div>
        <div className='info'>
          <p>by {book.fields.author}</p>
          <p>subject: {book.fields.subject}</p>
          <p>status: {book.fields.status}</p>
          <p>type: {book.fields.type}</p>
        </div>
        <div className='thoughts'>
          <p>notes: {book.fields.thoughts}</p>
          <Link to={`/add/${book.id}`}>
            Edit
          </Link>
        </div>
      </div>) : 
      <h1>Loading...</h1>
    }
    </article>
  )
}

export default Detail