import React from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import { useSelector } from "react-redux"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons)
  const isLoading = useSelector((state) => state.spinner.isLoading)

  return (
    <Container>
      {isLoading ? (
        <div className='d-flex justify-content-center'>
          <Spinner animation='border' variant='dark' />
        </div>
      ) : (
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
      )}
    </Container>
  )
}

export default Pokemons
