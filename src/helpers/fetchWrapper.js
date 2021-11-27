export const getPokemon = async (pokemon) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await res.json()
  return data
}

export const getMultiplePokemons = async (number) => {
  if (number < 1) {
    throw new Error("Number has to be at least 1")
  }
  if (isNaN(number)) {
    throw new Error("It has to be a number")
  }
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
  const data = await res.json()
  return data
}

export const getTypes = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/type`)
  const data = await res.json
  return data
}
