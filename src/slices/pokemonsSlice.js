import { createSlice } from "@reduxjs/toolkit"

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    pokemon: {}
  },
  reducers: {
    setPokemons: (state, { payload }) => {
      console.log(payload)
      state.pokemons = payload
    }
  }
})

export const { setPokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer
