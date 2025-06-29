import React from "react";
import { useState } from "react";
import Pokedex from "./Pokedex";
function PokedexMain() {
    const [pokemonName, setPokemonName] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setPokemonName(inputValue)
        }
    }

    const handleSearchClick = () => {
        setPokemonName(inputValue)
    }
    return (
        <div style={{ padding: '20px' }}>
            <h1>Pokédex</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
            <button onClick={handleSearchClick}>Search Pokémon!</button>
            <Pokedex pokemonName={pokemonName} />
        </div>
    );
}
export default PokedexMain;