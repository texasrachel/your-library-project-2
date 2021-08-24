import { useState } from 'react'
import axios from 'axios'
import { baseURL, config } from '../services'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const newMedia = {
    title: 'title',
    author: 'author',
    subject: 'subject',
    currentStatus: 'currentStatus'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(baseURL, { fields: newMedia }, config)
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  }


  return (
    <div className='search'>
      <p>Searching...</p>
      <form onSubmit={handleSubmit}>
        <input
          id='searchTerm'
          type='text'
          value={searchTerm}
          placeholder='author, title, or subject'
          autocomplete='off'
          onChange={(e) =>
            setSearchTerm(e.target.value)} />
        <input type='submit' value='search catalog' />
      </form>
    </div>
  )
}

export default Search


// do i need individual searches or can i do one search and assign it multiple times?

// const [title, setTitle] = useState('')
// const [author, setAuthor] = useState('')
// const [subject, setSubject] = useState('')
// if (searchTerm) {
// setTitle(searchTerm.----fields.title-----)
// setAuthor(searchTerm.----fields.author----)
// setSubject(searchTerm.----fields.subject---)}

// props.setSearchTerm({
//   author: author,
//   title: title,
//   subject: subject
// })

// useEffect(() => {
//   setInputSearch(`test ${searchMedia}`)
//   return () => {
//     console.log('input something')
//   }
// }, [searchMedia])

// new variable for searching through catalog
// const searchValue = {
//   title,
//   author,
//   subject,
// }

  // const searchValue = ('')

  // useEffect(() => {
  //   if (searchValue !== null) {
  //     setSearchTerm(searchTerm)
  //   }
  // }, [searchTerm])

// on submit set the inputted value as term for each search term

// props.setNewSearch(searchTerm)
// console.log('clicked me')
// setSearchTerm('')
// }
// console.log(setSearchTerm)