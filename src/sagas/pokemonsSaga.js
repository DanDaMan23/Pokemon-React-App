import { put, call, takeLatest } from "redux-saga/effects"
import { getPokemons } from "../helpers/pokemonApi"
import { getPokemonsRequest, getPokemonsSuccess, getPokemonsError } from "../slices/pokemonsSlice"
import { fetching, fetchingCompleted } from "../slices/spinnerSlice"

const getPokemonsSaga = function* () {
  yield put(fetching())
  try {
    const data = yield call(getPokemons)
    yield put(getPokemonsSuccess(data))
  } catch (error) {
    yield put(getPokemonsError(error.message))
  }
  yield put(fetchingCompleted())
}

const watchPokemonSagas = function* () {
  yield takeLatest(getPokemonsRequest.type, getPokemonsSaga)
}

export default watchPokemonSagas
