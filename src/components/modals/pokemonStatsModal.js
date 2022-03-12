import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonRequest } from "../../slices/pokemonsSlice"

const PokemonStatsModal = ({ url }) => {
  const dispatch = useDispatch()
  const pokemonStore = useSelector((state) => state.pokemons.pokemon)


  const { Header, Title, Body, Footer } = Modal

  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
    dispatch(getPokemonRequest(url))
  }
  const closeModal = () => setShow(false)

  return (
    <>
      <Button variant='dark' onClick={showModal}>
        View Stats
      </Button>

      <Modal show={show} onHide={closeModal} centered>
        <Header closeButton>
          <Title>Pokemon Stats</Title>
        </Header>
        <Body>All Stats</Body>
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
