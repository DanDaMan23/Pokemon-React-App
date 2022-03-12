import { get } from "./apiHelpers/fetchWrapper"

export const getPokemon = async (pokemon) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await res.json()
  return data
}

export const getPokemons = async () => get("https://pokeapi.co/api/v2/pokemon/")

export const getTypes = async () => get("https://pokeapi.co/api/v2/type/")
