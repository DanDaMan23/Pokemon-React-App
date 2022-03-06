import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pokemons: {
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
    }
  }
})

export const {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsError,
  setPokemons,
  setPokemonsError
} = pokemonsSlice.actions
export default pokemonsSlice.reducer
