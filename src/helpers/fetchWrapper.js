export const getPokemon = (pokemon) => {
  let retVal
  fetch(`https://pokeapi.co/api/v2/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      retVal = data
    })
  return retVal
}

export const getMultiplePokemons = (number) => {
  if (number < 1) {
    throw new Error("Number has to be at least 1")
  }
  let retVal;
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
    .then((res) => res.json())
    .then((data) => {
      retVal = data
    })
  return retVal
}
