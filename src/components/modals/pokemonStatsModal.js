import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Modal, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonRequest } from "../../slices/pokemonsSlice"
import { titleCase } from "title-case"

const PokemonStatsModal = ({ url }) => {
  const dispatch = useDispatch()
  const pokemonStore = useSelector((state) => state.pokemons.pokemon)
  const isLoadingMore = useSelector((state) => state.spinner.isLoadingMore)

  const { Header, Title, Body, Footer } = Modal

  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
    dispatch(getPokemonRequest(url))
  }
  const closeModal = () => setShow(false)

  const title = () => (
    <Title>{titleCase(pokemonStore.data ? pokemonStore.data.name : "")}</Title>
  )

  const body = () => {
    return <Body>All Stats</Body>
  }

  console.log(pokemonStore)
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
