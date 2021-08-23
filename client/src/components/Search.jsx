import { useState, useEffect } from 'react'

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchValue !== null) {
      setSearchTerm(searchTerm)
    }
    

  }, [searchTerm])

// on submit set the inputted value as term for each search term
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked me')

    // new variable for searching through catalog
    const searchValue = {
      title,
      author,
      subject,
    }
}

  return (
    <div className='search'>
      <p>Searching...</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          autocomplete='off'
          value={searchValue}
          onChange={e =>
            setSearchTerm(e.target.value)} />
        {console.log(setSearchTerm)}
        <button type='submit'>Click Me</button>
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