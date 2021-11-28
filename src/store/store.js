import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import pokemonsSlice from "../slices/pokemonsSlice"
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects"
import watchPokemonSagas from "../sagas/pokemonsSaga"

const rootSaga = function* () {
  yield all([watchPokemonSagas()])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { pokemons: pokemonsSlice },
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
