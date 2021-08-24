import React from 'react'
import { Link } from 'react-router-dom'
import Detail from './Detail'

function Catalog(props) {

  return (
      // figure out if need to change to index instead of item. id
      <>
        <h3>Catalog</h3>
        <div className='book'>
          {props.media.map((item, index) => (
            <li key={item.id}>
              <h4>{item.id}</h4>

              <Link to={`/detail/${item.id}`} item={item.id}>
              {console.log(item.id)}
              {/* {console.log(media.fields.title)} */}
              <p>
                Title: {props.media[index].fields.title}
              </p>
              <p>
                Author: {props.media[index].fields.author}
              </p>
              <p>
                Subject: {props.media[index].fields.subject}
                </p>
                <p>
                Status: {props.media[index].fields.status}
                </p>
                <p>
                Thoughts: {props.media[index].fields.thoughts}
              </p>
              </Link>   
            </li>
            )
        )} */}
        </div>
      </>
    )
  }
export default Catalog

