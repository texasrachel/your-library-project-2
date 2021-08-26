import { Link } from 'react-router-dom'
import './styling/Catalog.css'
import Filter from './Filter'
import { useEffect } from 'react'

function Catalog(props) {
 //  const { title, author, subject, type, status, thoughts } = props.item.fields
  console.log(props)

  // useEffect(() => {
  //   if (id && props.items.length) {
  //     const findBook = props.items.find((item) => item.id === id)
  //     if (findBook) {
  //       setBook(findBook)
  //       const searchItem = props.items.find((item) => item.title === inputTerm
  //         || item.author === inputTerm || item.subject === inputTerm)
  //       if (searchItem) {
  //         setFilter(searchItem)
  //       }
  //       // }, [props.items, id])
  //     }
  //   }
  // }, [])

  return (
    <>
      <div className='catalog'>
        <div className='filter'>
          <Filter  />
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
