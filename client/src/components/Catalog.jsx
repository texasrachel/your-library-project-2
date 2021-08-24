// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { baseURL, config } from '../services'
import React from 'react'
import { Link } from 'react-router-dom'

function Catalog(props) {
  console.log(props.indivMedia)
  const { title, author, subject } = props.indivMedia.fields
  const { id } = props.indivMedia
  // const [fromAirtable, setFromAirtable] = useState([])

  return (
    <>
      {/* {fromAirtable.map((indivMedia, index) => {
        return (
          <Catalog key={index} indivMedia={indivMedia} />
          )
      })}
       */}
      <div className='book'>
        <Link to={`/detail/${props.indivMedia.id}`}>
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Subject: {subject}</p>    
        </Link>
      </div>
    </>
  )
}

export default Catalog


// useEffect(() => {
//   const getFromAirtable = async () => {
//     const res = await axios.get(baseURL, config)
//     setFromAirtable(res.data.records)
//   }
//   getFromAirtable()
//   console.log(setFromAirtable.records)
// }, [])
