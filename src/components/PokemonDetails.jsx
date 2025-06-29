import React from 'react';

function PokemonDetails({sprites, name, height, weight, type, abilities, moves}) {
    return (
        <div data-testid="pokemon-details">
            <img src={sprites} alt={name} />
            <h2>{name}</h2>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Abilities:</strong> {abilities}</p>
            <p><strong>Moves:</strong> {moves}</p>
        </div>
    );
};

export default PokemonDetails;