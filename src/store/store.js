import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
import watchPokemonSagas from "../sagas/pokemonsSaga"
import spinnerSlice from "../slices/spinnerSlice"
import pokemonsSlice from "../slices/pokemonsSlice"

const rootSaga = function* () {
  yield all([watchPokemonSagas()])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { pokemons: pokemonsSlice, spinner: spinnerSlice },
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
