import { createSlice } from "@reduxjs/toolkit"

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    error: ""
  },
  reducers: {
    setPokemons: (state, { payload }) => {
      state.pokemons = payload
      state.error = ""
    },
    setPokemonsError: (state, { payload }) => {
      state.error = payload
    }
  }
})

export const { setPokemons, setPokemonsError } = pokemonsSlice.actions
export default pokemonsSlice.reducer
