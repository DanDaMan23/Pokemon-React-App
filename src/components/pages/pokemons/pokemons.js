import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"

const Pokemons = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PokemonCardTemplate
            name='Bulbasaur'
            type='Grass'
            abilities='Attach'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Pokemons
