import { createSlice } from "@reduxjs/toolkit"

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [
      { name: "Bulbasaur", type: "Grass", abilities: ["Attack"] },
      { name: "Charmander", type: "Fire", abilities: ["Caton"] }
    ]
  },
  reducers: {
    getPokemons: (state, { payload }) => {
      state.pokemons = payload
    }
  }
})

export const { getPokemons } = pokemonsSlice.actions
export default pokemonsSlice.reducer
