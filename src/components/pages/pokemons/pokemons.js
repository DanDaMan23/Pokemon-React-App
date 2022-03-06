import React, { useEffect } from "react"
import { Container, Row, Col, Spinner, Modal } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { getPokemonsRequest } from "../../../slices/pokemonsSlice"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"

const Pokemons = () => {
  const pokemonsStore = useSelector((state) => state.pokemons.pokemons)
  const isLoading = useSelector((state) => state.spinner.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonsRequest())
  }, [dispatch])

  return (
    <Container>
      <Row xs={1} sm={2} md={3}>
        {pokemonsStore.data && pokemonsStore.data.results &&
          pokemonsStore.data.results.map((pokemon) => (
            <Col key={pokemon.url}>
              <PokemonCardTemplate
                name={pokemon.name}
                stats={pokemon.url}
              />
            </Col>
          ))}
      </Row>
      <Modal backdrop='static' show={isLoading} centered>
        <Modal.Body className='d-flex justify-content-center'>
          <Spinner animation='border' />
          <h2>Loading</h2>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Pokemons
