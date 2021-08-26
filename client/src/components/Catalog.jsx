import { Link, Route } from 'react-router-dom'
import './styling/Catalog.css'
import Detail from './Main'

function Catalog(props) {
 //  const { title, author, subject, type, status, thoughts } = props.item.fields
  console.log(props.items)

  return (
    <>
      <div className='catalog'>
        <div className='filter'>
          Filter
        </div>
        <div className='list'>
        {props.items.map((item, index) => {
          return (
              <Route path='/detail/:id' >
                <Link to={`/detail/${props.items[index].id}`} >
                    {/* Title: {props.items[index].fields.title}
                    <Detail items={props.items} key={index} /> */}
                    Book
                  </Link>
                </Route>
          )
        })}
          </div>
      </div>
      </> 
  )
}

export default Catalog


      
//   return (
//     <Detail key={index} item={item} />
//   )
// })}

// <Link to={`/detail/${props.items[index]}`} item={props.items[index]}>
// <h2>{props.items[index].fields.title}</h2>
//  </Link>

{/* <div className='catalog'>
  {props.media.map((item, index) => (
    <li key={item.id}>
      <h4>{item.id}</h4>

      <Link to={`/detail/${item.id}`} item={item.id}>
      {console.log(item.id)}
      {/* {console.log(media.fields.title)} */}
      // <p>
      //   Title: {props.media[index].fields.title}
      // </p> */}