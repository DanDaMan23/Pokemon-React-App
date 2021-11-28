import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons)

  return (
    <Container>
      <Row xs={1} sm={2} md={3}>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Col key={pokemon.id}>
              <PokemonCardTemplate
                name={pokemon.name}
                types={pokemon.types}
                abilities={pokemon.abilities}
              />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Pokemons
