import React from 'react';
import { map, isUndefined, isNil } from 'lodash';
import { useGetPokemonByNameQuery } from '../../services/pokeApi';
import PokemonDetails from '../PokemonDetails';


function Pokedex({ pokemonName }) {
    const [pokemonDetails, setPokemonDetails] = React.useState(null);
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);
    //if (isLoading) return <div>Loading...</div>;
    //if (error) return <div>Error: {error.message}</div>;
    React.useEffect(() => {
        if (!isUndefined(data)) {
            if (!isUndefined(data.name)) {
                setPokemonDetails({
                    sprites: data.sprites.front_default,
                    name: data.name,
                    height: data.height,
                    weight: data.weight,
                    type: data.types.map((type) => type.type.name).join(", "),
                    abilities: data.abilities.map((ability) => ability.ability.name).join(", "),
                    moves: data.moves.map((move) => move.move.name).join(", "),
                });
            }
        }
        if (!isUndefined(error)) {
            setPokemonDetails({
                name: "Pokemon not found"
            });
        }
    }, [data, error]);
    return (
        <div>
            {
                !isUndefined(pokemonDetails) && !isNil(pokemonDetails) &&
                <PokemonDetails
                    sprites={pokemonDetails.sprites}
                    name={pokemonDetails.name}
                    height={pokemonDetails.height}
                    weight={pokemonDetails.weight}
                    type={pokemonDetails.type}
                    abilities={pokemonDetails.abilities}
                    moves={pokemonDetails.moves}
                />
            }

        </div>
    );
}

export default Pokedex;