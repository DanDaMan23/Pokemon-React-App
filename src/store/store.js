import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
import watchPokemonSagas from "../sagas/pokemonsSaga"
import watchPokemonSearchSaga from "../sagas/pokemonSearchSaga"
import watchTypesSagas from "../sagas/typesSaga"
import spinnerSlice from "../slices/spinnerSlice"
import pokemonsSlice from "../slices/pokemonsSlice"
import pokemonSlice from "../slices/pokemonSlice"
import typesSlice from "../slices/typesSlice"

const rootSaga = function* () {
  yield all([watchPokemonSagas(), watchPokemonSearchSaga(), watchTypesSagas()])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    spinner: spinnerSlice,
    pokemon: pokemonSlice,
    types: typesSlice
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
