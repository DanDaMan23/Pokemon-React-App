import { put, call } from "redux-saga/effects"
import { getMultiplePokemons } from "../helpers/pokemonApi"
import { setPokemons } from "../slices/pokemonsSlice"

const pokemonsSaga = function* (payload) {
  const data = yield call(getMultiplePokemons, payload)
  yield put(setPokemons(data))
}

const watchPokemonSagas = function* () {
  yield pokemonsSaga(50)
}

export default watchPokemonSagas
