import { Link } from 'react-router-dom'
import './styling/Detail.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Detail(props) {
  const [book, setBook] = useState(null)
  const { id } = useParams()
  // console.log(props.item)
  // console.log(id)
  
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
          <div className='title-class'>
          <h3 className='title-show'>{book.fields.title}</h3>
            </div>
            </div>
          <div className='info'>

          <p>by {book.fields.author}</p>
          <p>subject: {book.fields.subject}</p>
          <p className='info-class'>status: {book.fields.status}</p>
              <p className='info-class'>type: {book.fields.type}</p>
              
        </div>
          <div className='thoughts'>
          <p>notes: {book.fields.thoughts}</p>
          <Link className='edit-class' to={`/edit/${book.id}`}>
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