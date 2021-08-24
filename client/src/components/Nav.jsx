import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <>
      <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/catalog'>Catalog</Link>
      </li>
      <li>
        <Link to='/add'>Add Media</Link>
      </li>
      <li>
        <Link to='/search'>Search</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav

// Link is specifically for links ie to help with moving around
//useParams - hook helps get the parameter passed on the URL without using the props object.