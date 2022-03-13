import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, ListGroup, Modal, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonRequest } from "../../slices/pokemonsSlice"
import { titleCase } from "title-case"

import '../pages/pokemonTypes/pokemonTypes.css'

const PokemonStatsModal = ({ url }) => {
  const dispatch = useDispatch()
  const pokemonStore = useSelector((state) => state.pokemons.pokemon)
  const isLoadingMore = useSelector((state) => state.spinner.isLoadingMore)

  const { Header, Title, Body, Footer } = Modal
  const { Item } = ListGroup

  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
    dispatch(getPokemonRequest(url))
  }
  const closeModal = () => setShow(false)

  const title = () => (
    <Title>{titleCase(pokemonStore.data ? pokemonStore.data.name : "")}</Title>
  )

  const types = () => {
    if (pokemonStore.data?.types) {
      return (
        <div className='mb-3'>
          <h4>Types</h4>
          <ListGroup horizontal>
            {pokemonStore.data.types.map((type) => (
              <Item key={type.type.name} className={type.type.name}>{titleCase(type.type.name)}</Item>
            ))}
          </ListGroup>
        </div>
      )
    } else {
      return ""
    }
  }

  const abilities = () => {
    if (pokemonStore.data?.abilities) {
      return (
        <div className='mb-3'>
          <h4>Abilities</h4>
          <ListGroup>
            {pokemonStore.data.abilities.map((ability) => (
              <Item key={ability.ability.name}>{ability.ability.name}</Item>
            ))}
          </ListGroup>
        </div>
      )
    } else {
      return ""
    }
  }

  const body = () => {
    return (
      <Body scrollable='true'>
        {types()}
        {abilities()}
      </Body>
    )
  }

  return (
    <>
      <Button variant='dark' onClick={showModal}>
        View Stats
      </Button>

      <Modal show={show} onHide={closeModal} centered>
        <Header closeButton>{title()}</Header>
        <div className='d-flex justify-content-center'>
          {isLoadingMore ? <Spinner animation='border' /> : body()}
        </div>
        <Footer>
          <Button variant='outline-dark' onClick={closeModal}>
            Close
          </Button>
        </Footer>
      </Modal>
    </>
  )
}

PokemonStatsModal.propTypes = {
  url: PropTypes.string.isRequired
}

export default PokemonStatsModal
