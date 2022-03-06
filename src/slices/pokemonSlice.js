import { createSlice } from "@reduxjs/toolkit"

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: null,
    error: null
  },
  reducers: {
    setPokemonIdentifierRequest: () => {},
    setPokemonIdentifierSuccess: (state, { payload }) => {
      state.pokemon = payload
      state.error = null
    },
    setPokemonIdentifierError: (state, { payload }) => {
      state.error = payload
    }
  }
})

export const {
  setPokemonIdentifierError,
  setPokemonIdentifierSuccess,
  setPokemonIdentifierRequest
} = pokemonSlice.actions
export default pokemonSlice.reducer
