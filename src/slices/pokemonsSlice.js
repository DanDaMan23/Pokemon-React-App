import { createSlice } from "@reduxjs/toolkit"

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: []
  },
  reducers: {
    setPokemons: (state, { payload }) => {
      state.pokemons = payload
    }
  }
})

export const { setPokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer
