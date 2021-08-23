import React from 'react';
import Nav from './components/Nav'
import Add from './components/Add'
// import Catalog from './components/Catalog'
// import Detail from './components/Detail'
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>your library</h1>
      </header>
      <main>
        <Nav />>
        <p>search buttons</p>
        <Search />
        <Add />
      </main>
    </div>
  );
}

export default App;
