import React, { useEffect, useState } from "react"
import { Container, Row, Col, Spinner, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import {
  getNextPokemonsRequest,
  getPokemonsRequest
} from "../../../slices/pokemonsSlice"
import PokemonCardTemplate from "../../templates/pokemonCardTemplate"
import PokemonSearchForm from "../../forms/pokemonSearchForm"

const Pokemons = () => {
  const pokemonsStore = useSelector((state) => state.pokemons.pokemons)
  const nextPokemonsStore = useSelector((state) => state.pokemons.nextPokemons)
  const isLoadingMore = useSelector((state) => state.spinner.isLoadingMore)
  const dispatch = useDispatch()

  const [pokemonsList, setPokemonsList] = useState([])
  const [nextLink, setNextLink] = useState("")

  useEffect(() => {
    setPokemonsList([])
    dispatch(getPokemonsRequest())
  }, [dispatch])

  useEffect(() => {
    if (pokemonsStore.data?.results) {
      setPokemonsList((prevState) => [
        ...prevState,
        ...pokemonsStore.data.results
      ])
      setNextLink(pokemonsStore.data.next)
    }
  }, [pokemonsStore.data])

  useEffect(() => {
    if (nextPokemonsStore.data?.results) {
      setPokemonsList((prevState) => [
        ...prevState,
        ...nextPokemonsStore.data.results
      ])
      setNextLink(nextPokemonsStore.data.next)
    }
  }, [nextPokemonsStore.data])

  return (
    <Container className='mt-3'>
      <PokemonSearchForm />
      <h1 className='mb-5'>All Pokemons</h1>
      <Row xs={1} sm={2} md={3}>
        {pokemonsList.map((pokemon) => (
          <Col key={pokemon.url}>
            <PokemonCardTemplate name={pokemon.name} stats={pokemon.url} />
          </Col>
        ))}
      </Row>
      <div className='mt-4 d-flex justify-content-center'>
        <Button
          variant='dark'
          onClick={() => dispatch(getNextPokemonsRequest(nextLink))}
        >
          {isLoadingMore ? <Spinner animation='border' /> : "Load More"}
        </Button>
      </div>
    </Container>
  )
}

export default Pokemons
