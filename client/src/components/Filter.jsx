import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { baseURL, config } from '../services'

function Filter(props) {
  const [filter, setFilter] = useState('')
  console.log(props)
// const params = useParams()
const inputTerm = {
  title: 'title',
  author: 'author',
  subject: 'subject',
}

  // useEffect(() => {
  //   const searchItem = props.items.find((item) => item.title === inputTerm 
  //   || item.author === inputTerm || item.subject === inputTerm)
  //   if (searchItem) {
  //     setFilter(searchItem) 
  //   } 
  //   // }, [props.items, id])
  // },[])

  const handleSubmit = async (e) => {
    e.preventDefault()  
    await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
      // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  }


  // useEffect(() => {
  // if (filter === api) return 
  // filterByFormula: `SEARCH("${slug}",{lookupCaseSlug} & "")`,
  // filterByFormula={Field Name}="value"
  // %201?fields%5B%5D=Notes&filterByFormula=SEARCH(%22ux%22%2C+Notes)&api_key=YOUR_API_KEY
  // setName(e.target.value)

  //     await axios.get(baseURL, { fields: searchItem }, config)
  
  // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch) 

  return (
    <div className='filter'>
      <form onSubmit={handleSubmit}>
        <label
          className='filter-label'
        >
          Filter
        </label>
        <select className='filter-label'>
          <option selected value='title'>Title</option>
          <option value='author'>Author</option>
          <option value='subject'>Subject</option>
        </select>
      </form>
      <Link>
        <button>Filter</button>
      </Link>
    </div>
  )
}

export default Filter