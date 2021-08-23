import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <h1>Navigation</h1>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add New Media</Link>
      <Link to='/search'>Search in Catalog</Link>
    </nav>
  )
}

export default Nav