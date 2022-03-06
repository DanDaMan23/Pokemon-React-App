import { put, call, takeLatest } from "redux-saga/effects"
import { get } from "../helpers/apiHelpers/fetchWrapper"
import { getPokemons } from "../helpers/pokemonApi"
import {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsError,
  getNextPokemonsRequest,
  getNextPokemonsSuccess,
  getNextPokemonsError
} from "../slices/pokemonsSlice"
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

const getNextPokemonsSaga = function* ({ payload }) {
  try {
    const data = yield call(get, payload)
    yield put(getNextPokemonsSuccess(data))
  } catch (error) {
    yield put(getNextPokemonsError(error.message))
  }
}

const watchPokemonSagas = function* () {
  yield takeLatest(getPokemonsRequest.type, getPokemonsSaga)
  yield takeLatest(getNextPokemonsRequest.type, getNextPokemonsSaga)
}

export default watchPokemonSagas
