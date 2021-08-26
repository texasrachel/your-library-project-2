import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Filter(props) {
  const [filter, setFilter] = useState('')

  const params = useParams()

  // useEffect(() => {
  // if (filter === api) return 
  // filterByFormula: `SEARCH("${slug}",{lookupCaseSlug} & "")`,
  // filterByFormula={Field Name}="value"
  // %201?fields%5B%5D=Notes&filterByFormula=SEARCH(%22ux%22%2C+Notes)&api_key=YOUR_API_KEY

  setName(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const searchItem = {
      title,
      author,
      subject,
    }
      await axios.get(`https://api.airtable.com/v0/https%3A%2F%2Fapi.airtable.com%2Fv0%2FappVJkVUZWavAw5go/catalog`,{ fields: searchItem })
  }
  props.setToggleFetch((prevToggleFetch) => !prevToggleFetch) 
}
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
        <button>Filter</button>
      </Link>
    </div>
  )
}

export default Filter