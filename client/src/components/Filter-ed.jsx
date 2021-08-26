import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { baseURL, config } from '../services'

function Filter(props) {
// destructured above
  // const props = { title: 'the grinch' }
  // const title = props.title
  // const { title, author } = props.items.fields

    // const { title, author, subject, type, status, thoughts } = props.items.fields

    // need item/items?
  // const lowerCaseArray = props.items.toLowerCase().trim()
  // const lowerCaseInput = inputTerm.toLowerCase().trim()
    // if (lowerCaseInput === '') setResult(result)
    // else {
    // if (searchTerm !== 'subject') {
  
        {/* {props.items.filter((item) => id === "rec6cXXTkMNqGfkPQ").map(result => (
          console.log(result)
          <h1>{id}</h1>
        )))
      } */}

  // const [searchTerm, setSearchTerm] = useState('')
  // // const [toggleFetch, setToggleFetch] = useState(false)
  // const [book, setBook] = useState(null)
  // const inputTerms = {
  //   title: 'title',
  //   author: 'author',
  //   subject: 'subject',
  // }
  // // const { id } = useParams()
  // // console.log(props.item)
  // // console.log(word)
  // // const { title, author, subject } = item.fields

  // useEffect(() => {
  //   const searchItem = props.items.find((item) => item.title === searchTerm 
  //   || item.author === searchTerm || item.subject === searchTerm)
  //   if (searchItem) {
  //     setSearchTerm(searchItem) 
  //   } 
  // // }, [props.items, id])
  // },[])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()  
  //   await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
      // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  

    // await axios.put(`https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/${params.id}`, { fields: newMedia })

  
  
  // const [filtered, setFiltered] = useState('')
  // const [inputData, setInputtedData] = useState('')

  // const lowerCase = props.toLowerCase().trim()
  // if (lowerCase === '') setFiltered(result)
  // else {
  //   const searchTerm = props.items.filter((item) => {
  //     return (
  //     )
  //   })
  //   }
  // return (
  // <div>   
  // <button onClick={() ==> setFilter(!filter)}>Author</button> 
  //filter:id!!!
  // <button>Subject</button>


//   console.log(props)
// // const params = useParams()
// const inputTerm = {
//   title: 'title',
//   author: 'author',
//   type: 'type'
//   subject: 'subject',
// }
  
// https://www.geeksforgeeks.org/how-to-change-a-selects-options-based-on-another-dropdown-using-react/
  
// const changeOption = (e) => {setFilter(e.target.value)}
  // const optionSubject = [filter for subject]
  // const optionStatus = [filter for status]
  // const optionAuthor = [filter for author]
  // const optionType = [filter for type]
  // let type = null
  // let options = null
// if (filter === 'Subject') {type = optionSubject} else if...
  // if (type) {
    // options = type.map((el) => <option key={el}>{el}</option>);}



  // useEffect(() => {
  //   const searchItem = props.items.find((item) => item.title === inputTerm 
  //   || item.author === inputTerm || item.subject === inputTerm)
  //   if (searchItem) {
  //     setFilter(searchItem) 
  //   } 
  //   // }, [props.items, id])
  // },[])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()  
  //   await axios.get('https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/')
  //     // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
  // }


  // useEffect(() => {
  // if (filter === api) return 
  // filterByFormula: `SEARCH("${slug}",{lookupCaseSlug} & "")`,
  // filterByFormula={Field Name}="value"
  // %201?fields%5B%5D=Notes&filterByFormula=SEARCH(%22ux%22%2C+Notes)&api_key=YOUR_API_KEY
  // setName(e.target.value)

  //     await axios.get(baseURL, { fields: searchItem }, config)
  
  // props.setToggleFetch((prevToggleFetch) => !prevToggleFetch) 


  // useEffect(() => {
  //   if (value == ) {
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
//     <div className='filter'>
//       <button onClick='filter-1'>Filter 1st</button>
//         <p>Options</p>

//       <form onSubmit={handleSubmit}>
//         <label
//           className='filter-label'
//         >
//           Filter
//         </label>
//         <select className='filter-label'>
//           <option selected value='title'>Title</option>
//           <option value='author'>Author</option>
//           <option value='subject'>Subject</option>
//         </select>
//       </form>
//       <Link>
//         <button>Filter</button>
//       </Link>
//     </div>
//   )
// }
// <select onChange=((e) => {console.log(e.target.value)}) ><option value='a'>A</option

export default Filter
