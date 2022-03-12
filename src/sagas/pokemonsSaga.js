import { put, call, takeLatest } from "redux-saga/effects"
import { get } from "../helpers/apiHelpers/fetchWrapper"
import { getPokemons } from "../helpers/pokemonApi"
import {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsError,
  getNextPokemonsRequest,
  getNextPokemonsSuccess,
  getNextPokemonsError,
  getPokemonRequest,
  getPokemonSuccess,
  getPokemonError
} from "../slices/pokemonsSlice"
import {
  fetching,
  fetchingCompleted,
  fetchingMore,
  fetchingMoreCompleted
} from "../slices/spinnerSlice"

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
  yield put(fetchingMore())
  try {
    const data = yield call(get, payload)
    yield put(getNextPokemonsSuccess(data))
  } catch (error) {
    yield put(getNextPokemonsError(error.message))
  }
  yield put(fetchingMoreCompleted())
}

const getPokemonSaga = function* ({ payload }) {
  yield put(fetching())
  try {
    const data = yield call(get, payload)
    yield put(getPokemonSuccess(data))
  } catch (error) {
    yield put(getPokemonError(error.message))
  }
  yield put(fetchingCompleted())
}

const watchPokemonSagas = function* () {
  yield takeLatest(getPokemonsRequest.type, getPokemonsSaga)
  yield takeLatest(getNextPokemonsRequest.type, getNextPokemonsSaga)
  yield takeLatest(getPokemonRequest.type, getPokemonSaga)
}

export default watchPokemonSagas
