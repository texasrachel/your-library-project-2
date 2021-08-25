import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL, config } from '../services';
import React from 'react'
 
function Detail(props) {
  console.log(props.media)
  // const { title, author, subject, currentStatus, thoughts, id} = props.media
  console.log({ props })

  const [item, setItem] = useState([])

  useEffect(() => {
    const getOne = async () => {
      const res = await axios.get(`${baseURL}/{key}`, config)
      setItem(res.data)
      // console.log(res.data)
        // https://api.airtable.com/v0/app0vrHmHR45kdrtT/catalog/%7Bkey%7D
    }
    getOne()
  }, [item] )

  return (
    <div className='detail' >
      <p>Detail</p>
      {/* <div className='info'> 
      <h2>Title: {props.media.title}</h2>
      <h3>by Author: {props.author}</h3>
      <p>Subject: {props.subject}</p>
      <p>Type: {props.type}</p>
      </div>
      <div className="thoughts">
      <p>{props.thoughts}</p>
      </div> */}
    </div>
  )
}

export default Detail

// //li key={index}>
// {/* <Link to={`/detail/${props.media[index].id}`} media={media}> */}
//   {/* Title: {props.media[index].fields.title} */}