import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { ActionMovies, ComedyMovies, originals, RomanceMovies, trending } from './Constants/urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} categorie='Netflix Originals' />
        <RowPost url={ActionMovies} categorie='Action Movies' isSmall />
        <RowPost url={ComedyMovies} categorie='Comedy Movies' isSmall />
    </div>
  );
}

export default App;