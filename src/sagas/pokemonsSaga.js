import { put, call } from "redux-saga/effects"
import { getMultiplePokemons } from "../helpers/pokemonApi"
import { setPokemons } from "../slices/pokemonsSlice"
import { fetching, fetchingCompleted } from "../slices/spinnerSlice"

const pokemonsSaga = function* (payload) {
  yield put(fetching())
  try {
    const data = yield call(getMultiplePokemons, payload)
    yield put(setPokemons(data))
  } catch {}
  yield put(fetchingCompleted())
}

const watchPokemonSagas = function* () {
  yield pokemonsSaga(50)
}

export default watchPokemonSagas
