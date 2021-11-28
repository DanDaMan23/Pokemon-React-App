import { put, call } from "redux-saga/effects"
import { getMultiplePokemons } from "../helpers/fetchWrapper"
import { setPokemons } from "../slices/pokemonsSlice"

const pokemonsSaga = function* (payload) {
  const data = yield getMultiplePokemons(payload)
  yield put(setPokemons(data))
}

const watchPokemonSagas = function* () {
  yield pokemonsSaga(50)
}

export default watchPokemonSagas
