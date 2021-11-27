import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

import PokemonCardTemplate from "../../templates/pokemonCardTemplate"

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons)

  console.log(pokemons[0])

  return (
    <Container>
      <Row>
        {pokemons.map((pokemon) => (
          <Col>
            <PokemonCardTemplate
              name={pokemon.name}
              type={pokemon.type}
              abilities={pokemon.abilities}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Pokemons
