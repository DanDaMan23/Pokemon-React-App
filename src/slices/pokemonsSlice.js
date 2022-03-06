import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pokemons: {
    data: null,
    error: null
  },
  nextPokemons: {
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
    }
  }
})

export const {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsError,
  getNextPokemonsRequest,
  getNextPokemonsSuccess,
  getNextPokemonsError
} = pokemonsSlice.actions
export default pokemonsSlice.reducer
