import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons)
  console.log(pokemons[0].types)
  // let name = ""
  // let types = []
  // let abilities = []

  // const pokemons = []

  // pokemonNames.map((pokemonName) => {
  //   getPokemon(pokemonName).then((result) => {
  //     name = result.name
  //     types = result.types
  //     abilities = result.abilities
  //     pokemons.push({ name, types, abilities })
  //   })
  // })

  // console.log(pokemons)

  return (
    <Container>
      <Row xs={1} sm={2} md={3}>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Col key={pokemon.id}>
              <PokemonCardTemplate
                name={pokemon.name}
              />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Pokemons
