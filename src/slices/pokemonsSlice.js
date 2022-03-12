import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pokemons: {
    data: null,
    error: null
  },
  nextPokemons: {
    data: null,
    error: null
  },
  pokemon: {
    data: null,
    error: null
  }
}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {
    getPokemonsRequest: (state) => {
      state.pokemons = initialState.pokemons
    },
    getPokemonsSuccess: (state, { payload }) => {
      state.pokemons.data = payload
    },
    getPokemonsError: (state, { payload }) => {
      state.pokemons.error = payload
    },
    getNextPokemonsRequest: (state) => {
      state.nextPokemons = initialState.nextPokemons
    },
    getNextPokemonsSuccess: (state, { payload }) => {
      state.nextPokemons.data = payload
    },
    getNextPokemonsError: (state, { payload }) => {
      state.nextPokemons.error = payload
    },
    getPokemonRequest: (state) => {
      state.pokemon = initialState.pokemon
    },
    getPokemonSuccess: (state, { payload }) => {
      state.pokemon.data = payload
    },
    getPokemonError: (state, { payload }) => {
      state.pokemon.error = payload
    },
    resetPokemon: (state) => {
      state.pokemon = initialState.pokemon
    }
  }
})

export const {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsError,
  getNextPokemonsRequest,
  getNextPokemonsSuccess,
  getNextPokemonsError,
  getPokemonRequest,
  getPokemonSuccess,
  getPokemonError,
  resetPokemon
} = pokemonsSlice.actions
export default pokemonsSlice.reducer
