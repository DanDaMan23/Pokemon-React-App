import { put, call, takeEvery } from "redux-saga/effects"
import { getPokemon } from "../helpers/pokemonApi"
import { fetching, fetchingCompleted } from "../slices/spinnerSlice"
import {
  setPokemonIdentifierError,
  setPokemonIdentifierSuccess,
  setPokemonIdentifierRequest
} from "../slices/pokemonSlice"

const pokemonSearchSaga = function* ({ payload }) {
  yield put(fetching())
  try {
    const data = yield call(getPokemon, payload)
    yield put(setPokemonIdentifierSuccess(data))
  } catch (error) {
    yield put(setPokemonIdentifierError(error))
  }
  yield put(fetchingCompleted())
}

const watchPokemonSearchSaga = function* () {
  yield takeEvery(setPokemonIdentifierRequest.type, pokemonSearchSaga)
}

export default watchPokemonSearchSaga
