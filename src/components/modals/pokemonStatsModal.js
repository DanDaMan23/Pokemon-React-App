import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Modal } from "react-bootstrap"

const PokemonStatsModal = ({ url }) => {
  const { Header, Title, Body, Footer } = Modal

  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
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
