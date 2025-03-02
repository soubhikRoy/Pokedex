import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/pokedex/Pokedex'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearchClick = () => {
    setPokemonName(inputValue)
  }

  return (
    <div>
      <h1>Pokédex</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Search Pokémon!</button>
      <Pokedex pokemonName={pokemonName} />
    </div>
  )
}

export default App