import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        // Query to get pokemon details by name
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
});

export const { useGetPokemonByNameQuery } = pokeApi;