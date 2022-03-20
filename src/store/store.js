import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
import watchPokemonSagas from "../sagas/pokemonsSaga"
import watchTypesSagas from "../sagas/typesSaga"
import spinnerSlice from "../slices/spinnerSlice"
import pokemonsSlice from "../slices/pokemonsSlice"
import typesSlice from "../slices/typesSlice"

const rootSaga = function* () {
  yield all([watchPokemonSagas(), watchTypesSagas()])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    spinner: spinnerSlice,
    types: typesSlice
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
