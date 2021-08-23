import React from 'react';
import Nav from './components/Nav'
import Add from './components/Add'
// import Catalog from './components/Catalog'
// import Detail from './components/Detail'
import Search from './components/Search'
import './App.css';
import axios from 'axios'
import { baseURL, config } from './services'

function App() {
  const [media, setMedia] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getMedia = async () => {
      const res = await axios.get(baseURL, config)
    }
  })

  return (
    <>
      <Nav />
        <div className="App">
          <header className="App-header">
            <h1>your library</h1>
          </header>
          <main>
            <Search />
            <p>search buttons</p>
            <Add />
          </main>
        </div>
    </>
  );
}

export default App;
