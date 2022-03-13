import { put, call, takeLatest } from "redux-saga/effects"
import { getTypes } from "../helpers/pokemonApi"
import {
  getTypesRequest,
  getTypesSuccess,
  getTypesError
} from "../slices/typesSlice"
import { fetching, fetchingCompleted } from "../slices/spinnerSlice"

const getTypesSaga = function* () {
  yield put(fetching())
  try {
    const data = yield call(getTypes)
    yield put(getTypesSuccess(data))
  } catch (error) {
    yield put(getTypesError(error.message))
  }
  yield put(fetchingCompleted())
}

const watchTypesSagas = function* () {
  yield takeLatest(getTypesRequest.type, getTypesSaga)
}

export default watchTypesSagas
