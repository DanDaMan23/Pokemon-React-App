import { configureStore } from "@reduxjs/toolkit"
import pokemonsSlice from "../slices/pokemonsSlice"

const store = configureStore({
  reducer: { pokemon: pokemonsSlice.reducer },
})

console.log("Store is working")

export default store
