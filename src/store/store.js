import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
import watchPokemonSagas from "../sagas/pokemonsSaga"
import watchPokemonSearchSaga from "../sagas/pokemonSearchSaga"
import spinnerSlice from "../slices/spinnerSlice"
import pokemonsSlice from "../slices/pokemonsSlice"
import pokemonSlice from "../slices/pokemonSlice"

const rootSaga = function* () {
  yield all([watchPokemonSagas(), watchPokemonSearchSaga()])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    spinner: spinnerSlice,
    pokemon: pokemonSlice
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
