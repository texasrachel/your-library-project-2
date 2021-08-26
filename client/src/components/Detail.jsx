import { Link } from 'react-router-dom'
import './styling/Detail.css'

function Detail(props) {
  const { title, author, subject, type, status, thoughts } = props.item.fields

  return (
    <article>
      <div className='detail'>
        <div className='listing'>
          <h3 className='title'>{title}</h3>
        </div>
        <div className='info'>
          <p>by {author}</p>
          <p>subject: {subject}</p>
          <p>status: {status}</p>
          <p>type: {type}</p>
        </div>
        <div className='thoughts'>
          <p>notes: {thoughts}</p>
          <Link to={`/add/${props.item.id}`}>
            Edit
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Detail