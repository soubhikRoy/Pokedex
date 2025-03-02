import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokeApi } from "../services/pokeApi";

export const store = configureStore({
    reducer: {
        [pokeApi.reducerPath]: pokeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokeApi.middleware),
});

setupListeners(store.dispatch);
