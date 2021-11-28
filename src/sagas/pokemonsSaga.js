import { put, call } from "redux-saga/effects"
import { getMultiplePokemons } from "../helpers/fetchWrapper"
import { setPokemons } from "../slices/pokemonsSlice"

const pokemonsSaga = function* (payload) {
  const data = yield call(getMultiplePokemons, payload)
  const pokemons = yield data.results
  const pokemonNames = yield []
  yield pokemons.map((pokemon) => pokemonNames.push(pokemon.name))
  yield put(setPokemons(pokemonNames))
}

const watchPokemonSagas = function* () {
  yield pokemonsSaga(50)
}

export default watchPokemonSagas
