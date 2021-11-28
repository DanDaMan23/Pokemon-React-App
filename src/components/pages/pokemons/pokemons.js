import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"
import { Button } from "react-bootstrap"
import { setPokemons } from "../../../slices/pokemonsSlice"
import { getPokemon } from "../../../helpers/fetchWrapper"

const Pokemons = () => {
  const pokemonNames = useSelector((state) => state.pokemons.pokemons)
  let name = ""
  let types = []
  let abilities = []

  const pokemons = []

  pokemonNames.map((pokemonName) => {
    getPokemon(pokemonName).then((result) => {
      name = result.name
      types = result.types
      abilities = result.abilities
      pokemons.push({ name, types, abilities })
    })
  })

  console.log(pokemons)

  return (
    <Container>
      <Row xs={1} sm={2} md={3}></Row>
    </Container>
  )
}

export default Pokemons
